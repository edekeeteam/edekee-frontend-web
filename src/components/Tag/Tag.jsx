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
  const span = useRef(null);
  // const [length, setLength] = useState( null);

  let length = 0;

  React.useEffect(() => {
    if (span.current) {
      tag.current.addEventListener("buy", () => {
        // console.log(e.detail.id);
        // setVideoModalTabValue(2);
      });
      console.log(span.current.getBoundingClientRect());
      console.log(span.current.offsetWidth);
      setTimeout(() => {
        length = span.current.getBoundingClientRect().width;
      });
      // setLength();
    }
  });

  return (
    <pegg-tag ref={tag} topPos={topPos} leftPos={leftPos} length={length}>
      <span ref={span}>
        <span>{`${price} ${title}`}</span>
      </span>
    </pegg-tag>
  );
}

export default Tag;
