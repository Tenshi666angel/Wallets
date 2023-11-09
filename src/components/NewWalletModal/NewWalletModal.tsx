import Modal from 'react-modal';
import styles from './NewWalletModal.module.css';
import React, { FC, SetStateAction, useState } from 'react';
import WhiteInput from '../UI/input/WhiteInput';
import AddButton from '../UI/button/AddButton';
import { Theme } from '../../constants/ButtonThemes';
import { useDispatch } from 'react-redux';
import { WalletAction, selectStateType } from '../../types/types';
import { Dispatch } from 'redux';
import { WalletActionTypes } from '../../constants/WalletActionTypes';
import { WalletTypes } from '../../constants/WalletTypes';
import WalletSelect from '../UI/select/WalletSelect';

type NewWalletModalProps = {
    isOpen: boolean
    setIsOpen: React.Dispatch<SetStateAction<boolean>>
    onRequestClose: (event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>) => void
}

const NewWalletModal: FC<NewWalletModalProps> = ({ isOpen, setIsOpen, onRequestClose }) => {

    const options = WalletTypes.map(wallType => ({ value: wallType.type, label: wallType.verbName, icon: wallType.icons?.select }));

    const dispatch: Dispatch<WalletAction> = useDispatch();

    const [name, setName] = useState<string>('');
    const [selectedType, setSelectedType] = useState<selectStateType>(options[0]);
    const [initCash, setInitCash] = useState<string>('');

    const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(name === '') {
            alert('empty name');
            return;
        }

        if(isNaN(+initCash)) {
            alert('cash is nan');
            return;
        }
        
        dispatch({ type: WalletActionTypes.AddWallet, payload: {
            id: Date.now(),
            type: selectedType.value,
            description: name,
            balanse: +initCash,
            history: []
        } });

        setName('');
        setInitCash('');
        setIsOpen(false);
    }

    const nameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const selectChange = (newValue: any) => {
        setSelectedType(newValue);
    }

    const initCashChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInitCash(e.target.value);
    }

    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} className={styles.modal}>
            <div className={styles.container}>
                <div className={styles.titleDiv}>
                    <h1 className={styles.title}>Добавить счёт</h1>
                </div>
                <div>
                    <form onSubmit={formSubmit} className={styles.form}>
                        <p>Название</p>
                        <WhiteInput value={name} onChange={nameChange} placeholder='Название счёта' />
                        <p>Тип</p>
                        <WalletSelect
                            selectChange={selectChange}
                            selectedType={selectedType}
                            options={options}
                        />
                        <p className={styles.initialCash}>Начальная сумма</p>
                        <WhiteInput onChange={initCashChange} value={initCash} placeholder='Сумма' style={{marginBottom: 9}} />
                        <AddButton theme={Theme.Violet}>Сохранить</AddButton>
                    </form>
                </div>
            </div>
        </Modal>
    );
}
 
export default NewWalletModal;