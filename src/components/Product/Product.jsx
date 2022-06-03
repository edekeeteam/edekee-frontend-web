/* eslint-disable react/prop-types */
import axios from "axios";
import { useBuyContext } from "../../context/BuyContext";
import { useProductsContext } from "../../context/ProductsContext";
import styles from "./Product.module.scss";
// import { VideoModalContext } from "../../context/VideoModalContext";

// eslint-disable-next-line react/prop-types
function Product({ product, changeVideoTab }) {
  // const { setCurrentModal } = useContext(VideoModalContext);
  const { setProductDetails } = useProductsContext();
  const { handleProductId } = useBuyContext();

  const handleKeyDown = () => {
    // console.log("keydown");
  };

  const fetchProductDetails = (id) => {
    axios
      .get(`hhttp://ec2-3-143-191-168.us-east-2.compute.amazonaws.com:3000/v1/api/product/${id}`, {
        headers: {
          Authorization: "token",
        },
      })
      .then((res) => {
        console.log(res.data.data);

        if (res.data.success) {
          setProductDetails(res.data.data);
          handleProductId(res.data.data.id);
          changeVideoTab(2);
        }
        return res.data;
      });
  };

  return (
    <div
      className={styles.product}
      onClick={() => {
        fetchProductDetails(product.id);
        // changeVideoTab(2);
      }}
      onKeyDown={handleKeyDown()}
      role="button"
      tabIndex="-1"
    >
      <div className={styles.productWrapper}>
        <div className={styles.productLeft}>
          <img src={product.primaryImage} alt="" className={styles.profilePicture} />
        </div>

        <div className={styles.productRight}>
          <div className={styles.productRightText}>
            <p className={styles.productMainText}>{product.brand}</p>
            <p className={styles.productSecondaryText}>{product.description} </p>
          </div>
          <div>
            <img src="./icons/heartIcon.svg" alt="" className={styles.heartIcon} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
