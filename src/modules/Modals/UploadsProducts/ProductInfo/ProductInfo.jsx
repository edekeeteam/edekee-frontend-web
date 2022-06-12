import PropTypes from "prop-types";

// import IndexStyle from "../index.module.scss";
import styles from "./ProductInfo.module.scss";

import { InputSelect, InputText, InputTextArea } from "../../../../components/InputFields";

import { useUploadProductsContext } from "../../../../context/UploadProducts";
import ModalHeader from "../../../../components/ModalHeader/ModalHeader";

// import InputSelect from "../../../components/InputFields/InputSelect/InputSelect";

// eslint-disable-next-line no-unused-vars
function ProductInfo({ nextStep, prevStep }) {
  // eslint-disable-next-line no-unused-vars
  const {
    name,
    setName,
    brand,
    setBrand,
    price,
    setPrice,
    currency,
    setCurrency,
    desc,
    setDesc,
    qty,
    setQty,
    // handleProductsUpload,
  } = useUploadProductsContext();
  // const [name,] = useState(undefined)
  // const [brand,] = useState(undefined)
  // const [price,] = useState(undefined)
  // const [currency,] = useState(undefined)
  // const [desc,] = useState(undefined)
  // function upload(func, next) {
  // eslint-disable-next-line no-console
  //   console.log("here");
  //   func();
  //   next();
  // }

  // function keyDown() {
  //   // eslint-disable-next-line no-console
  //   console.log("key Down");
  // }

  return (
    <div className={styles.productInfo}>
      <ModalHeader prevStep={prevStep} canCancel={false} showNext nextStep={nextStep} />
      <div className={styles.Content}>
        <p className="global-text-24 global-modal-sm-mb">Tell us about your product</p>
        <p className="global-text-12 global-modal-mb">
          These details will be shown to buyers viewing your product.
        </p>
        <form>
          <div className="global-modal-sm-mb">
            {/* eslint-disable-next-line no-console */}
            <InputText
              name="name"
              label="Name"
              type="text"
              value={name}
              handleChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="global-modal-sm-mb">
            {/* eslint-disable-next-line no-console */}
            <InputText
              name="brand"
              label="Brand"
              type="text"
              value={brand}
              handleChange={(e) => setBrand(e.target.value)}
            />
          </div>
          <div className={`${styles.priceInfo} global-modal-sm-mb`}>
            <div className={styles.currency}>
              {/* eslint-disable-next-line no-console */}
              <InputSelect
                name="currency"
                label="Currency"
                type="text"
                value={currency}
                handleChange={(e) => setCurrency(e.target.value)}
              />
            </div>
            <div className={styles.price}>
              {/* eslint-disable-next-line no-console */}
              <InputText
                name="price"
                label="Price"
                type="number"
                value={price}
                handleChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>
          <div className="global-modal-sm-mb">
            {/* eslint-disable-next-line no-console */}
            <InputText
              name="qty"
              label="Quantity(No. of product Available)"
              type="number"
              value={qty}
              handleChange={(e) => setQty(e.target.value)}
            />
          </div>
          <div>
            <InputTextArea
              name="desc"
              label="Description"
              value={desc}
              handleChange={(e) => setDesc(e)}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

ProductInfo.propTypes = {
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};

export default ProductInfo;
