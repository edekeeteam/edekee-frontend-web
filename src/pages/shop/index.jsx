import React from "react";
import { useParams } from "react-router-dom";

function Shop() {
  const id = useParams();
  console.log(id);
  return <div>index</div>;
}

export default Shop;
