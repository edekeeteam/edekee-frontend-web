/* eslint-disable react/prop-types */
import React from "react";

function CardItem({ cardTypeImage, type }) {
  return (
    <div className="flexbox-item float-left">
      <img src={cardTypeImage} height="auto" width="100%" alt="" />
      <p className="text-white">{type}</p>
    </div>
  );
}

export default CardItem;
