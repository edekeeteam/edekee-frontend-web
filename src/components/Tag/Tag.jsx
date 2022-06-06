/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useRef, useState, useCallback } from "react";
import axios from "axios";
import { useProductsContext } from "../../context/ProductsContext";
import { useBuyContext } from "../../context/BuyContext";

function Tag({ topPos, leftPos, price, title, id, setVideoModalTabValue }) {
  React.useEffect(() => {
    import("./pegg");
  });

  const { setProductDetails } = useProductsContext();
  const { handleProductId } = useBuyContext();

  const tag = useRef(null);
  // const span = useRef(null);
  const [length, setLength] = useState(0);
  const measuredRef = useCallback((node) => {
    if (node !== null) {
      setLength(node.getBoundingClientRect().width);
    }
  }, []);

  React.useEffect(() => {
    tag.current.addEventListener("buy", (e) => {
      console.log(e.detail);
      axios
        .get(
          `http://ec2-3-143-191-168.us-east-2.compute.amazonaws.com:3000/v1/api/product/${e.detail.id}`,
          {
            headers: {
              Authorization: localStorage.getItem("token"),
              portal: "web",
            },
          }
        )
        .then((res) => {
          console.log(res.data.data);

          if (res.data.success) {
            setProductDetails(res.data.data);
            handleProductId(res.data.data.id);
            setVideoModalTabValue(2);
          }
          return res.data;
        });

      // console.log(e.detail.id);
      // setVideoModalTabValue(2);
    });
    // setLength(span.current) ;
  }, []);

  return (
    <pegg-tag ref={tag} id={id} topPos={topPos} leftPos={leftPos} length={length + 30}>
      <span ref={measuredRef}>{`${price} ${title}`}</span>
    </pegg-tag>
  );
}

export default Tag;
