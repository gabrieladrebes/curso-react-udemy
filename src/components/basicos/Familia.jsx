import React, { cloneElement } from "react";

// import FamiliaMembro from "./FamiliaMembro"; Usado para FamiliaMembro

export default (props) => {
  return (
    <div>
      {/* <FamiliaMembro nome="Pedro" sobrenome={props.sobrenome}></FamiliaMembro>
      <FamiliaMembro nome="Ana" {...props}></FamiliaMembro>
      <FamiliaMembro nome="Gustavo" sobrenome="Silva"></FamiliaMembro> */}

      {props.children.map((child, i) => {
        return cloneElement(child, { ...props, key: i });
      })}
    </div>
  );
};
