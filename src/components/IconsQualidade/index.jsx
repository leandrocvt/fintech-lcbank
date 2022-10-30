import './styles.css';

function IconsQualidade({ icone, titulo, texto }) {
    return (
        <div id='lc-bank-container-qualidade'>
            <div id='lc-bank-qualidade-titulo'>
                <div className='icon-qualidades-banco'>
                    <div className='icone-qualidade-component'>
                        <img src={icone} alt="Icone" />
                    </div>
                </div>
                <h1>{titulo}</h1>
            </div>
            <p>{texto}</p>
        </div>
    )
}

export default IconsQualidade;