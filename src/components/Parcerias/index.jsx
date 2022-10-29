import nu from '../../assets/img/nubank-logo.svg';
import pan from '../../assets/img/pan-logo.svg';
import inter from '../../assets/img/inter-logo.svg';
import gg from '../../assets/img/gg-logo.svg';
import ha from '../../assets/img/ha-logo.svg';
import './styles.css';

function Parcerias() {
    return (
        <section className='lc-bank-parcerias'>
            <h2>Parcerias</h2>
            <p className='txt-parcerias'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
            <div id='lc-bank-parcerias-logos'>
                <div className='lc-bank-logo-parceiros'>
                    <a href="https://nubank.com.br" target="_blank" rel="noopener noreferrer">
                        <img src={nu} alt="Logo da Nubank" />
                    </a>
                </div>
                <div className='lc-bank-logo-parceiros'>
                    <a href="https://www.bancopan.com.br/" target="_blank" rel="noopener noreferrer">
                        <img src={pan} alt="" />
                    </a>
                </div>
                <div className='lc-bank-logo-parceiros'>
                    <a href="https://www.bancointer.com.br" target="_blank" rel="noopener noreferrer">
                        <img src={inter} alt="" />
                    </a>
                </div>
                <div className='lc-bank-logo-parceiros'>
                    <a href="https://nubank.com.br" target="_blank" rel="noopener noreferrer">
                        <img src={gg} alt="" />
                    </a>
                </div>
                <div className='lc-bank-logo-parceiros'>
                    <a href="https://nubank.com.br" target="_blank" rel="noopener noreferrer">
                        <img src={ha} alt="" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Parcerias;