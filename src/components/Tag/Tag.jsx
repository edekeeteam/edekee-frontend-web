/* eslint-disable react/prop-types */
import React, { useRef } from "react";

// type Peggs = {
//   topPos: string;
//   leftPos: string;
//   title: string;
//   price: string;
// }

function Tag({ topPos, leftPos, price, title }) {
  React.useEffect(() => {
    import("./pegg");
  });

  const tag = useRef(null);

  React.useEffect(() => {
    tag.current.addEventListener("buy", (e) => {
      console.log("buy");
      console.log(e.detail.id);
    });
  }, []);

  return (
    <pegg-tag ref={tag} topPos={topPos} leftPos={leftPos}>
      <span>{`${title} ${price}`}</span>
    </pegg-tag>
  );
}

export default Tag;
