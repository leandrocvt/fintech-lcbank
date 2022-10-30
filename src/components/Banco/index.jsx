import mulher from '../../assets/img/mulher.svg';
import './styles.css';

function Banco(){
    return(
        <section className='descricao-banco'>
            <div className='txt-descricao-banco'>
                <h1>O banco foi feito para você</h1>
                <h2>Buscamos trazer <span>simplicidade</span>, <span>inovação</span> e <span>segurança</span></h2>
                <p className='txt-descricao-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
            </div>
            <div className='img-descricao-banco'>
                <img src={mulher} alt="Mulher apontando para o lado esquerdo" />
            </div>
        </section>
    )
}

export default Banco;