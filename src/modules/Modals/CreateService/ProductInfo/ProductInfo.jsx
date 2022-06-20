import PropTypes from "prop-types";

import styles from "./ProductInfo.module.scss";
import globalUploadStyles from "../index.module.scss";

import { InputSelect, InputText, InputTextArea } from "../../../../components/InputFields";

import ModalHeader from "../../../../components/ModalHeader/ModalHeader";
import ModalTitle from "../../../../components/ModalTitle/ModalTitle";
import { useCreateServiceContext } from "../../../../context/CreateServiceContext";

function ProductInfo({ nextStep, prevStep }) {
  const {
    companyName,
    setCompanyName,
    email,
    setEmail,
    phone,
    setPhone,
    streetAddress,
    setStreetAddress,
    description,
    setDescription,
  } = useCreateServiceContext();
  return (
    <div className={`${globalUploadStyles.ProductUploadModal} ${styles.productInfo}`}>
      <ModalHeader
        prevStep={prevStep}
        canCancel={false}
        showNext={companyName && email && phone && streetAddress && description}
        nextStep={nextStep}
      />
      <div className={`${globalUploadStyles.Content} ${styles.Content}`}>
        <ModalTitle
          title="Tell us about your Service"
          desc=" These details will be shown to buyers viewing your service."
        />
        <form>
          <div className="global-modal-sm-mb">
            {/* eslint-disable-next-line no-console */}
            <InputText
              name="companyName"
              label="Name"
              type="text"
              value={companyName}
              handleChange={(e) => setCompanyName(e.target.value)}
            />
          </div>
          <div className="global-modal-sm-mb">
            {/* eslint-disable-next-line no-console */}
            <InputText
              name="email"
              label="Email"
              type="text"
              value={email}
              handleChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="global-modal-sm-mb">
            {/* eslint-disable-next-line no-console */}
            <InputText
              name="Phone"
              label="Phone"
              type="number"
              value={phone}
              handleChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="global-modal-sm-mb">
            {/* eslint-disable-next-line no-console */}
            <InputText
              name="StreetAddress"
              label="Street Address"
              type="text"
              value={streetAddress}
              handleChange={(e) => setStreetAddress(e.target.value)}
            />
          </div>

          <div className={`${styles.priceInfo} global-modal-sm-mb`}>
            <div className={styles.currency}>
              {/* eslint-disable-next-line no-console */}
              <InputSelect
                name="City"
                label="City"
                type="text"
                // value={currency}
                // handleChange={(e) => setCurrency(e.target.value)}
              />
            </div>
            <div className={styles.price}>
              {/* eslint-disable-next-line no-console */}
              <InputSelect
                name="State"
                label="State"
                type="text"
                // value={currency}
                // handleChange={(e) => setCurrency(e.target.value)}
              />
            </div>
          </div>

          <div>
            <InputTextArea
              name="description"
              label="description"
              value={description}
              handleChange={(e) => setDescription(e)}
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
