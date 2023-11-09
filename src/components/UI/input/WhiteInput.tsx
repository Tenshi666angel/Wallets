import React, { FC } from "react";
import styles from './WhiteInput.module.css';

interface WhiteInputProps extends React.InputHTMLAttributes<HTMLInputElement> {

}

const WhiteInput: FC<WhiteInputProps> = ({ ...props }) => {
    return (
        <input { ...props } className={styles.input} type="text" />
    ); 
}
 
export default WhiteInput;