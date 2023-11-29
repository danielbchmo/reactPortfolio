import React from "react";
import '../style/Boton.css';


/**Esta forma de llamar props, se le conoce como destructuración.
 * Donde, en vez de llamar a un props, solo colocamos, entre {}, el nombre del props.
 */
function Boton({contador, esBotonClick, manejarClick}) {
  return (
    <button
      className={esBotonClick ? "boton-click" : "boton-reiniciar"}
      onClick={manejarClick}>
        {contador}
    </button>
  );
};

export default Boton;