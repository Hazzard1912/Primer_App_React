import PropTypes from "prop-types";

/**
 * Comunicacion entre componentes es con props
 */
export const FirstApp = ({ title, subTitle = "La tierra explota!" }) => {
  return (
    <>
      <h1 data-testid="test-title">{title}</h1>
      <h2>{subTitle}</h2>
    </>
  );
};

// Un poco parecido a como hacemos una definicion de propiedades
// de un esquema en base de datos.
// Van al final.
FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};

FirstApp.defaultProps = {
  // title: "No hay titulo",
  subTitle: "No hay subtitulo",
};

/**
 * Usaremos React Testing-Library para testear estos componentes
 * de React.
 *
 * React Testing-Library es muy bueno para testear interacciones
 * y el DOM.
 *
 * jest es bueno para testear funciones de js, unidades. pero
 * no es bueno para componentes de react.
 *
 * Por esa razon usaremos ambos para cubrir nuestro codigo
 */
