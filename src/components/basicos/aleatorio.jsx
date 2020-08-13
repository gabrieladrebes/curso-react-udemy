import React from "react";

export default (props) => {
  //   const min = props.min;
  //   const max = props.max;
  const { min, max } = props;
  const aleatorio = parseInt(Math.random() * (max - min)) + min;
  //Numero inteiro
  return (
    <div>
      <h2>Valor Aleatório -- Correção</h2>
      <p>
        <strong>Valor Mínimo: </strong> {min}
      </p>
      <p>
        <strong>Valor Máximo: </strong> {max}
      </p>
      <p>
        <strong>Valor Sorteado: </strong> {aleatorio}
      </p>
    </div>
  );
};
