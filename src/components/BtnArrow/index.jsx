import arrow_right from '../../assets/img/arrow-right.svg';
import './styles.css';

function BtnArrow({ texto }) {
    return (
        <div className='div-btn'>
            <input type="button" value={texto} id='btn-pedir-cartao' />
            <img src={arrow_right} alt="seta direita" className='arrow-right' />
        </div>
    )
}

export default BtnArrow;