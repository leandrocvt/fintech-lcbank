import cartoes from '../../assets/img/cartao-inicio.png';
import BtnArrow from '../BtnArrow';
import './styles.css';

function Inicio() {
    return (
        <section>
            <div className='lc-bank-txt-inicio'>
                <div className='div-txt'>
                    <h1>Venha <span>gerenciar</span>  suas <span>finanças</span> e ter um futuro <span>próspero</span></h1>
                </div>
                <p className='p-inicio'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <BtnArrow texto={"Pedir cartão"}/>
            </div>
            <div className='lc-bank-img-inicio'>
                <img src={cartoes} alt="Imagem de cartões" className='img-cartoes'/>
            </div>
        </section>
    )
}

export default Inicio;