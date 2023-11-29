import React from "react";
import "../styles/Testimonio.css";

function Testimonio(props) {
  return(
    <div className="container-testimonio">
      <img 
        className="img-testimonio"
        src={require(`../img/${props.img}.png`)}
        alt={`Foto de ${props.alt}`}
        />
      <div className="container-text">
        <p className="name-testimonio">
          <strong>{props.name}</strong>
        </p>
        <p className="cargo-testimonio">{props.cargo}</p>
        <p className="text-testimonio">{props.testimonio}</p>
      </div>
    </div>
  );
}

export default Testimonio;