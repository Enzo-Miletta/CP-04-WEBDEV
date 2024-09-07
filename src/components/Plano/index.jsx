import PropTypes from 'prop-types';

import './Plano.css';

import PlanoVazio from '../../assets/planoVazio.png';

const Plano = ({ classe, titulo, btn, children }) => {
    return (
        <div className={"plano " + classe}>
            <h2>{titulo}</h2>
            <div className="plano-container">
                <div className="plano--itens">
                {children? children : <img src={PlanoVazio} alt="Imagem do plano" className='vazio' />}
                </div>
                <a className='planos-btn'>{btn}</a>
            </div>
        </div>
    )
}

Plano.propTypes = {
    classe: PropTypes.string,
    titulo: PropTypes.string.isRequired,
    btn: PropTypes.string.isRequired,
    children: PropTypes.any
};

export default Plano;