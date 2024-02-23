import "./App.css";
import calculadora from "./imagenes/calculadora.png";
import Boton from "./componentes/botones";
import Pantalla from "./componentes/pantalla";
import "./estilos/pantalla.css";
import "./estilos/boton.css";
import BotonClear from "./componentes/botonClear";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {

  const [input, setInput] = useState("");

  const agregarInput = val => {
   setInput(input + val);
  };
const calcularResultado = () => {
  setInput(evaluate(input));
}
  return (
<div className="App">
{/*Este es el contenedor para el logo y su texto */}
  <div className="logo-contenedor">
    <h1 className="titulo">
      Calculadora
    </h1>
    <img src={calculadora}
    alt="Logo de la calculadora" 
    className="logo-calculadora"/>
  </div>

  {/*Este es el contenedor principal */}
  <div className="contenedor-calculadora">
    <Pantalla input={input}/>
    <div className="fila">
      <Boton evento={agregarInput}>1</Boton>
      <Boton evento={agregarInput}>2</Boton>
      <Boton evento={agregarInput}>3</Boton>
      <Boton evento={agregarInput}>+</Boton>
    </div>
    <div className="fila">
    <Boton evento={agregarInput}>4</Boton>
    <Boton evento={agregarInput}>5</Boton>
    <Boton evento={agregarInput}>6</Boton>
    <Boton evento={agregarInput}>-</Boton>
    </div>
    <div className="fila">
    <Boton evento={agregarInput}>7</Boton>
    <Boton evento={agregarInput}>8</Boton>
    <Boton evento={agregarInput}>9</Boton>
    <Boton evento={agregarInput}>*</Boton>
    </div>
    <div className="fila">
    <Boton evento={calcularResultado}>=</Boton>
    <Boton evento={agregarInput}>0</Boton>
    <Boton evento={agregarInput}>.</Boton>
    <Boton evento={agregarInput}>/</Boton>
    </div>
    <div className="fila">
      {/*Boton de clear */}
      <BotonClear evento={() => setInput("")}>
        Clear
      </BotonClear>
   
    </div>
  </div>

</div>
  );
}

export default App;
