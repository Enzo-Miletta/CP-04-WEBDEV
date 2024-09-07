import PropTypes from "prop-types";

import "./Inicio.css";

import { Button } from "../Button";

const Inicio = ({ classe, titulo, texto, SobreImg }) => {
  return (
    <section className={"inicio " + classe}>
      <div className="inicio__content">
        <h1>{titulo}</h1>
        <p>{texto}</p>
        <Button texto="Baixe o app" />
      </div>
      <img src={SobreImg} alt="Imagem do app" />
    </section>
  );
};

Inicio.propTypes = {
  classe: PropTypes.string,
  titulo: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
  SobreImg: PropTypes.any.isRequired,
};

export default Inicio;