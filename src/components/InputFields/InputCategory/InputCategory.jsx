import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./InputCategory.module.scss";

// eslint-disable-next-line react/prop-types,camelcase,no-unused-vars
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
function InputCategory({ categories, onChange, categoryId, size, filterBy }) {
  const [selectedCategory, setSelectedCategory] = useState(categoryId);

  function onChangeValue(event) {
    setSelectedCategory(event.target.value);
    onChange(event.target.value, selectedCategory);
  }

  return (
    <div className={styles.inputCategory} onChange={onChangeValue}>
      {
        // eslint-disable-next-line react/prop-types
        categories
          .filter((cat) => cat.name.toLowerCase().includes(filterBy) || filterBy === "")
          .map((cat) => (
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

InputCategory.propTypes = {
  onChange: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(Object).isRequired,
  categoryId: PropTypes.string.isRequired,
  size: PropTypes.string,
  filterBy: PropTypes.string,
};

InputCategory.defaultProps = {
  size: "large",
  filterBy: "",
};

export default InputCategory;
