import PropTypes from 'prop-types';

import './Button.css';

export const Button = ({ texto }) => {
    return (
        <a className='btn'>{texto}</a>
    )
}

Button.propTypes = {
    texto: PropTypes.string.isRequired
};