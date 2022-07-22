/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import apiMethods from "../../utils/apiMethods";
import { useToastContext } from "../../context/ToastContext";
// import { useShopContext } from "../../context/ShopContext";
import styles from "./ShopProduct.module.scss";

function ShopProduct({ type, details, profileOwner, link }) {
  const navigate = useNavigate();
  const toast = useToastContext();
  // const type = "category";
  const { shopId } = useParams();
  // const { setProductImages } = useShopContext();
  const currentUser = localStorage.getItem("userId");
  const [showSubmenu, setShowSubmenu] = useState(false);
  // console.log(params);

  // const handleClick = () => {
  //   setProductImages(details.productPicture);
  //   console.log(details);
  //   navigate(`/profile/${userId}/shop/${shopId}/category/${categoryId}/product/${details.id}`);
  // };

  const pinProduct = () => {
    apiMethods
      .post(`/shop/${shopId}/product/${details.id}/pin_product`)
      .then((res) => {
        // console.log(res.data.data[0].id);
        // localStorage.setItem("shopId", res.data.data.shop_meta.id);
        console.log(res);
        if (res.data.success) {
          toast.open({ msg: `${res.data.message}`, type: "success" });
        }

        // if (res.data.success) {
        //   const categoryId = res.data.data[0].id;
        //   apiMethods.get(`/shop/${shopId}/subcategory/${categoryId}/product`).then((response) => {
        //     console.log(response);
        //   });
        // }
        // console.log(res.data.data.shop_meta.id);
      })
      .catch((err) => {
        console.log(err);
        toast.open({ msg: "An error occurred, try again", type: "success" });
      });
  };

  return (
    <div
      className={styles.shopProduct}
      onClick={() => {
        if (type === "pinned") {
          navigate(`${link}/${details.category}/product/${details.id}`);
        } else {
          navigate(`${link}/${details.id}`);
        }
      }}
      style={{
        backgroundImage: `url(${
          type === "product" ? details.productPicture[0]?.picture : details.image
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {type === "pinned" ? (
        <img src="/icons/pinIcon.svg" className={styles.pinIcon} alt="" />
      ) : profileOwner === currentUser ? (
        <div
          className={styles.optionsIcon}
          onClick={(e) => {
            e.stopPropagation();
            setShowSubmenu(true);
          }}
        >
          <img src="/icons/optionsIcon.svg" alt="" className={styles.optionsIconImage} />
        </div>
      ) : (
        ""
      )}

      {showSubmenu && (
        <div className={styles.submenu} onClick={(e) => e.stopPropagation()}>
          <img
            src="/icons/close.svg"
            alt=""
            className={styles.close}
            onClick={() => setShowSubmenu(false)}
          />
          {type === "product" && (
            <div
              className={styles.submenuItem}
              onClick={() => {
                pinProduct();
                setShowSubmenu(false);
              }}
            >
              <img src="/icons/pin.svg" alt="" />
              <p>Pin</p>
            </div>
          )}
          <div className={`${styles.submenuItem} ${styles.deleteButton}`}>
            <img src="/icons/delete.svg" alt="" />
            <p
              onClick={() => {
                console.log("delete");
              }}
            >
              Delete
            </p>
          </div>{" "}
        </div>
      )}
      <div className={styles.badge}>
        <div className={styles.badgeWrapper}>
          <div className={styles.right}>
            <p className={styles.productName}>
              {/* {type === "pinned" ? "Pinned" : type === "category" ? "category" : ""} */}
              {details.name}
            </p>
            <span className={styles.stockCount}> 300 items in stock</span>
          </div>
          <div className={styles.left}>
            {type === "pinned" ? (
              <img src="/icons/boost.svg" alt="" className={styles.boostIcon} />
            ) : (
              <img src="/icons/whiteChevron.svg" alt="" className={styles.whiteChevron} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopProduct;
