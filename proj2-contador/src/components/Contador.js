import React from "react";
import "../style/Contador.css";

function Contador({numClicks}) {
  return (
    <div className="contador">
      { numClicks }
    </div>
  );
};

export default Contador;