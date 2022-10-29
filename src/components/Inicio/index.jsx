import arrow_right from '../../assets/img/arrow-right.svg';
import cartoes from '../../assets/img/cartao-inicio.png';
import './styles.css';

function Inicio() {
    return (
        <section>
            <div className='lc-bank-txt-inicio'>
                <div className='div-txt'>
                    <h1>Venha <span>gerenciar</span>  suas <span>finanças</span> e ter um futuro <span>próspero</span></h1>
                </div>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <div className='div-btn'>
                    <input type="button" value="Pedir cartão" id='btn-pedir-cartao' />
                    <img src={arrow_right} alt="seta direita" className='arrow-right' />
                </div>
            </div>
            <div className='lc-bank-img-inicio'>
                <img src={cartoes} alt="Imagem de cartões" className='img-cartoes'/>
            </div>
        </section>
    )
}

export default Inicio;