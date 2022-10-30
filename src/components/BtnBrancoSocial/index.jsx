import arrow from '../../assets/img/arrow-right-blue.svg';
import './styles.css';

function BtnAzulSocial({icone, titulo, txt1, txt2}){
    return(
        <div className='btn-rede-social-white'>
            <div className='icone-titulo-rede-social-white'>
                <div className='icone-social-con-white'>
                    <img src={icone} alt="icone" />
                </div>
                <h3>{titulo}</h3>
            </div>
            <p className='subtitulo-rede-social-white'>{txt1}</p>
            <div className='txt-container-white'>
                <p id='txt-links-rede-social-white'>{txt2}</p>
                <img src={arrow} alt="Seta direita" />
            </div>
        </div>
    )
}

export default BtnAzulSocial;