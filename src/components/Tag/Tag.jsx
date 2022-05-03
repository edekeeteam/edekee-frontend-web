/* eslint-disable react/prop-types */
import React from "react";

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

  return (
    <pegg-tag topPos={topPos} leftPos={leftPos}>
      <span>{title}</span> <span>${price}</span>
    </pegg-tag>
  );
}

export default Tag;
