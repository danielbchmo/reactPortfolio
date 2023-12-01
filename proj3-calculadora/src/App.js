import './App.css'
import logo from './img/logo512.png'
import Boton from './components/Boton.js'
import Pantalla from './components/Pantalla.js'
import Clear from './components/Clear.js'
import { useState } from 'react'
import { evaluate } from 'mathjs'

function App() {
  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  };

  const calResult = () => {
    if(input) {
      setInput(evaluate(input));
    }else{
      // alert("Ingrese valores");
      setInput('Ingresa valores');
    }
  };

  return (
    <div className="App">
      <div className='logo-container'>
        <img 
          className='logo' 
          src={logo} 
          alt='Logo de React' />
          <h1 className='title'>Calculadora</h1>
      </div>
      <div className='calculadora-container'>
        <Pantalla input={input} />
        <div className='row'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='row'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className='row'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className='row'>
          <Boton manejarClick={calResult}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className='row'>
          <Clear manejarClear={() => setInput('')}>
            Clear
          </Clear>
        </div>
      </div>
    </div>
  );
}

export default App;
