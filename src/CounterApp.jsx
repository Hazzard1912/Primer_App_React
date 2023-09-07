import { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const incrementarContador = () => setCounter(counter + 1);
  const decrementarContador = () => setCounter(counter - 1);
  const resetearContador = () => setCounter(value);

  return (
    <>
      <h1>CounterApp</h1>
      <hr />
      <h2 data-testid="test-counter">{counter}</h2>
      <div className="botones">
        <button onClick={incrementarContador}>+1</button>
        <button onClick={decrementarContador}>-1</button>
        <button aria-label="btn-reset" onClick={resetearContador}>Reset</button>
      </div>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

CounterApp.defaultProps = {
  value: 0,
};