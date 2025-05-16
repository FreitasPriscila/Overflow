import { useState } from "react";
import logo from "../assets/logo_page.svg";
import style from "../styles/Tela-Cadastro.module.css";
import NuvensAnimadas from "../componentes/nuvem.jsx";
import { useNavigate } from "react-router-dom";

function Cadastro() {
    const navigate = useNavigate();
    const handleClickLogin = () =>{
    navigate("/");
  }
  const [nome, setNome] = useState("");
  const [apelido, setApelido] = useState("");
  const [email, setEmail] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [sexo, setSexo] = useState("");
  const [tipoUsuario, setTipoUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [erro, setErro] = useState("");

  function handleSubmit(e) {
    
    e.preventDefault();

    if (!nome || !apelido || !email || !dataNascimento || !sexo || !tipoUsuario || !senha || !confirmarSenha) {
      setErro("Todos os campos são obrigatórios!");
      return;
    }

    if (senha !== confirmarSenha) {
      setErro("As senhas não coincidem.");
      return;
    }

    setErro("");
    alert("Conta criada com sucesso!");
  }

  return (
    <div className={style.main_cadastro}>
      <NuvensAnimadas />
      <div className={style.container_cadastro}>
        <form onSubmit={handleSubmit} className={style.form_cadastro}>
          <h1 className={style.titulo_cadastro}>Criar nova conta</h1>

          <div className={style.nome_apelido}>
            <div className={style.nome_cadastro}>
              <h3>Nome:</h3>
              <input className={style.inputPadrao}
                type="text"
                placeholder="Digite seu nome..."
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
            <div className={style.apelido}>
              <h3>Apelido:</h3>
              <input className={style.inputPadrao}
                type="text"
                placeholder="Digite seu apelido..."
                value={apelido}
                onChange={(e) => setApelido(e.target.value)}
              />
            </div>
          </div>

          <div className={style.email_cadastro}>
            <h3>Email:</h3>
            <input className={style.inputPadrao}
              type="email"
              placeholder="Digite seu e-mail..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={style.data_sexo}>
            <div className={style.data_cadastro}>
              <h3>Data de Nascimento:</h3>
              <input
                type="date"
                className={style.data_input}
                value={dataNascimento}
                onChange={(e) => setDataNascimento(e.target.value)}
              />
            </div>
            <div className={style.sexo_cadastro}>
              <h3>Sexo:</h3>
              <label>
                <input type="radio" name="sexo" value="Masculino" onChange={(e) => setSexo(e.target.value)} />Masculino
              </label>
              <label>
                <input type="radio" name="sexo" value="Feminino" onChange={(e) => setSexo(e.target.value)} />Feminino
              </label>
              <label>
                <input type="radio" name="sexo" value="Outro" onChange={(e) => setSexo(e.target.value)} />Outro
              </label>
            </div>
          </div>

          <div className={style.tipo_usuario}>
            <h3>Tipo de Usuário:</h3>
            <label>
              <input type="radio" name="tipo_user" value="Estudante" onChange={(e) => setTipoUsuario(e.target.value)} />Estudante
            </label>
            <label>
              <input type="radio" name="tipo_user" value="Professor" onChange={(e) => setTipoUsuario(e.target.value)} />Professor
            </label>
          </div>

          <div className={style.senha_cadastro}>
            <h3>Senha:</h3>
            <input className={style.inputPadrao}
              type="password"
              placeholder="Digite sua senha..."
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <h3>Confirmação de senha:</h3>
            <input className={style.inputPadrao}
              type="password"
              placeholder="Confirme sua senha..."
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
            />
            <label>
              <input type="checkbox" value="aceito" />
              Eu aceito os termos e condições, Política de Privacidade e política de Cookies
            </label>
          </div>

          <div className={style.botao_cadastro}>
            {erro && <p className={style["mensagem-erro"]}>{erro}</p>}
            <button className={style.button} type="submit">Criar Conta</button>
          </div>
        </form>
      </div>

      <div className={style.fundo}>
        <div className={style.logo}>
          <img src={logo} alt="imagem overflow" />
        </div>
        <hr className={style.hr}/>
        <div className={style.login}>
          <button onClick={handleClickLogin}>Realizar Login</button>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;