// criar tabela mostrando produtos em sua devida coluna
import React from "react";

import produtos from "../../data/produtosMeu";
import "./TabelaProdutos.css";

export default (props) => {
  const productsTable = produtos.map((produto) => {
    return (
      <tr>
        <td>{produto.id}</td>
        <td>{produto.nome}</td>
        <td>{produto.preco}</td>
      </tr>
    );
  });
  return (
    <div className="TabelaProdutos">
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Produto</th>
            <th>Preço (R$)</th>
          </tr>
        </thead>
        <tbody>{productsTable}</tbody>
      </table>
    </div>
  );
};
