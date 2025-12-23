import { BASE_URL } from "../services/api.js";
import React, {useState} from "react";
import styles from "../styles/login.module.css";
import logo from "../assets/logo_page.svg";
import Nuvem from "../componentes/nuvem.jsx";
import { useNavigate } from "react-router-dom";



const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () =>{
    navigate("/cadastro");
  };

  const handleLogin = async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/auth/login/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("accessToken", data.access);
        localStorage.setItem("refreshToken", data.refresh);
        navigate("/inicio");
      } else {
        alert("Login falhou: " + (data.detail || "Verifique suas credenciais"));
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro de conexão.");
    }
  };

  return (
    <div className={styles.main}>
      <Nuvem />
      <div className={styles.imagem}>
        <div className={styles.textLogo}>
          <img src={logo} alt="imagem logo overflow" />
        </div>

        <div className={styles.textoImagem}>

          <img src="../src/assets/gif.gif" alt="gif"/>
          <div className={styles.mensagem}>
          <p className={styles.mensagemEquipe}>
            Desejamos uma excelente codificação para você!!
          </p>
          <p className={styles.equipeCaistech}>- Equipe Overflows💜</p>
          </div>
        </div>
      </div>
      <div className={styles.container}>
          <div className={styles.textoTitulo}>
            <span className={styles.titulo1}>Faça seu Login </span>
            <span className={styles.titulo2}>Bem-vindo ao Game</span>
          </div>
          <div className={styles.formulario}>
            <form>
              <div className={styles.mb3}>
                <label className={styles.label}htmlFor="accessKey">Email:</label>
                <div className={styles.inputGroup}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                  <path d="M20 21.5V19.5C20 18.4391 19.5786 17.4217 18.8284 16.6716C18.0783 15.9214 17.0609 15.5 16 15.5H8C6.93913 15.5 5.92172 15.9214 5.17157 16.6716C4.42143 17.4217 4 18.4391 4 19.5V21.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 11.5C14.2091 11.5 16 9.70914 16 7.5C16 5.29086 14.2091 3.5 12 3.5C9.79086 3.5 8 5.29086 8 7.5C8 9.70914 9.79086 11.5 12 11.5Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <input className={styles.input}
                  type="text"
                  id="accessKey"
                  placeholder="Digite seu apelido..."
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                </div>
              </div>
              <div className={styles.mb3}>
                <label className={styles.label} htmlFor="password">Senha:</label>
                <div className={styles.inputGroup}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 6 8" fill="none">
                  <path d="M3 1C3.26522 1 3.51957 1.10536 3.70711 1.29289C3.89464 1.48043 4 1.73478 4 2V3H2V2C2 1.73478 2.10536 1.48043 2.29289 1.29289C2.48043 1.10536 2.73478 1 3 1ZM5 3.076V2C5 1.46957 4.78929 0.960859 4.41421 0.585786C4.03914 0.210714 3.53043 0 3 0C2.46957 0 1.96086 0.210714 1.58579 0.585786C1.21071 0.960859 1 1.46957 1 2V3.076C0.46 3.242 0 3.673 0 4.3V6.7C0 7.516 0.781 8 1.5 8H4.5C5.219 8 6 7.516 6 6.7V4.3C6 3.673 5.54 3.242 5 3.076ZM1.105 4.125C1.21917 4.04069 1.35812 3.99672 1.5 4H4.5C4.64188 3.99672 4.78084 4.04069 4.895 4.125C4.98 4.193 5 4.258 5 4.3V6.7C5 6.742 4.98 6.807 4.895 6.875C4.78084 6.95931 4.64188 7.00328 4.5 7H1.5C1.35812 7.00328 1.21917 6.95931 1.105 6.875C1.02 6.807 1 6.742 1 6.7V4.3C1 4.258 1.02 4.193 1.105 4.125Z" fill="black"/>
                </svg>
                  <input className={styles.input}
                    type="password"
                    id="password"
                    placeholder="Digite sua senha..."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  
                </div>
                <div className={styles.senhas}>
                  <div className={styles.lembrarSenha}>
                  <input type="checkbox" className={styles.lembrar}/>
                    <p >Lembrar senha</p>
                  </div>
                <a href="#" >Esqueci minha senha</a>
                </div>
                  <button 
                  onClick={handleLogin}
                  type="button" className={styles.btnEntrar}>
                    Entrar
                  </button>
                <div className={styles.ajuda}>
                  <a onClick={handleClick}>Ainda não tem conta? Cadastre-se!</a>
                  <p>Ou</p>
                </div>
              </div>
              <div className={styles.integracoes}>
                  <div className={styles.integracao}>
                    <div className={styles.iconIntegracao}>
                    <svg className={styles.google}  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                      <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/>
                    </svg>
                    </div>
                    <p>Login com Google</p>
                  </div>
              
                  <div className={styles.integracao1}>
                    <div className={styles.iconIntegracao1}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                      <g clipPath="url(#clip0_1529_64)">
                        <path d="M15.8795 3.56613C14.7141 3.03136 13.4643 2.63737 12.1575 2.41171C12.1337 2.40736 12.11 2.41824 12.0977 2.44001C11.937 2.72589 11.7589 3.09884 11.6343 3.39198C10.2288 3.18156 8.83052 3.18156 7.45386 3.39198C7.32916 3.09232 7.14465 2.72589 6.9832 2.44001C6.97094 2.41897 6.94717 2.40808 6.92337 2.41171C5.61736 2.63665 4.36757 3.03064 3.20138 3.56613C3.19128 3.57048 3.18263 3.57774 3.17688 3.58717C0.806296 7.12878 0.156893 10.5833 0.475468 13.9951C0.47691 14.0118 0.486279 14.0277 0.499253 14.0379C2.0633 15.1865 3.57835 15.8838 5.06526 16.346C5.08906 16.3532 5.11427 16.3445 5.12941 16.3249C5.48114 15.8446 5.79468 15.3381 6.0635 14.8055C6.07937 14.7743 6.06422 14.7373 6.0318 14.725C5.53448 14.5363 5.06093 14.3063 4.60541 14.0451C4.56938 14.0241 4.5665 13.9726 4.59964 13.9479C4.6955 13.8761 4.79138 13.8013 4.88292 13.7259C4.89948 13.7121 4.92255 13.7092 4.94202 13.7179C7.9346 15.0842 11.1744 15.0842 14.1317 13.7179C14.1511 13.7084 14.1742 13.7114 14.1915 13.7251C14.2831 13.8006 14.3789 13.8761 14.4755 13.9479C14.5086 13.9726 14.5065 14.0241 14.4705 14.0451C14.0149 14.3114 13.5414 14.5363 13.0433 14.7243C13.0109 14.7366 12.9965 14.7743 13.0124 14.8055C13.287 15.3374 13.6005 15.8439 13.9457 16.3242C13.9602 16.3445 13.9861 16.3532 14.0099 16.346C15.504 15.8838 17.019 15.1865 18.5831 14.0379C18.5968 14.0277 18.6054 14.0125 18.6069 13.9958C18.9882 10.0515 17.9683 6.62523 15.9033 3.58789C15.8983 3.57774 15.8896 3.57048 15.8795 3.56613ZM6.5104 11.9177C5.60943 11.9177 4.86705 11.0905 4.86705 10.0747C4.86705 9.05885 5.59503 8.23169 6.5104 8.23169C7.43295 8.23169 8.16814 9.06611 8.15372 10.0747C8.15372 11.0905 7.42574 11.9177 6.5104 11.9177ZM12.5864 11.9177C11.6854 11.9177 10.9431 11.0905 10.9431 10.0747C10.9431 9.05885 11.671 8.23169 12.5864 8.23169C13.509 8.23169 14.2441 9.06611 14.2297 10.0747C14.2297 11.0905 13.509 11.9177 12.5864 11.9177Z" fill="white"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_1529_64">
                          <rect width="18.2857" height="18.2857" fill="white" transform="translate(0.399902 0.399963)"/>
                        </clipPath>
                      </defs>
                    </svg>
                    </div>
                    <p>Login com Discord</p>
                  </div>
                  <div className={styles.integracao2}>
                    <div className={styles.iconIntegracao2}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <g clipPath="url(#clip0_1529_6)">
                        <path d="M11.1296 10.4606L11.5657 8.0857H9.02722V7.24576C9.02722 5.99083 9.51962 5.50807 10.7938 5.50807C11.1895 5.50807 11.5082 5.51771 11.6916 5.53698V3.3843C11.344 3.28762 10.4945 3.19125 10.0021 3.19125C7.40517 3.19125 6.20806 4.41727 6.20806 7.06236V8.0857H4.60559V10.4606H6.20806V15.6283C6.80926 15.7775 7.43812 15.8571 8.08533 15.8571C8.40395 15.8571 8.71823 15.8375 9.02691 15.8002V10.4606H11.1292H11.1296Z" fill="white"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_1529_6">
                          <rect width="15.5429" height="15.5429" fill="white" transform="translate(0.314209 0.31427)"/>
                        </clipPath>
                      </defs>
                    </svg>
                    </div>
                    <p>Login com Facebook</p>
                  </div>
              </div>
            </form>
          </div>
          <div className={styles.socialInfos}>
            <div className={styles.title}>
              <span>Siga-nos nas nossas redes</span>
            </div>
            <div className={styles.social}>
              <a
                href="#"
                target="_blank"
                className={styles.socialLink}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <g clipPath="url(#clip0_1529_43)">
                    <path d="M7.5 2.11926C9.35361 2.11926 9.57312 2.12695 10.3021 2.15771C10.9796 2.18591 11.3454 2.29358 11.5893 2.3833C11.9118 2.50122 12.1449 2.64478 12.3861 2.87292C12.63 3.10364 12.779 3.32153 12.9037 3.62659C12.9985 3.8573 13.1123 4.20593 13.1421 4.84424C13.1747 5.53638 13.1828 5.74402 13.1828 7.49487C13.1828 9.24829 13.1747 9.45593 13.1421 10.1455C13.1123 10.7864 12.9985 11.1324 12.9037 11.3632C12.779 11.6682 12.6272 11.8887 12.3861 12.1168C12.1422 12.3475 11.9118 12.4885 11.5893 12.6064C11.3454 12.6962 10.9769 12.8038 10.3021 12.832C9.57041 12.8628 9.3509 12.8705 7.5 12.8705C5.64639 12.8705 5.42688 12.8628 4.6979 12.832C4.02041 12.8038 3.65457 12.6962 3.41067 12.6064C3.08818 12.4885 2.85513 12.345 2.61394 12.1168C2.37004 11.8861 2.221 11.6682 2.09634 11.3632C2.00149 11.1324 1.88767 10.7838 1.85786 10.1455C1.82534 9.45337 1.81721 9.24573 1.81721 7.49487C1.81721 5.74146 1.82534 5.53381 1.85786 4.84424C1.88767 4.20337 2.00149 3.8573 2.09634 3.62659C2.221 3.32153 2.37275 3.10107 2.61394 2.87292C2.85784 2.64221 3.08818 2.50122 3.41067 2.3833C3.65457 2.29358 4.02312 2.18591 4.6979 2.15771C5.42688 2.12695 5.64639 2.11926 7.5 2.11926ZM7.5 0.9375C5.61658 0.9375 5.38081 0.94519 4.64099 0.975952C3.90388 1.00671 3.39712 1.11951 2.95811 1.28101C2.50012 1.4502 2.1126 1.67322 1.72778 2.03979C1.34026 2.40381 1.10449 2.77039 0.925635 3.20105C0.754907 3.6189 0.635669 4.0957 0.603149 4.79297C0.57063 5.49536 0.5625 5.71838 0.5625 7.5C0.5625 9.28162 0.57063 9.50464 0.603149 10.2045C0.635669 10.9017 0.754907 11.3811 0.925635 11.7964C1.10449 12.2296 1.34026 12.5962 1.72778 12.9602C2.1126 13.3242 2.50012 13.5498 2.9554 13.7164C3.39712 13.8779 3.90117 13.9907 4.63828 14.0215C5.3781 14.0522 5.61387 14.0599 7.49729 14.0599C9.38071 14.0599 9.61648 14.0522 10.3563 14.0215C11.0934 13.9907 11.6002 13.8779 12.0392 13.7164C12.4945 13.5498 12.882 13.3242 13.2668 12.9602C13.6516 12.5962 13.8901 12.2296 14.0662 11.799C14.237 11.3811 14.3562 10.9043 14.3887 10.207C14.4212 9.5072 14.4294 9.28418 14.4294 7.50256C14.4294 5.72095 14.4212 5.49792 14.3887 4.7981C14.3562 4.10083 14.237 3.62146 14.0662 3.20618C13.8955 2.77039 13.6597 2.40381 13.2722 2.03979C12.8874 1.67578 12.4999 1.4502 12.0446 1.28357C11.6029 1.12207 11.0988 1.00928 10.3617 0.978516C9.61919 0.94519 9.38342 0.9375 7.5 0.9375Z" fill="white"/>
                    <path d="M7.5 4.12903C5.53257 4.12903 3.9364 5.63892 3.9364 7.5C3.9364 9.36108 5.53257 10.871 7.5 10.871C9.46743 10.871 11.0636 9.36108 11.0636 7.5C11.0636 5.63892 9.46743 4.12903 7.5 4.12903ZM7.5 9.68665C6.22361 9.68665 5.1884 8.7074 5.1884 7.5C5.1884 6.2926 6.22361 5.31335 7.5 5.31335C8.77639 5.31335 9.8116 6.2926 9.8116 7.5C9.8116 8.7074 8.77639 9.68665 7.5 9.68665Z" fill="white"/>
                    <path d="M12.0365 3.99573C12.0365 4.43152 11.6625 4.78272 11.2045 4.78272C10.7438 4.78272 10.3726 4.42896 10.3726 3.99573C10.3726 3.55994 10.7465 3.20874 11.2045 3.20874C11.6625 3.20874 12.0365 3.5625 12.0365 3.99573Z" fill="white"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_1529_43">
                      <rect width="13.875" height="13.125" fill="white" transform="translate(0.5625 0.9375)"/>
                    </clipPath>
                  </defs>
                </svg>
              </a>

              <a
                href="#"
                target="_blank"
                className={styles.socialLink}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                  <g clipPath="url(#clip0_1529_3399)">
                    <path d="M8 0.9375C4.065 0.9375 0.875 3.87566 0.875 7.5C0.875 10.5776 3.17552 13.16 6.27889 13.8693V9.5055H4.80971V7.5H6.27889V6.63585C6.27889 4.40224 7.37642 3.36694 9.75731 3.36694C10.2088 3.36694 10.9877 3.44858 11.3063 3.52995V5.34776C11.1381 5.33149 10.846 5.32335 10.4832 5.32335C9.31499 5.32335 8.86355 5.73101 8.86355 6.79073V7.5H11.1909L10.791 9.5055H8.86355V14.0145C12.3916 13.622 15.1253 10.8553 15.1253 7.5C15.125 3.87566 11.935 0.9375 8 0.9375Z" fill="white"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_1529_3399">
                      <rect width="14.25" height="13.125" fill="white" transform="translate(0.875 0.9375)"/>
                    </clipPath>
                  </defs>
                </svg>
              </a>

              <a 
                href="#"
                target="_blank"
                className={styles.socialLink}
              >
                <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
                </svg>
              </a>
            </div>
          </div>
      </div>
    </div>
  );
};
export default Login;
