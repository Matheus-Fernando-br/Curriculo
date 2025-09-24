import React from "react";

function Card({ icon, title, subtitle, text }) {
  return (
    <div className="card">
      <div className="card-header">
        <i className={`bi ${icon}`}></i>
        <h3>{title}</h3>
      </div>
      <div className="card-content">
        {subtitle && <span className="card-subtitle">{subtitle}</span>}
        {text && <p>{text}</p>}
      </div>
    </div>
  )
}

export default Card;
