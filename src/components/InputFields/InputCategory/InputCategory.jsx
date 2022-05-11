import { useState } from "react";
import styles from "./InputCategory.module.scss";

// eslint-disable-next-line react/prop-types,camelcase
function Category({ selectedCategory, image_url, name, id, size }) {
  return (
    <div className={`${styles.highlight} ${selectedCategory === id ? styles.active : ""}`}>
      <div className={`${styles.size} ${size === "small" ? styles.small : ""}`}>
        <input readOnly style={{ opacity: 0 }} type="radio" value={id} name="category" />
        {/* eslint-disable-next-line camelcase */}
        {image_url && <img src={image_url} alt={name} />}
        <p>{name}</p>
      </div>
    </div>
  );
}

Category.defualtProps = {
  size: "large",
};

// eslint-disable-next-line react/prop-types
function InputCategory({ categories, onChange, categoryId, size }) {
  const [selectedCategory, setSelectedCategory] = useState(categoryId);

  function onChangeValue(event) {
    setSelectedCategory(event.target.value);
    onChange(event.target.value, selectedCategory);
  }

  return (
    <div className={styles.inputCategory} onChange={onChangeValue}>
      {
        // eslint-disable-next-line react/prop-types
        categories.map((cat) => (
          <Category
            key={cat.id}
            id={cat.id}
            name={cat.name}
            image_url={cat.image_url}
            size={size}
            selectedCategory={selectedCategory}
          />
        ))
      }
    </div>
  );
}

export default InputCategory;
