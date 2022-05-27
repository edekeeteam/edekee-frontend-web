import styles from "./ProductDetails.module.scss";
import Button from "../Button/Button";
import { useModalContext } from "../../context/ModalContext";
import { useProductsContext } from "../../context/ProductsContext";
import { useBuyContext } from "../../context/BuyContext";

function ProductDetails() {
  // const { setCurrentVideoModal } = useContext(ModalContext);

  const { setIsModalOpen, setModalValue } = useModalContext();
  const { productDetails } = useProductsContext();
  const { setProductId } = useBuyContext();

  const { id, brand, description, liked, price, username, images, properties } = productDetails;
  return (
    <div className={styles.productDetails}>
      <div className={styles.productDetailsTop}>
        <div className={styles.productDetailsTopLeft}>
          <div className={styles.profileImageContainer}>
            <div className={styles.profileImage} />

            <div className={styles.profileplusIcon}>
              <img src="./icons/profileplus.svg" alt="" />{" "}
            </div>
          </div>

          <p className={styles.profileName}>{username}</p>
        </div>

        <div className={styles.productDetailsTopRight}>
          {!liked ? (
            <svg
              width="31"
              height="30"
              viewBox="0 0 34 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={(e) => {
                e.stopPropagation();

                // setIsLiked(!isLiked);
              }}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.9514 5.84882L19.7284 4.07912C22.4785 1.34028 26.9282 1.34944 29.6671 4.09958C32.4059 6.84972 32.3968 11.2994 29.6466 14.0383L27.8801 15.7975L27.8767 15.7941L25.332 13.2599L17.9514 5.84882ZM28.9281 16.8708L28.1148 17.6807L27.8811 17.9154L19.5666 26.2642C18.0963 27.7406 15.7076 27.7455 14.2312 26.2752L3.04236 15.1323C-0.294768 11.8089 -0.305877 6.40948 3.01754 3.07235C6.34097 -0.264778 11.7404 -0.275892 15.0775 3.04753L16.858 4.82072L16.8929 4.78598L18.6699 3.01628C22.0071 -0.307142 27.4065 -0.296028 30.7299 3.0411C34.0534 6.37823 34.0422 11.7777 30.7051 15.1011L28.9281 16.8708ZM26.8068 16.8664L24.2716 14.3208L14.0191 4.11037C11.2689 1.37153 6.81923 1.38069 4.08039 4.13083C1.34154 6.88097 1.3507 11.3307 4.10084 14.0695L15.2897 25.2124C16.179 26.0981 17.618 26.0951 18.5038 25.2058L26.8078 16.8675L26.8068 16.8664ZM9.65042 8.30865C9.65042 9.09745 9.01097 9.73691 8.22216 9.73691C7.43336 9.73691 6.7939 9.09745 6.7939 8.30865C6.7939 7.51984 7.43336 6.88039 8.22216 6.88039C9.01097 6.88039 9.65042 7.51984 9.65042 8.30865ZM11.1504 8.30865C11.1504 9.92588 9.83939 11.2369 8.22216 11.2369C6.60493 11.2369 5.2939 9.92588 5.2939 8.30865C5.2939 6.69141 6.60493 5.38039 8.22216 5.38039C9.83939 5.38039 11.1504 6.69141 11.1504 8.30865Z"
                fill="white"
              />
            </svg>
          ) : (
            <svg
              width="31"
              height="30"
              viewBox="0 0 33 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={(e) => {
                e.stopPropagation();
                console.log(properties.color);
                // setIsLiked(!isLiked);
              }}
            >
              <path
                d="M30.2363 14.0499C33.4851 10.8451 33.4959 5.63847 30.2604 2.4205C27.025 -0.797464 21.7684 -0.808181 18.5196 2.39657L6.2583 14.4914C5.34999 15.3874 5.34697 16.8431 6.25154 17.7428L14.6925 26.138C15.5971 27.0377 17.0667 27.0407 17.975 26.1447L30.2363 14.0499Z"
                fill="#BC1529"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.41962 2.44558C-0.815955 5.66363 -0.805132 10.8704 2.44379 14.0752L14.7049 26.17C15.6132 27.066 17.0828 27.063 17.9874 26.1633L26.4287 17.7677C27.3333 16.868 27.3302 15.4123 26.4219 14.5164L14.1608 2.42164C10.9119 -0.783191 5.65519 -0.772473 2.41962 2.44558ZM6.78245 9.32271C8.1625 9.32271 9.28125 8.21459 9.28125 6.84765C9.28125 5.48071 8.1625 4.37259 6.78245 4.37259C5.4024 4.37259 4.28365 5.48071 4.28365 6.84765C4.28365 8.21459 5.4024 9.32271 6.78245 9.32271Z"
                fill="#DB2734"
              />
            </svg>
          )}
        </div>
      </div>
      <div className={styles.productDetailsCenter}>
        <div className={styles.productDetailsCenterTop}>
          <div className={styles.productDetailsName}>
            <p className={styles.productName}>{brand}</p>
            <p className={styles.brandName}>{description}</p>
          </div>
          <div className={styles.productPrice}>
            <p>N{price}</p>
          </div>
        </div>
        <p className={styles.productDescription}>{description}</p>
      </div>
      <div className={styles.productDetailsBottom}>
        <Button
          size="large"
          bgcolor="white"
          label="Buy"
          handleClick={() => {
            if (localStorage.getItem("userId") !== "") {
              setIsModalOpen(true);
              setModalValue("productspecs");
              setProductId(id);
            } else {
              setIsModalOpen(true);
              setModalValue("signup");
            }
          }}
        />
      </div>

      <div className={styles.scrollView}>
        {images &&
          images.map((image) => (
            <div className={styles.scrollViewImage}>
              <img src={image} alt="" />
            </div>
          ))}
        {/* <img alt="" src = {} className={styles.scrollViewImage} />
        <img alt="" src = {} className={styles.scrollViewImage} />
        <img alt="" src = {} className={styles.scrollViewImage} />
        <img alt="" src = {} className={styles.scrollViewImage} />
        <img alt="" src = {} className={styles.scrollViewImage} />
        <img alt="" src = {} className={styles.scrollViewImage} /> */}
      </div>

      <div className={styles.viewShop}>
        <p>View Shop</p>
        <img src="./icons/chevron.svg" alt="" />
      </div>
    </div>
  );
}

export default ProductDetails;
