// src/components/Card.jsx
import React from "react";

function Card({ icon, title, subtitle, text, details }) {
  return (
    <div className="card">
      {icon && <i className={`bi ${icon}`}></i>}
      <div className="card-content">
        {title && <h3>{title}</h3>}
        {subtitle && <p className="subtitle">{subtitle}</p>}
        {text && <p>{text}</p>}
        {details && <p className="details">{details}</p>}
      </div>
    </div>
  );
}

export default Card;
