import styles from "../styles/Tela-acerto.module.css";
import correto from "../assets/img_tela_verificacao/correto.png"
import tempo from "../assets/img_tela_verificacao/tempo.png"
import memoria from "../assets/img_tela_verificacao/memoria.png"
import parabens from "../assets/img_tela_verificacao/parabens.png"
import terminalpy from "../assets/img_tela_verificacao/terminalpy.png"
import { useNavigate } from "react-router-dom";
function Tela_acerto(){
    const navigate = useNavigate();
    const handleClick = () =>{
    navigate("/questao");
  }
    return(
        <div className={styles.main_verificacao}>
            <div className={styles.container_verificacao}>
                <div className={styles.barra_esquerda}>
                    <div className={styles.status}>
                        <h1><u>Status</u></h1>
                        <img src={correto} alt="" />
                        <h2>Correta</h2>
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
                        <img src={parabens} alt="" />
                        <h1>Questão Concluida! Continue assim!! :)</h1>
                        <p>Você conseguiu 5 Pts!</p>
                        <button onClick={handleClick}>Mais Questões</button>
                    </div>
                    <hr />
                    <div className={styles.code}>
                        <h1><u>Seu Codigo</u></h1>
                        <img src={terminalpy} alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
}
export default Tela_acerto;