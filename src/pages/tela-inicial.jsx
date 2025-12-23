import Layout from '../componentes/layout';
import styles from '../styles/inicio.module.css';
import { pegarHora } from '../utils/momentoDia.js';
import ImagemPerfil from '../assets/img/coruja-mascote.png';
import ImagemAlbum from '../assets/img/centralMusic/Teto.jpg';
import ImagemCaisTech from '../assets/img/insignias/image.png';
import ImagemConquista from '../assets/img/conquistas/image.png';
import Heatmap from '../assets/img/heatmap.png';
import Clima from '../assets/img/iconsClima/tempestade.png';
import Calendario from "../componentes/Calendario";
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import * as d3 from 'd3';
import moment from 'moment';
import Usuario from "./usuario.jsx";
// import calendarHeatmapMini from '../assets/apis-internas/heatmap/calendar-heatmap-mini.js';
// import '../assets/apis-internas/heatmap/calendar-heatmap-mini.css';

export default function PaginaInicial() {
    const [mostrarModal, setMostrarModal] = useState(false);
    
    const abrirModal = () => setMostrarModal(true);
    const fecharModal = () => setMostrarModal(false);
    // const heatmapRef = useRef(null);

//   useEffect(() => {
//     // Dados de exemplo para o heatmap
//     const heatmapData = generateHeatmapData();
    
//     // Configuração do heatmap
//     const heatmap = calendarHeatmapMini()
//       .data(heatmapData)
//       .selector('.heatmap')
//       .tooltipEnabled(true)
//       .colorRange(['#D8E6E7', '#422183'])
//       .onClick(function(data) {
//         console.log('Dados clicados:', data);
//       });
    
//     // Renderiza o heatmap
//     heatmap();
//   }, []);

//   // Função para gerar dados aleatórios de exemplo
//   function generateHeatmapData() {
//     const startDate = moment().subtract(1, 'year').startOf('day');
//     const endDate = moment().endOf('day');
//     const daysDiff = endDate.diff(startDate, 'days');
    
//     return Array.from({ length: daysDiff }, (_, i) => {
//       const date = moment(startDate).add(i, 'days').toDate();
//       const count = Math.floor(Math.random() * 10); // Valores aleatórios entre 0 e 10
//       return { date, count };
//     });
//   }

  return (
    // O que tiver aqui dentro já tem uma div pai chamada ".principal"
    <div className="corpo" style={{ height: 'calc(100vh - 100px)', display: 'flex', flexDirection: 'column' }}>
    <Layout> 
        <div className={styles.container}>
        <div className={styles.lateral_esquerda}>
            <div className={styles.container_infos}>
                <div className={styles.info_perfil}>
                    <div className={styles.parteSuperior}>
                    <div className={styles.dadosGerais}>
                        <div className={styles.foto_perfil}>
                            
                                <img src={ImagemPerfil} alt="Imagem de Perfil"/>
                            
                        </div>
                        <div className={styles.tituloEquipe}>
                            <div className={styles.tituloPrincipal}>
                                <h2>{pegarHora()}, Sr. <span className={styles.nome_usuario}>ZacksBM!</span> :)</h2>
                            </div>
                            <div className={`row ${styles.dados}`}>
                                <div className={`col ${styles.integrantesData}`}>
                                    <div className={styles.integrantes}>
                                        <span title='Nome Completo'>
                                            <i className={`bx bx-user ${styles.bx}`}></i> Usuário: <span id="integrante1" className={styles.nomeIntegrante}>Isac B. Matos</span>
                                        </span>
                                    </div>
                                    <div className={styles.entraramNaPlataforma}>
                                        <span title='Data de Registro'><i className={`bx bx-door-open ${styles.bx}`}></i> Registrados em: <span className={styles.data}>19/05/2025</span></span>
                                    </div>
                                    <div className={styles.tempo}>
                                        <span title='Tempo Online'><i className={`bx bx-timer ${styles.bx}`}></i> Tempo Online: <span className={styles.tempoOn}>7 horas e 07 minutos</span></span>
                                    </div>
                                </div>
                                <div className={`col ${styles.tempoLinguagens}`}>
                                    <div className={styles.linguagens}>
                                        <span title="Linguagens de Programação">
                                        <i className={`bx bx-code-alt ${styles.bx}`}></i> Linguagem(ns): 
                                        <span className={styles.linguage}>
                                            <i title="Java" className={`bx bxl-java ${styles.linguagem}`}></i>
                                            <i title="C++" className={`bx bxl-c-plus-plus ${styles.linguagem}`}></i>
                                            <i title="Python" className={`bx bxl-python ${styles.linguagem}`}></i>
                                        </span>
                                        </span>
                                    </div>
                                    <div className={styles.salaCode}>
                                        <span title="Código"><i className={`bx bx-qr ${styles.bx}`}></i> Cód:<span className={styles.tempoOn}> OVER-001</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.configuracao}>
                            <span onClick={abrirModal}><i class="bi bi-gear"></i></span>
                        </div>
                    </div>
                </div>

                <hr className={styles.linha}/>

                <div className={styles.consquistasInsignias}>
                        <div className={styles.parteConquista}>
                            <div className={styles.tituloPartes}>
                                <span><i class={`bx bx-medal ${styles.bx}`}></i> Conquistas</span>
                            </div>
                            <div className={styles.conquistas}>
                                <button className={styles.nav_button}><i class={`bx bx-chevron-left`}></i></button>
                                <div className={styles.badges}>
                                    <img src={ImagemConquista} alt="Conquista - Continue Focado(a)" className={styles.badge} title="Continue Focado(a) - 20Pts"/>
                                </div>
                                <button className={styles.navButton}><i class='bx bx-chevron-right'></i></button>
                            </div>
                        </div>
                        <div className={styles.parteConquista}>
                            <div className={styles.tituloPartes}>
                                <span><i className={`bx bx-code-alt ${styles.bx}`}></i> Insígnias</span>
                            </div>
                            <div className={styles.insignias}>
                                <button className={styles.nav_button}><i class='bx bx-chevron-left'></i></button>
                                <div className={styles.badges}>
                                    <img src={ImagemCaisTech} alt="Insígnia - CaisTech 2025" className={styles.badge} title="CaisTech 2K25 - 30Pts"/>
                                </div>
                                <button className={styles.navButton}><i class='bx bx-chevron-right'></i></button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={styles.parteInferior}>
                    <div className={styles.graficoPerfil}>
                        <div className={styles.tituloGrafico}>
                            <span><i className={`bx bx-line-chart ${styles.bx}`}></i>  Progresso</span>
                        </div>

                        <div className={styles.graficoHeatmap}>
                            <div className={styles.heatmap}>
                                <img src={Heatmap} alt="Heatmap" />
                            </div>
                        </div>

                        <div className={styles.infoPlataforma}>
                            <span>Plataforma Overflow💜 - Todos os Direitos Reservados | <span className={styles.ano}>2025</span></span>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        

        <div className={styles.lateral_direita}>
            <div className={styles.containerCards}>
                <div className={styles.clima}>
                    <div className={styles.tituloAnucio}>
                        <h2>Anúncios</h2>
                    </div>
                    <div className={styles.conteudo}>
                        <span><i className={`bi bi-exclamation-circle-fill ${styles.biAnuncio}`}></i></span>
                        <span>Nenhum Anúncio<br/> Encontrado!</span>
                    </div>
                </div>
                <div className={styles.discord}>
                    <iframe src="https://discord.com/widget?id=1386134219528601651&theme=dark&locale=pt-BR" width="100%" height="100%" allowtransparency="true" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                </div>
                <div className={styles.centralMusica}>
                        <div className={styles.tituloCentral}>
                            <span><i className={`bi bi-spotify ${styles.bi}`}></i> Spotify</span>
                        </div>
                        <div className={styles.logoAlbum}>
                            <img src={ImagemAlbum} alt="Teto"/>
                            <span>Teto - Maior que o Tempo</span>
                        </div>
                        <div className={styles.card_wrapper}>
                            <button className={styles.card_btn}><svg fill="none" height="12" viewBox="0 0 20 12" width="20" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><clipPath id="a"><path d="m0 0h20v12h-20z"></path></clipPath><g><path d="m17 1c0-.265216-.1054-.51957-.2929-.707107-.1875-.187536-.4419-.292893-.7071-.292893h-8v2h7v5h-3l3.969 5 4.031-5h-3zm-14 10c0 .2652.10536.5196.29289.7071.18754.1875.44189.2929.70711.2929h8v-2h-7v-5h3l-4-5-4 5h3z" fill="#fff"></path></g></svg></button>
                            <button className={styles.card_btn}><svg width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5 8V0L0 8L11.5 16V8ZM23 0L11.5 8L23 16V0Z" fill="#fff"></path></svg></button>
                            <button className={`${styles.card_btn} ${styles.card_btn_play}`}><svg fill="none" height="22" viewBox="0 0 18 22" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m0 0v22l18-11z" fill="#000"></path></svg></button>
                            <button className={styles.card_btn}><svg width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5 8V0L23 8L11.5 16V8ZM0 0L11.5 8L0 16V0Z" fill="#fff"></path></svg></button>
                            <button className={styles.card_btn}><svg fill="#fff" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><clipPath id="a"><path d="m0 .5h20v19h-20z"></path></clipPath><g fill="#fff"><path d="m15 14.5h-1.559l-9.7-10.673c-.09376-.10305-.20802-.18536-.33545-.24168-.12744-.05631-.26523-.08537-.40455-.08532h-3.001v2h2.559l4.09 4.5-4.09 4.501h-2.559v2h3.001c.13932 0 .27711-.029.40455-.0853.12743-.0563.24169-.1387.33545-.2417l4.259-4.687 4.259 4.686c.0938.103.208.1854.3355.2417.1274.0563.2652.0853.4045.0853h2.001v3l5-4-5-4z"></path><path d="m13.4406 5.5h1.559v3l5-3.938-5-4.062v3h-2.001c-.1393-.00005-.2771.02901-.4045.08532-.1275.05632-.2417.13863-.3355.24168l-3.36798 3.707 1.47998 1.346z"></path></g></svg></button>
                        </div>
                    </div>
            </div>
        </div>
        </div>
        {mostrarModal && <Usuario onClose={fecharModal} />}
    </Layout>
    </div>
  );
}
