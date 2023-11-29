import { useState } from 'react';
import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import reactLogo from './img/logo512.png'

function App() {
  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  };

  const reiniciarContador = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className='logo-container'>
        <img 
        className='logo'
        src={reactLogo}//Forma de importar una imagen con import (la importancion esta en el inicio de App)
        alt='Logo de React'/>
        <h1 className='title-page'>Contador de clicks</h1>
      </div>
      <div className='main-container'>
        <Contador 
          numClicks={numClicks}
        />
        <Boton  
          contador="Click"
          esBotonClick={true}
          manejarClick={manejarClick}
        />
        <Boton 
          contador='Reiniciar'
          esBotonClick={false}
          manejarClick={reiniciarContador}
        />
      </div>
    </div>
  );
};

export default App;
