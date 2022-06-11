import styles from "./InputSearch.module.scss";
// eslint-disable-next-line react/prop-types
function InputSearch({ handleChange, value }) {
  return (
    <div className="" style={{ width: "100%" }}>
      <div className={`${styles.inputText} `}>
        <input
          type="search"
          value={value}
          onChange={(e) => handleChange(e)}
          name="search"
          placeholder="Start Typing"
          autoComplete="off"
        />
        {!value && <img src={`${process.env.PUBLIC_URL}/icons/search-icon.svg`} alt="" />}
      </div>
      {/* <p>Error Message</p> */}
    </div>
  );
}

export default InputSearch;
