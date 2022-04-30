import styles from "./InputColor.module.scss";
import {useState} from "react";

// eslint-disable-next-line react/prop-types

// eslint-disable-next-line react/prop-types
function InputColor({Colors}) {
    const [activeColor, setActiveColor] = useState("");
    // eslint-disable-next-line react/prop-types
    const ColorInput = ({color}) => (
        <div className={`${styles.highlight} ${
            activeColor === color ? styles.active : ""}`}>
            <div className={styles.color} style={{backgroundColor: color}}>
                <input
                    readOnly={true}
                    style={{opacity: 0}}
                    type="radio"
                    value={color}
                    name="colorName"
                />
            </div>
        </div>
    );

    function onChangeValue(event) {
        setActiveColor(event.target.value);
        console.log(event.target.value);
    }

    return (
        <div className={styles.inputColor} onChange={onChangeValue}>
            {
                // eslint-disable-next-line react/prop-types
                Colors.map((color, index) => (
                    // eslint-disable-next-line react/jsx-key
                    <ColorInput key={index} color={color.color}/>
                ))
            }
        </div>
    );
}

export default InputColor;
