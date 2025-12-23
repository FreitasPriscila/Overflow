import { BASE_URL } from "../services/api";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import styles from "../styles/menu-questao.module.css";
import Layout from "../componentes/layout";


import ouro from "../assets/Rank/ouro.png";
import prata from "../assets/Rank/prata.png";
import bronze from "../assets/Rank/bronze.png";
import { FaPlus, FaSearch, FaTrash } from "react-icons/fa"; // Adicionado FaTrash


const MenuQuestao = () => {
  const navigate = useNavigate();
  
  const [questoes, setQuestoes] = useState([]);
  const [loadingQuestoes, setLoadingQuestoes] = useState(true);
  
  const [ranking, setRanking] = useState([]);
  const [loadingRanking, setLoadingRanking] = useState(true);

  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState("");
  //const [linguagem, setLinguagem] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
    };

    const fetchQuestoes = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/questao/listar/`, { headers });
        if (response.ok) {
          const data = await response.json();
          setQuestoes(Array.isArray(data) ? data : []);
        }
      } catch (error) {
        console.error("Erro ao buscar questões:", error);
      } finally {
        setLoadingQuestoes(false);
      }
    };

    const fetchRanking = async () => {
        try {
            const response = await fetch(`${BASE_URL}/api/ranking/geral/`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}` 
                }
            });
            
            if (response.ok) {
                const data = await response.json();
                setRanking(Array.isArray(data) ? data.slice(0, 3) : []);
            }
        } catch (error) {
            console.error("Erro ao buscar ranking:", error);
        } finally {
            setLoadingRanking(false);
        }
    };

    fetchQuestoes();
    fetchRanking();
  }, []);

  const handleExcluir = async (id, e) => {
    e.stopPropagation(); 
    
    if (!window.confirm("Tem certeza que deseja excluir esta questão?")) return;

    const token = localStorage.getItem("accessToken");

    try {
        const response = await fetch(`${BASE_URL}/api/questao/${id}/deletar/`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`,
                "X-CSRFTOKEN": "seu-csrf-token-se-necessario" 
            }
        });

        if (response.status === 204 || response.ok) {
            alert("Questão excluída!");
            setQuestoes(prev => prev.filter(q => q.id !== id));
        } else {
            alert("Erro ao excluir. Verifique se você é o criador.");
        }
    } catch (error) {
        console.error(error);
        alert("Erro de conexão.");
    }
  };

  const questoesFiltradas = questoes.filter((q) => {
    const matchBusca = q.titulo?.toLowerCase().includes(busca.toLowerCase());
    const matchCategoria = categoria === "" || q.categoria?.toLowerCase() === categoria.toLowerCase();
    return matchBusca && matchCategoria;
  });

  const getEstiloDificuldade = (dif) => {
    switch (dif) {
        case 'facil': return styles.nivel_facil;
        case 'intermediario': return styles.nivel_intermediario;
        case 'dificil': return styles.nivel_dificil;
        default: return styles.nivel_facil;
    }
  };

   const getMedalha = (index) => {
      if (index === 0) return ouro;
      if (index === 1) return prata;
      if (index === 2) return bronze;
      return null;
  };


  return (
    <div className={styles.corpo}>
      <Layout >
        <div className={styles.container}>
          <div className={styles.columns}>
            <div className={styles.box_dados}>
              <div className={styles.progresso}>
                <h3>
                  40<span>%</span>
                </h3>
                <p>Finalizado</p>
              </div>
                <div className = {styles.retanguleRancking}>
                  <h4>Top 3 - Rank</h4>
                {loadingRanking ? <p style={{textAlign:'center', color:'#ccc'}}>Carregando...</p> : 
                 ranking.map((jogador, index) => (
                    <div key={index} className={styles.colocados}>
                        <span>
                            <span className={styles.equipes}>
                                <img src={getMedalha(index)} alt="medalha" width="20px"/>
                                {jogador.username.length > 10 ? jogador.username.substring(0,10)+'...' : jogador.username}
                            </span>
                            - <span>{jogador.pontuacao} Pts</span>
                        </span>
                    </div>
                ))}
                </div>

              <div className={styles.envios}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="38" height="32" viewBox="0 0 38 32" fill="none">
                    <g filter="url(#filter0_d_706_1731)">
                        <path d="M28.8177 1.77551C29.3459 1.27259 30.0489 0.994562 30.7782 1.00008C31.5076 1.0056 32.2062 1.29424 32.7268 1.80509C33.2474 2.31594 33.5492 3.00905 33.5685 3.73816C33.5877 4.46728 33.323 5.17536 32.8302 5.71301L17.8677 24.4255C17.6104 24.7026 17.2998 24.925 16.9547 25.0794C16.6095 25.2337 16.2367 25.3169 15.8586 25.3239C15.4805 25.3309 15.1049 25.2616 14.7542 25.1201C14.4036 24.9787 14.085 24.7679 13.8177 24.5005L3.89516 14.578C3.61883 14.3205 3.3972 14.01 3.24348 13.665C3.08976 13.32 3.0071 12.9476 3.00044 12.57C2.99377 12.1923 3.06324 11.8172 3.2047 11.467C3.34615 11.1168 3.55669 10.7987 3.82376 10.5316C4.09083 10.2645 4.40896 10.054 4.75917 9.91255C5.10937 9.7711 5.48448 9.70163 5.86212 9.70829C6.23975 9.71496 6.61218 9.79761 6.95718 9.95133C7.30217 10.1051 7.61267 10.3267 7.87016 10.603L15.7227 18.4518L28.7464 1.85801L28.8177 1.77551Z" fill="#25D366"/>
                    </g>
                    <defs>
                        <filter id="filter0_d_706_1731" x="0.6" y="0.6" width="37.3694" height="31.1242" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dx="1" dy="3"/>
                        <feGaussianBlur stdDeviation="1.7"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.145098 0 0 0 0 0.827451 0 0 0 0 0.327059 0 0 0 0.4 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_706_1731"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_706_1731" result="shape"/>
                        </filter>
                    </defs>
                    </svg>
                <span>Envios <span className={styles.correto}>Corretos</span></span>
                <span className="erros">
                  <span>26</span>/{"  "}10
                </span>
              </div>
            </div>

<div className={styles.box_listaquestoes}>
              <div style={{display:'flex', gap:'10px', marginBottom:'15px'}}>
                 <div className={styles.searchBar} style={{flex:1, background:'#1E1E2E', borderRadius:'8px', display:'flex', alignItems:'center', padding:'0 10px'}}>
                    <FaSearch color="#888" />
                    <input 
                        type="text" placeholder="Buscar..." 
                        value={busca} onChange={e=>setBusca(e.target.value)} 
                        style={{background:'transparent', border:'none', color:'white', padding:'10px', width:'100%', outline:'none'}}
                    />
                 </div>
                 <select value={categoria} onChange={e=>setCategoria(e.target.value)} style={{padding:'10px', borderRadius:'8px', border:'none', background:'#1E1E2E', color:'white'}}>
                    <option value="">Todas</option>
                    <option value="matematica">Matemática</option>
                    <option value="logica">Lógica</option>
                    <option value="strings">Strings</option>
                 </select>
                 <button onClick={()=>navigate("/addquestoes")} style={{padding:'10px 15px', borderRadius:'8px', border:'none', background:'#6325CE', color:'white', fontWeight:'bold', cursor:'pointer', display:'flex', alignItems:'center', gap:'5px'}}>
                    <FaPlus/> Criar
                 </button>
              </div>

              {loadingQuestoes ? <p style={{color:'white', textAlign:'center'}}>Carregando...</p> : 
               questoesFiltradas.length === 0 ? <p style={{color:'white', textAlign:'center'}}>Nenhuma questão encontrada.</p> :
               questoesFiltradas.map(q => (
                  <div key={q.id} className={styles.questao}>
                    <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-start'}}>
                        <a onClick={() => navigate(`/resolucao?questaoId=${q.id}&tipo=geral`)} className={styles.questao_name} style={{cursor:'pointer', flex: 1}}>
                            <h2>{q.titulo}</h2>
                        </a>
                        
                        <button 
                            onClick={(e) => handleExcluir(q.id, e)}
                            style={{
                                background: 'transparent',
                                border: 'none',
                                color: '#ff5555',
                                cursor: 'pointer',
                                fontSize: '1rem',
                                padding: '5px'
                            }}
                            title="Excluir questão"
                        >
                            <FaTrash />
                        </button>
                    </div>

                    <p>{q.descricao_curta || q.enunciado?.substring(0, 100) + '...'}</p>
                    
                    <div className={styles.info_questoes}>
                        <div className={styles.info_pessoas}>
                            <div className="criador">
                                <span className={styles.Criador}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path d="M13.3333 14V12.6667C13.3333 11.9594 13.0523 11.2811 12.5522 10.781C12.0521 10.281 11.3739 10 10.6666 10H5.33329C4.62605 10 3.94777 10.281 3.44767 10.781C2.94758 11.2811 2.66663 11.9594 2.66663 12.6667V14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M8.00004 7.33333C9.4728 7.33333 10.6667 6.13943 10.6667 4.66667C10.6667 3.19391 9.4728 2 8.00004 2C6.52728 2 5.33337 3.19391 5.33337 4.66667C5.33337 6.13943 6.52728 7.33333 8.00004 7.33333Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                    <span>{q.criado_por || "Comunidade"}</span>
                                </span>
                            </div>
                            <span title="Tentativas">
                                <i className="bx bxs-paper-plane"></i>
                                <span className="respostas">{q.tentativas}</span> Tentativas
                            </span>
                        </div>
                        <div className={styles.infos_gerais}>
                            <div className={styles.tags}>
                                <span className="tag" style={{textTransform:'capitalize'}}>{q.categoria}</span>
                            </div>
                            <div className={getEstiloDificuldade(q.dificuldade)}>
                                <span style={{textTransform:'capitalize'}}>{q.dificuldade}</span>
                            </div>
                            <div className={styles.pontos}><span>+{q.pontos} pts</span></div>
                        </div>
                    </div>
                  </div>
               ))
              }
            </div>
          </div>
        </div>
      </Layout>
      </div>
  );
};
export default MenuQuestao;
