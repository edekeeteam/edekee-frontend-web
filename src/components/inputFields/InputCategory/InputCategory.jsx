import { useState } from "react";
import styles from "./InputCategory.module.scss";

// eslint-disable-next-line react/prop-types
function Category({ selectedCategory, image, name, id, size }) {
  return (
    <div className={`${styles.highlight} ${selectedCategory === id ? styles.active : ""}`}>
      <div className={`${styles.size} ${size === "small" ? styles.small : ""}`}>
        <input readOnly style={{ opacity: 0 }} type="radio" value={id} name="category" />
        {image && <img src={image} alt={name} />}
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
            image={cat.picture}
            size={size}
            selectedCategory={selectedCategory}
          />
        ))
      }
    </div>
  );
}

export default InputCategory;
