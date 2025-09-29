// src/components/Experiencia.jsx
import React from "react";

function Experiencia({ empresa, periodo, descricao }) {
  return (
    <div className="card">
      <div className="card-header">
        <i className="bi bi-briefcase"></i>
        <h4>{empresa}</h4>
      </div>
      <div className="card-content">
        <span>{periodo}</span>
        {descricao.map((item, index) => (
          <p key={index}>
            <i className="bi bi-check" style={{ marginRight: "8px", color: "green" }}></i>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Experiencia;
