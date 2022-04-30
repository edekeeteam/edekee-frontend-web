import styles from './InputSize.module.scss'
import {useState} from "react";

// eslint-disable-next-line react/prop-types


// eslint-disable-next-line react/prop-types
function InputSize({sizes}) {
    const [activeSize, setActiveSize] = useState('')
    // eslint-disable-next-line react/prop-types
    const Size = ({size}) => (
        <div className={`${styles.highlight} ${activeSize === size ? styles.active : ''}`}>
            <div className={styles.size}>
                <input readOnly={true} style={{opacity: 0}} type="radio" value={size} name="size"/>
                <p>{size}</p>
            </div>
        </div>
    )

    function onChangeValue(event) {
        setActiveSize(event.target.value);
        console.log(event.target.value);
    }

    return (
        <div className={styles.inputSize} onChange={onChangeValue}>
            {
                // eslint-disable-next-line react/prop-types
                sizes.map((size, index) => (
                    // eslint-disable-next-line react/jsx-key
                    <Size key={index} size={size.size}/>
                ))
            }

        </div>
    );
}

export default InputSize