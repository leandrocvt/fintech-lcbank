import mulher_rede from '../../assets/img/mulher-redes-sociais.svg';
import BtnAzulSocial from '../BtnAzulSocial';
import BtnBrancoSocial from '../BtnBrancoSocial';
import github from '../../assets/img/icon-github.svg';
import face from '../../assets/img/icon-face.svg';
import linkedin from '../../assets/img/icon-linkedin.svg';
import instagram from '../../assets/img/icon-insta.svg';
import './styles.css';

function RedesSociais() {
    return (
        <section className='redes-sociais'>
            <div className='img-redes-sociais'>
                <img src={mulher_rede} alt="Mulher" />
            </div>
            <div className='redes-sociais-links'>
                <h1>Não <span>perca</span> nossas <span>novidades</span></h1>
                <p className='txt-redes-sociais-sub'>Fique atento nas redes sociais da nome para saber nossas novidades</p>
                <div className='redes-sociais-bank'>
                    <a href="https://github.com/leandrocvt" target="_blank" rel="noopener noreferrer">
                        <BtnAzulSocial icone={github} titulo={"Github"} txt1={"Novidades a todo momento"} txt2={"Veja o projeto no github"} />
                    </a>
                    <a href="https://www.linkedin.com/in/leandrocavalcantidev" target="_blank" rel="noopener noreferrer">
                        <BtnBrancoSocial icone={face} titulo={"Facebook"} txt1={"Confie nas nossas novidades"} txt2={"Siga no facebook"} />
                    </a>
                </div>
                <div className='redes-sociais-bank'>
                    <a href="https://www.linkedin.com/in/leandrocavalcantidev" target="_blank" rel="noopener noreferrer">
                        <BtnBrancoSocial icone={linkedin} titulo={"Linkedin"} txt1={"Confie nas nossas novidades"} txt2={"Siga no linkedin"} />
                    </a>
                    <a href="https://www.instagram.com/leandro_221/" target="_blank" rel="noopener noreferrer">
                        <BtnAzulSocial icone={instagram} titulo={"Instagram"} txt1={"Todas as novidades"} txt2={"Siga nosso instagram"} />
                    </a>             

                  
                </div>
            </div>
        </section>
    )
}

export default RedesSociais;