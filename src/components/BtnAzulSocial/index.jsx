import arrow from '../../assets/img/arrow-right.svg';
import './styles.css';

function BtnAzulSocial({icone, titulo, txt1, txt2}){
    return(
        <div className='btn-rede-social'>
            <div className='icone-titulo-rede-social'>
                <div className='icone-social-con'>
                    <img src={icone} alt="icone" />
                </div>
                <h3>{titulo}</h3>
            </div>
            <p className='subtitulo-rede-social'>{txt1}</p>
            <div className='txt-container'>
                <p id='txt-links-rede-social'>{txt2}</p>
                <img src={arrow} alt="Seta direita" />
            </div>
        </div>
    )
}

export default BtnAzulSocial;