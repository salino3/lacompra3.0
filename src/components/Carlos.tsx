import React, { useEffect, useState, Fragment } from "react";
import Input from './Input';
import "./style.css";

interface props {
  textoP: string;
  textoh5: string
}


const Carlos = ({ textoP, textoh5 }: props) => {
  //
  const frutas = [
    { id: 1, nombre: "manzanas" },
    { id: 2, nombre: "bananas" },
    { id: 3, nombre: "limones" },
    { id: 4, nombre: "narajas" },
    { id: 5, nombre: "peras" },
  ];

  const UtenteCarlos = {
    nombre: "Carlos",
    apellido: "Gonzales",
    edad: 40,
    dinero: 1000,
  };

  let lacompra = 0;

  const [carlos, setCarlos] = useState(UtenteCarlos.dinero);
  const [first, setfirst] = useState(lacompra);

  // handleMasProduct
  const handleMasProduct = () => {
    setCarlos(carlos - 20);
    setfirst(first + 1);

    console.log(lacompra);
  };
  //
  // handleMenosProduct
  const handleMenosProduct = () => {
    setfirst(first - 1);

    if (first === 0)
     return setfirst(0);

    setCarlos(carlos + 20);
    if (carlos > 1000) return setCarlos(carlos - 20);

    console.log(lacompra);
  };
  //
  const handleReset = () => {
    setCarlos(1000);
    setfirst(0);
  };
  //


  return (
    <Fragment>
      <div className="container">
        <p style={{ color: "red" }}>{textoP}</p>
        <h5 style={{ color: "green" }}>{textoh5}</h5>
        <ul>
          {frutas.map((todo, id) => (
            <>
              <li key={id}>{todo.id} {todo.nombre} </li>
              <button
                className="btn btn-warning"
                onClick={() => handleMenosProduct()}
              >
                -
              </button>
              <button
                className="btn btn-primary"
                onClick={() => handleMasProduct()}
              >
                +
              </button>
            </>
          ))}
        </ul>
        <label htmlFor="">Nº productos: &nbsp; </label>
        <Input
          pl={""}
          tipo={"number"}
          valor={first}
          min={0}
          max={"null"}
        />{" "}
        <button className="btn btn-danger" onClick={() => handleReset()}>
          Reset
        </button>
        <br />
        <label htmlFor="">Dinero: &nbsp; &nbsp;&nbsp;&nbsp;</label>
        <Input
          pl={"tipo text"}
          tipo={"text"}
          valor={carlos}
          min={"null"}
          max={1000}
        />
      </div>
    </Fragment>
  );
};

export default Carlos