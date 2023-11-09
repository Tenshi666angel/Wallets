import React, { FC } from 'react';
import Select, { StylesConfig, components } from 'react-select';
import styles from './WalletSelect.module.css';
import { selectStateType } from '../../../types/types';
import { Card } from '../../../constants/CardTypes';

type WalletSelectProps = {
    selectChange: (newValue: any) => void
    selectedType: selectStateType
    options: {
        value: Card;
        label: string;
        icon: JSX.Element;
    }[]
}

const WalletSelect: FC<WalletSelectProps> = ({ selectChange, selectedType, options }) => {

    const CustomStyle: StylesConfig = {
        option: (base, state) => ({
          ...base,
          backgroundColor: state.isSelected ? '#8e9dcf' : 'white',
          ':hover': { backgroundColor: '#8282ca' }
        })
    }

    const { Option } = components;

    const customSingleValue = ({ data }: any) => (
        <div className={styles.singleContainer}>
            <div className={styles.singleValue}>
                { data.icon && <span className={styles.singleIcon}>{ data.icon }</span> }
                <span className={styles.singleLabel}>{ data.label }</span>
            </div>
        </div>
    );

    const CustomSelectOption = (props: any) => (
        <Option {...props}>
            <div className={styles.optionContainer}>
                <span className={styles.optionIcon}>{ props.data.icon }</span>
                <span className={styles.optionLabel}>{ props.data.label }</span>
            </div>
        </Option>
      )

    return ( 
        <Select styles={CustomStyle}
            isSearchable={false}
            onChange={selectChange}
            placeholder='Тип счёта' 
            value={selectedType}
            className={styles.selectType} 
            components={{ SingleValue: customSingleValue, Option: CustomSelectOption }}
            options={options} />
     );
}
 
export default WalletSelect;