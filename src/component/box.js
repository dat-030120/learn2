import React, { Children } from "react";
import "./box.css";
import Buton from "./buton";

export default function Box({ children, data}) {
  return (
    <div className="box-item col-lg-3 col-md-6">
      <img src={data.image} alt />
      <h2 className="name">{data.name}</h2>
      <p className="description">{data.description}</p>
      {children}
    </div>
    
  );
}
