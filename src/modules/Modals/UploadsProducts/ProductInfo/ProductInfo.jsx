import PropTypes from "prop-types";

import styles from "./ProductInfo.module.scss";
import globalUploadStyles from "../index.module.scss";

import { InputSelect, InputText, InputTextArea } from "../../../../components/InputFields";

import { useUploadProductsContext } from "../../../../context/UploadProducts";
import ModalHeader from "../../../../components/ModalHeader/ModalHeader";
import ModalTitle from "../../../../components/ModalTitle/ModalTitle";

function ProductInfo({ nextStep, prevStep }) {
  const {
    name,
    setName,
    brand,
    price,
    setPrice,
    currency,
    setCurrency,
    desc,
    setDesc,
    qty,
    setQty,
  } = useUploadProductsContext();

  return (
    <div className={`${globalUploadStyles.ProductUploadModal} ${styles.productInfo}`}>
      <ModalHeader
        prevStep={prevStep}
        canCancel={false}
        showNext={!!(name && price && currency && desc && qty)}
        nextStep={nextStep}
      />
      <div className={`${globalUploadStyles.Content} ${styles.Content}`}>
        <ModalTitle
          title="Tell us about your product"
          desc=" These details will be shown to buyers viewing your product."
        />
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
            <InputText name="brand" label="Brand" type="text" value={brand} readonly />
          </div>
          <div className={`${styles.priceInfo} global-modal-sm-mb`}>
            <div className={styles.currency}>
              {/* eslint-disable-next-line no-console */}
              <InputSelect
                name="Currency"
                value={currency}
                options={[{ id: 1, name: "NG" }]}
                handleChange={(e) => setCurrency(e)}
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
              height={150}
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
