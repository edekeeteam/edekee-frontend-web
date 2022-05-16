/* eslint-disable react/prop-types */
import React, { useRef, useState } from "react";

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
  const span = useRef(null);
  const [length, setLength] = useState(null);

  React.useEffect(() => {
    tag.current.addEventListener("buy", (e) => {
      console.log("buy");
      console.log(e.detail.id);
      // setVideoModalTabValue(2);
    });
    setLength(span.current.getBoundingClientRect().width + 8);
  }, []);

  return (
    <pegg-tag ref={tag} topPos={topPos} leftPos={leftPos} length={length}>
      <span ref={span}>{`${price} ${title}`}</span>
    </pegg-tag>
  );
}

export default Tag;
