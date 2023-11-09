import React, { FC } from 'react';
import styles from './WhiteSelect.module.css';
import { AiFillCreditCard } from 'react-icons/ai';

interface WhiteSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    options: {
        value: string
        text: string
    }[]
}

const WhiteSelect: FC<WhiteSelectProps> = ({ options, ...props }) => {
    return (
        <select {...props} className={styles.select}>
            { options.map(op => <option className={styles.option} value={op.value}><AiFillCreditCard size={25} />{op.text}</option>) }
        </select>
    );
}
 
export default WhiteSelect;