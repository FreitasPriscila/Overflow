import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "../styles/tela-add-questoes.css";
import Layout from "../componentes/layout";
import { BASE_URL } from "../services/api";
import { FaArrowLeft } from "react-icons/fa";

const PencilIcon = () => <span className="pencil-icon-addq">✎</span>;

function TelaAddQuestoes() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const eventoId = searchParams.get("eventoId");
  const isEvento = !!eventoId;

  const [titulo, setTitulo] = useState("");
  const [descricaoCurta, setDescricaoCurta] = useState("");
  const [enunciado, setEnunciado] = useState("");
  const [pontos, setPontos] = useState(10);
  const [dificuldade, setDificuldade] = useState("facil");
  const [categoria, setCategoria] = useState("logica");
  const [exemploEntrada, setExemploEntrada] = useState("");
  const [exemploSaida, setExemploSaida] = useState("");
  
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const token = localStorage.getItem("accessToken");

    if (!token) {
        alert("Você precisa estar logado.");
        navigate("/");
        return;
    }
    const payload = {
        titulo: titulo,
        descricao_curta: descricaoCurta,
        enunciado: enunciado,
        pontos: parseInt(pontos),
        dificuldade: dificuldade,
        categoria: categoria,
        exemplos: [
            {
                entrada: exemploEntrada,
                saida: exemploSaida
            }
        ],
        evento: isEvento ? parseInt(eventoId) : null
    };

    const url = isEvento 
        ? `${BASE_URL}/api/eventos/eventos/${eventoId}/questoes/adicionar/`
        : `${BASE_URL}/api/questao/criar/`;

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            alert("Questão adicionada com sucesso!");
            navigate(isEvento ? `/questoesevento?id=${eventoId}` : "/menuquestao");
        } else {
            const data = await response.json();
            console.error("Erro backend:", data);
            alert("Erro ao criar questão: " + JSON.stringify(data));
        }
    } catch (error) {
        console.error("Erro rede:", error);
        alert("Erro de conexão.");
    } finally {
        setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="add-questao-container-addq">
        
        <button 
            onClick={() => navigate(-1)} 
            style={{background:'none', border:'none', color:'white', cursor:'pointer', marginBottom:'15px', display:'flex', alignItems:'center', gap:'5px'}}
        >
            <FaArrowLeft /> Voltar
        </button>

        <form className="add-questao-form-addq" onSubmit={handleSubmit}>
          <div className="form-column-addq form-esquerda">
            <div className="form-group-addq">
              <label htmlFor="titulo">Título da Questão</label>
              <div className="input-wrapper-addq">
                <input
                  type="text"
                  id="titulo"
                  value={titulo}
                  onChange={(e) => setTitulo(e.target.value)}
                  required
                  placeholder="Ex: Soma de dois números"
                />
                <PencilIcon />
              </div>
            </div>

            <div className="form-group-addq">
              <label htmlFor="descricaoCurta">Descrição Curta</label>
              <div className="input-wrapper-addq">
                <input
                  type="text"
                  id="descricaoCurta"
                  value={descricaoCurta}
                  onChange={(e) => setDescricaoCurta(e.target.value)}
                  required
                  placeholder="Ex: Crie um programa que some A + B"
                />
                <PencilIcon />
              </div>
            </div>

            <div className="form-group-addq">
              <label htmlFor="enunciado">Enunciado Completo</label>
              <div className="input-wrapper-addq">
                <textarea
                  id="enunciado"
                  value={enunciado}
                  onChange={(e) => setEnunciado(e.target.value)}
                  required
                  rows="5"
                  placeholder="Descreva detalhadamente o problema..."
                />
                <PencilIcon />
              </div>
            </div>

            <div className="form-group-addq">
              <label>Categoria</label>
              <div className="categorias-tags-addq" style={{flexDirection: 'column', gap: '5px'}}>
                 <select 
                    value={categoria} 
                    onChange={(e) => setCategoria(e.target.value)}
                    style={{padding: '10px', borderRadius: '5px', background: '#2B2B36', color: 'white', border: '1px solid #444'}}
                 >
                    <option value="matematica">Matemática</option>
                    <option value="logica">Lógica</option>
                    <option value="strings">Strings</option>
                    <option value="arrays">Arrays</option>
                    <option value="algoritmos">Algoritmos</option>
                 </select>
              </div>
            </div>
          </div>

          <div className="form-column-addq form-direita">
            
            <div className="form-group-addq">
              <label>Dificuldade</label>
              <div className="dificuldade-options-addq">
                <button
                  type="button"
                  className={`btn-dificuldade-addq dificil ${dificuldade === "dificil" ? "selected-addq" : ""}`}
                  onClick={() => setDificuldade("dificil")}
                >
                  <span className="custom-radio-addq"></span> Difícil
                </button>
                <button
                  type="button"
                  className={`btn-dificuldade-addq intermediario ${dificuldade === "intermediario" ? "selected-addq" : ""}`}
                  onClick={() => setDificuldade("intermediario")}
                >
                  <span className="custom-radio-addq"></span> Médio
                </button>
                <button
                  type="button"
                  className={`btn-dificuldade-addq facil ${dificuldade === "facil" ? "selected-addq" : ""}`}
                  onClick={() => setDificuldade("facil")}
                >
                  <span className="custom-radio-addq"></span> Fácil
                </button>
              </div>
            </div>

            <div className="form-group-addq">
              <label htmlFor="pontuacao">Pontuação</label>
              <div className="input-wrapper-addq">
                <input
                  type="number"
                  id="pontuacao"
                  value={pontos}
                  onChange={(e) => setPontos(e.target.value)}
                  required
                />
                <PencilIcon />
              </div>
            </div>

            <div className="form-group-addq">
              <label>Exemplo de Teste</label>
              <div className="input-wrapper-addq" style={{flexDirection:'column', gap:'10px', background:'transparent', border:'none'}}>
                <input
                    type="text"
                    placeholder="Entrada (Input) ex: 10 20"
                    value={exemploEntrada}
                    onChange={(e) => setExemploEntrada(e.target.value)}
                    style={{width:'100%', padding:'10px', borderRadius:'5px', background:'#2B2B36', color:'white', border:'1px solid #444'}}
                />
                <input
                    type="text"
                    placeholder="Saída Esperada (Output) ex: 30"
                    value={exemploSaida}
                    onChange={(e) => setExemploSaida(e.target.value)}
                    style={{width:'100%', padding:'10px', borderRadius:'5px', background:'#2B2B36', color:'white', border:'1px solid #444'}}
                />
              </div>
            </div>

            <button type="submit" className="btn-adicionar-addq" disabled={loading}>
              {loading ? "Salvando..." : "Adicionar Questão"}
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default TelaAddQuestoes;