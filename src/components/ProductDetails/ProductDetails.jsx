import styles from "./ProductDetails.module.scss";
import Button from "../Button/Button";
import { useModalContext } from "../../context/ModalContext";

function ProductDetails() {
  // const { setCurrentVideoModal } = useContext(ModalContext);

  const { setIsModalOpen, setModalValue } = useModalContext();
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

          <p className={styles.profileName}>Serena Daenerys</p>
        </div>

        <div className={styles.productDetailsTopRight}>
          <img src="./icons/heartIcon.svg" alt="" />
        </div>
      </div>
      <div className={styles.productDetailsCenter}>
        <div className={styles.productDetailsCenterTop}>
          <div className={styles.productDetailsName}>
            <p className={styles.productName}>Xpnd Short</p>
            <p className={styles.brandName}>Xpnd </p>
          </div>
          <div className={styles.productPrice}>
            <p>N2000</p>
          </div>
        </div>
        <p className={styles.productDescription}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo blanditiis quibusdam et
          sit, natus quas sed voluptatum repudiandae ad blanditiis quibusdam et sit, natus quas sed
          voluptatum repudiandae ad quia.
        </p>
      </div>
      <div className={styles.productDetailsBottom}>
        <Button
          size="large"
          bgcolor="white"
          label="Buy"
          handleClick={() => {
            setIsModalOpen(true);
            setModalValue("productspecs");
          }}
        />
      </div>

      <div className={styles.scrollView}>
        <div className={styles.scrollViewImage} />
        <div className={styles.scrollViewImage} />
        <div className={styles.scrollViewImage} />
        <div className={styles.scrollViewImage} />
        <div className={styles.scrollViewImage} />
        <div className={styles.scrollViewImage} />
      </div>

      <div className={styles.viewShop}>
        <p>View Shop</p>
        <img src="./icons/chevron.svg" alt="" />
      </div>
    </div>
  );
}

export default ProductDetails;
