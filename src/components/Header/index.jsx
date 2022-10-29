import logo from '../../assets/img/logo.svg';
import {Link} from 'react-router-dom';
import './styles.css';

function Header() {
    return (
        <header>
                <div className="lc-bank-logo">
                    <img src={logo} alt="" className='logo'/>
                </div>
                <div className='lc-bank-links'>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/'>App Mobile</Link></li>
                        <li><Link to='/'>Sobre-nós</Link></li>
                        <li><Link to='/'>Contatos</Link></li>
                    </ul>
                </div>
                <div className='lc-bank-buttons'>
                    <input type="button" value="Criar conta" id='btn-cadastrar'/>
                    <input type="button" value="Acessar" id='btn-login'/>
                </div>
            
        </header>
    )
}

export default Header;