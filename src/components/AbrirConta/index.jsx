import BtnArrow from '../BtnArrow';
import cartao_celular from '../../assets/img/celular-cartoes.png';
import './styles.css';

function AbrirConta() {
    return (
        <section className='abrir-conta'>
            <div className='txt-abrir-conta'>
                <h1>Conta <span>gratuita</span>, sem nenhuma tarifa! E <span>melhor</span> 100% <span>digital</span></h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                <div className='div-abrir-conta'>
                    <BtnArrow texto={"Abra sua conta"} />
                </div>
            </div>
            <div className='img-abrir-conta'>
                <img src={cartao_celular} alt="" />
            </div>
        </section>
    )
}

export default AbrirConta;