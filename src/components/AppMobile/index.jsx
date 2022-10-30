import celular from '../../assets/img/celular.svg';
import logo from '../../assets/img/logo.svg';
import playStore from '../../assets/img/icon-play.svg';
import apple from '../../assets/img/icon-apple.svg';
import './styles.css';

function AppMobile() {
    return (
        <section className='lc-bank-app-mobile'>
            <div className='app-mobile-img-celular'>
                <img src={celular} alt="" />
            </div>
            <div className='app-mobile-txt'>
                <div className='app-mobile-logo'>
                    <img src={logo} alt="" />
                </div>
                <h1><span>Faça</span> o dowload do nosso <span>aplicativo</span></h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                <div id='app-mobile-btns'>
                    <div className='div-btn-dowload'>
                        <img src={playStore} alt="Icone" className='icone' />
                        <input type="button" value="Play Store" id='btn-dowload' />
                    </div>
                    <div className='div-btn-dowload'>
                        <img src={apple} alt="Icone" className='icone' />
                        <input type="button" value="Apple Store" id='btn-dowload-apple' className='cor-fundo'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AppMobile;