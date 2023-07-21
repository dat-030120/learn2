import React from "react";
import "./box.css";

export default function Box({ data }) {
  return (
    <div className="box-item col-lg-3 col-md-6">
      <img src={data.image} alt />
      <h2 className="name">{data.name}</h2>
      <p className="description">{data.description}</p>
    </div>
  );
}
