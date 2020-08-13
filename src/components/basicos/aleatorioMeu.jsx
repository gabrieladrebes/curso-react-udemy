import React from "react";

export default (props) => {
  const valor = Math.random() * (props.max - props.min) + props.min;
  //numero vai estar "quebrado"
  return (
    <div>
      <h2>Valor Aleatório -- Minha versão</h2>
      <p>
        <strong>Valor Mínimo: </strong> {props.min}
      </p>
      <p>
        <strong>Valor Máximo: </strong> {props.max}
      </p>
      <p>
        <strong>Valor Sorteado: </strong> {valor}
      </p>
    </div>
  );
};
