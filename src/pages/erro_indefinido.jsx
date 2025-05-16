import styles from "../styles/erro_indefinido.module.css";
import interrogacao from "../assets/img_tela_verificacao/interrogacao.png"
import tempo from "../assets/img_tela_verificacao/tempo.png"
import memoria from "../assets/img_tela_verificacao/memoria.png"
import pensando  from "../assets/img_tela_verificacao/pensando.png"
import terminal from "../assets/img_tela_verificacao/terminal_vazio.png"
import { useNavigate } from "react-router-dom";
function erro_indefinido(){
    const navigate = useNavigate();
    const handleClick = () =>{
    navigate("/resolucao");
  }
    return(
        <div className={styles.main_verificacao}>
            <div className={styles.container_verificacao}>
                <div className={styles.barra_esquerda}>
                    <div className={styles.status}>
                        <h1><u>Status</u></h1>
                        <img src={interrogacao} alt="" />
                        <h2>Indefinido</h2>
                    </div>
                    <div className={styles.tempo}>
                        <h1><u>Tempo</u></h1>
                        <img src={tempo} alt="" />
                        <h2>0.071s</h2>
                    </div>
                    <div className={styles.memoria}>
                        <h1><u>Memoria</u></h1>
                        <img src={memoria} alt="" />
                        <h2>3676Bytes</h2>
                    </div>
                </div>
                <div className={styles.barra_direita}>
                    <div className={styles.mensagem}>
                        <h1>Seja bem-vindo(a) a plataforma Overflow!</h1>
                        <img src={pensando} alt="" />
                        <h1>Ops!! O código enviado não pode ser interpretado :/</h1>
                        <p>Ajuste seu código da maneira correta e tente enviar novamente!</p>
                        <button onClick={handleClick}>Voltar a Questões</button>
                    </div>
                    <hr />
                    <div className={styles.code}>
                        <h1><u>Seu Codigo</u></h1>
                        <img src={terminal} alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
}
export default erro_indefinido;