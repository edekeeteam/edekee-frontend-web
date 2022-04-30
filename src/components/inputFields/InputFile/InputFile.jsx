import React from "react";
import styles from "./InputFile.module.scss";
import Button from "../../Button";
// import { useAuthContext } from "../../context/AuthContext";

// eslint-disable-next-line react/prop-types
const InputFile = ({handleInputChange}) => {

    return (
        <div className={styles.inputFile}>
            <label htmlFor="image_uploads">
                <Button
                    size="large"
                    label="Upload"
                    bgcolor="white"
                />
            </label>
            <input
                style={{display: "none"}}
                id="image_uploads"
                accept=".jpg, .jpeg, .png, .svg"
                type="file"
                multiple
                name="file"
                onChange={(e) => handleInputChange(e)}
            />
        </div>
    );
};

export default InputFile;
