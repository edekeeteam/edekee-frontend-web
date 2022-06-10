import React, { useState } from "react";
import Button from "../Button/Button";
import styles from "./ShopTabContent.module.scss";

function ShopTabContent() {
  const [hasShop] = useState(true);
  return (
    <div className={styles.shopTabContainer}>
      {hasShop && (
        <div className={styles.emptyShop}>
          <p className="global-text-20 global-modal-mb">Build your shop</p>
          <p className="global-text-12 global-modal-mb">
            Create your shop and recieve orders from videos across the web.
          </p>

          <Button label="Lets go" bgcolor="white" size="small" />
        </div>
      )}
    </div>
  );
}

export default ShopTabContent;
