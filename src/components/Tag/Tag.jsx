/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useRef, useState, useCallback } from "react";

function Tag({ topPos, leftPos, price, title }) {
  React.useEffect(() => {
    import("./pegg");
  });

  const tag = useRef(null);
  // const span = useRef(null);
  const [length, setLength] = useState(0);
  const measuredRef = useCallback((node) => {
    if (node !== null) {
      setLength(node.getBoundingClientRect().width);
    }
  }, []);

  React.useEffect(() => {
    tag.current.addEventListener("buy", () => {
      // console.log(e.detail.id);
      // setVideoModalTabValue(2);
    });
    // setLength(span.current) ;
  }, []);

  return (
    <pegg-tag ref={tag} topPos={topPos} leftPos={leftPos} length={length + 30}>
      <span ref={measuredRef}>{`${price} ${title}`}</span>
    </pegg-tag>
  );
}

export default Tag;
