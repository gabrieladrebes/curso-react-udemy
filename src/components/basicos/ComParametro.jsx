import React from "react";

export default function ComParametro(props) {
  //Parametro é so leitura
  //Estado é uma estrutra, onde os dados podem ser alterado
  const status = props.nota >= 7 ? "Aprovado" : "Recuperação";
  const notaInt = Math.ceil(props.nota);
  //Se quiser trabalhar em cima,
  // pode criar uma variavel que recebe o valor e então modificar
  return (
    <div>
      <h2>{props.titulo} </h2>
      <p>
        <strong> {props.aluno} </strong> tem nota
        <strong> {notaInt} </strong> e está
        <strong> {status}!</strong>
      </p>
    </div>
  );
}
