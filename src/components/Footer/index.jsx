import logo from '../../assets/img/logo-rodape.svg'
import './style.css';

function Footer() {
    return (
        <footer>
            <div className='lc-bank-logo-footer'>
                <div className='logo-rodape'>
                    <img src={logo} alt="Logo rodapé" />
                </div>
                <p className='txt-logo'>©2022 Leandro Cavalcanti. Todos direitos reservados.</p>
            </div>
            <hr className='linha' />
            <div className='div-textos'>
                <div className='textos-rodape'>
                    <h4>Suporte</h4>
                    <ul className='links-rodape'>
                        <li><a href="/" rel="noopener noreferrer">Termos de uso</a></li>
                        <li><a href="/" rel="noopener noreferrer">Segurança</a></li>
                        <li><a href="/" rel="noopener noreferrer">Política de privacidade</a></li>
                        <li><a href="/" rel="noopener noreferrer">Central de ajuda</a></li>
                    </ul>
                </div>
                <div className='textos-rodape'>
                    <h4>Acessibilidade</h4>
                    <ul className='links-rodape'>
                        <li><a href="/" rel="noopener noreferrer">Aumento de fonte</a></li>
                        <li><a href="/" rel="noopener noreferrer">Leitores de tela</a></li>
                        <li><a href="/" rel="noopener noreferrer">Modo Escuro</a></li>
                        <li><a href="/" rel="noopener noreferrer">Cores para Daltônicos</a></li>
                    </ul>
                </div>
                <div className='textos-rodape'>
                    <h4>Precisa de Ajuda?</h4>
                    <ul className='links-rodape'>
                        <li><a href="/" rel="noopener noreferrer">+ 55 11 2345 7890</a></li>
                        <li><a href="/" rel="noopener noreferrer">+ 55 11 2345 7891</a></li>
                        <li><a href="/" rel="noopener noreferrer">Senac Lapa Tito, 157 - SP</a></li>
                        <li><a href="/" rel="noopener noreferrer">Trabalhe conosco</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;