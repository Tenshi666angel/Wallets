import React, { FC } from "react";
import styles from './AddButton.module.css'

interface AddButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    theme: React.CSSProperties
}

const AddButton: FC<AddButtonProps> = ({ children, theme, ...props }) => {
    return  (
        <button { ...props } style={theme} className={styles.button}>{ children }</button>
    );
}
 
export default AddButton;