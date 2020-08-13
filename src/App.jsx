import React from "react";

import "./App.css";

import Card from "./components/layout/Card";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import AleatorioMeu from "./components/basicos/aleatorioMeu";
import Aleatorio from "./components/basicos/aleatorio";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutosMeu from "./components/repeticao/TabelaProdutosMeu";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";

export default () => (
  <div id="App" className="App">
    <h1>Fudamentos React </h1>

    <div className="Cards">
      <Card titulo="#08 Renderização Condicional" color="#982395">
        <ParOuImpar numero={13}></ParOuImpar>
        <UsuarioInfo usuario={{ nome: "Fernando" }} />
        <UsuarioInfo />
      </Card>

      <Card titulo="#07 Desafio Repetição -- Correção" color="#3A9AD9">
        <TabelaProdutos></TabelaProdutos>
      </Card>

      <Card titulo="#07 Desafio Repetição -- Minha versão" color="#3A9AD9">
        <TabelaProdutosMeu></TabelaProdutosMeu>
      </Card>

      <Card titulo="#06 Repetição" color="#FF4C65">
        <ListaAlunos></ListaAlunos>
      </Card>

      <Card titulo="#05 Componente com Filhos " color="#00C8F8">
        <Familia sobrenome="Silva">
          <FamiliaMembro nome="Pedro"></FamiliaMembro>
          <FamiliaMembro nome="Ana"></FamiliaMembro>
          <FamiliaMembro nome="Gustavo"></FamiliaMembro>
        </Familia>
      </Card>

      <Card titulo="#04 Correção: Desafio Aleatório" color="#FA6900">
        <Aleatorio min={1} max={60} />
      </Card>

      <Card titulo="#04 Desafio Aleatório -- Minha versão" color="#F38630">
        <AleatorioMeu min={1} max={60} />
      </Card>

      <Card titulo="#03 Fragmento" color="#E94C6F">
        <Fragmento />
      </Card>

      <Card titulo="#02 Passagem por parâmetro" color="#E8B71A">
        <ComParametro
          titulo="Situação do Aluno "
          aluno="Pedro Silva"
          nota={9.3}
        />
      </Card>
      <Card titulo="#01 Primeiro componente" color="#588C73">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
);
