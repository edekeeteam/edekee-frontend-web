import styles from "./InputInterest.module.scss";

// eslint-disable-next-line react/prop-types
function InputInterest({name, id, image, checkedInterestsState, handleOnChange}) {

    return (

        <div className={styles.interest}>
            <div
                className={`${styles.highlight}  ${checkedInterestsState.includes(id) ? styles.active : ''}`}>
                <div className={styles.size}>
                    {/* // key={props.index} */}
                    <input
                        style={{opacity: 0}}
                        type="checkbox"
                        id={id}
                        name={name}
                        value={id}
                        checked={checkedInterestsState[id]}
                        onChange={() => handleOnChange(id)}
                    />
                    <img src={image} alt={name}/>
                    <p>{name}</p>
                </div>
            </div>
        </div>
    )
}

export default InputInterest;
