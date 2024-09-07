import PropTypes from 'prop-types';

import './Card.css'

export const Card = ({ corFundo, titulo, icone, numero, descricao }) => {
    return (
        <div className="card" style={{backgroundColor : corFundo}}>
            <img src={icone} alt={'Ícone do(a) ' + titulo} />
            <h1>{numero}</h1>
            <h2>{titulo}</h2>
            <p>{descricao}</p>
        </div>
    )
}

Card.propTypes = {
    corFundo: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    icone: PropTypes.any.isRequired,
    numero: PropTypes.string.isRequired,
    descricao: PropTypes.string.isRequired
};