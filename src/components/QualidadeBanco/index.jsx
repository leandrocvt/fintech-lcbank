import icon_security from '../../assets/img/icon-security.svg';
import icon_lamp from '../../assets/img/icon-lamp.svg';
import icon_right from '../../assets/img/icon-right.svg';
import casal_idosos from '../../assets/img/idosos.svg';
import IconsQualidade from '../IconsQualidade';
import './styles.css';

function QualidadeBanco() {
    return (
        <section className='lc-bank-qualidade-banco'>
            <div className='img-qualidade-banco'>
                <img src={casal_idosos} alt="Casal de idosos" />
            </div>
            <div className='txt-qualidade-banco'>
                <div className='conteudo-qualidae-banco'>
                    <IconsQualidade icone={icon_security} titulo={"Segurança"} texto={"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of"} />
                </div>
                <div className='conteudo-qualidae-banco'>
                    <IconsQualidade icone={icon_lamp} titulo={"Inovação"} texto={"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of"} />
                </div>
                <div className='conteudo-qualidae-banco'>
                    <IconsQualidade icone={icon_right} titulo={"Simplicidade"} texto={"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of"} />
                </div>  
            </div>
        </section>
    )
}

export default QualidadeBanco;