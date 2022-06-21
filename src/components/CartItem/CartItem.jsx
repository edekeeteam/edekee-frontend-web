// import {useEffect, useState} from "react";
import PropTypes from "prop-types";

import axios from "axios";
// import Skeleton from "react-loading-skeleton";
import styles from "./CartItem.module.scss";
import { InputCheckbox, InputNumber } from "../InputFields";

function CartItem({
  isCheckout,
  id,
  isCheck,
  image,
  name,
  desc,
  color,
  size,
  quantity,
  price,
  index,
  onDelete,
  ontoggleCheck,
  onAdd,
  onSubtract,
}) {
  const handleOnChange = (selectedIndex) => {
    ontoggleCheck(selectedIndex);
  };

  const Subtract = (selectedIndex) => {
    onSubtract(selectedIndex);
  };

  const Add = (selectedIndex) => {
    // console.log(quantity);
    onAdd(selectedIndex);
  };

  const Delete = (selectedIndex) => {
    console.log(id);
    axios
      .post(
        `http://ec2-3-143-191-168.us-east-2.compute.amazonaws.com:3000/v1/api/cart/removeFromCart/${id}`,
        {},
        {
          headers: {
            Authorization: localStorage.getItem("token"),
            portal: "web",
          },
        }
      )
      .then((res) => {
        // console.log(res.data.data);

        if (res.data.success) {
          // console.log(res.data);
          onDelete(selectedIndex);
        }
        return res.data;
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className={styles.cartItem}>
      {!isCheckout && (
        <div>
          <InputCheckbox
            name={name}
            value={name}
            checked={isCheck}
            toggleCheck={() => handleOnChange(index)}
          />
        </div>
      )}

      <div
        className={styles.imgContainer}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        {/* <img src={image} alt={name} style={{ objectFit: "contain" }} /> */}
        {/* <Skeleton
          circle={false}
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",

            // display: showImage ? "none" : "block",
          }}
        />{" "} */}
      </div>
      <div className={styles.contents}>
        <div className={styles.header}>
          <div>
            <p style={{ marginBottom: "10px" }} className="global-text-20">
              <span className={styles.name}>{name}</span>
              <span className={styles.price}>${price}</span>
            </p>
            <p className={styles.desc}>{desc}</p>
          </div>

          {!isCheckout && (
            <div
              onKeyDown={() => {}}
              role="button"
              tabIndex={0}
              className={styles.delete}
              onClick={() => Delete(index, id)}
            >
              <div>
                <img src={`${process.env.PUBLIC_URL}/icons/delete.svg`} alt="" />
              </div>
              <p>Delete</p>
            </div>
          )}
        </div>

        <div className={styles.footer}>
          <div>
            <span>{color}</span>
            <span>, {size}</span>
          </div>
          {/* item={cartItem} */}
          <InputNumber
            onAdd={Add}
            onSubtract={Subtract}
            onDelete={Delete}
            itemValue={quantity}
            index={index}
            color="darker"
          />
        </div>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  // item: PropTypes.any.isRequired,
  isCheck: PropTypes.bool.isRequired,
  isCheckout: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
  ontoggleCheck: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  onSubtract: PropTypes.func.isRequired,
};

export default CartItem;
// import PropTypes from "prop-types";

// import styles from "./CartItem.module.scss";
// import { InputNumber } from "../InputFields";

// function CartItem({
//   isCheck,
//   image,
//   name,
//   desc,
//   color,
//   size,
//   qty,
//   price,
//   index,
//   onDelete,
//   ontoggleCheck,
//   onAdd,
//   onSubtract,
// }) {
//   const handleOnChange = (selectedIndex) => {
//     ontoggleCheck(selectedIndex);
//   };

//   const Subtract = (selectedIndex) => {
//     onSubtract(selectedIndex);
//   };

//   const Add = (selectedIndex) => {
//     onAdd(selectedIndex);
//   };

//   const Delete = (selectedIndex) => {
//     onDelete(selectedIndex);
//   };

//   return (
//     <div className={styles.cartItem}>
//       <div>
//         <input
//           name={name}
//           value={name}
//           checked={isCheck}
//           onChange={() => handleOnChange(index)}
//           type="checkbox"
//         />
//       </div>
//       <div className={styles.imgContainer}>
//         <img src={image} alt={name} />
//       </div>
//       <div className={styles.contents}>
//         <div className={styles.header}>
//           <div>
//             <p style={{ marginBottom: "10px" }} className="global-text-20">
//               <span className={styles.name}>{name}</span>
//               <span className={styles.price}>${price}</span>
//             </p>
//             <p className={styles.desc}>{desc}</p>
//           </div>
//           <div
//             onKeyDown={() => {}}
//             role="button"
//             tabIndex={0}
//             className={styles.delete}
//             onClick={() => Delete(index)}
//           >
//             <div>
//               <img src={`${process.env.PUBLIC_URL}/icons/delete.svg`} alt="" />
//             </div>
//             <p>Delete</p>
//           </div>
//         </div>

//         <div className={styles.footer}>
//           <div>
//             <span>{color}</span>
//             <span>, {size}</span>
//           </div>
//           {/* item={cartItem} */}
//           <InputNumber
//             onAdd={Add}
//             onSubtract={Subtract}
//             onDelete={Delete}
//             itemValue={qty}
//             index={index}
//             color="darker"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// CartItem.propTypes = {
//   // item: PropTypes.any.isRequired,
//   isCheck: PropTypes.bool.isRequired,
//   image: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   desc: PropTypes.string.isRequired,
//   color: PropTypes.string.isRequired,
//   size: PropTypes.string.isRequired,
//   qty: PropTypes.number.isRequired,
//   price: PropTypes.number.isRequired,
//   index: PropTypes.number.isRequired,
//   onDelete: PropTypes.func.isRequired,
//   ontoggleCheck: PropTypes.func.isRequired,
//   onAdd: PropTypes.func.isRequired,
//   onSubtract: PropTypes.func.isRequired,
// };

// export default CartItem;
