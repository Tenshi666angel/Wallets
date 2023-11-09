import React, { FC, SetStateAction, useState } from 'react';
import styles from './WalledCardModal.module.css';
import Modal from 'react-modal';
import WhiteInput from '../../UI/input/WhiteInput';
import WalletSelect from '../../UI/select/WalletSelect';
import AddButton from '../../UI/button/AddButton';
import { Theme } from '../../../constants/ButtonThemes';
import { WalletAction, selectStateType } from '../../../types/types';
import { WalletTypes } from '../../../constants/WalletTypes';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import { WalletActionTypes } from '../../../constants/WalletActionTypes';
import { AiFillCloseCircle } from 'react-icons/ai';

type WalletCardModalProps = {
    isOpen: boolean
    setIsOpen: React.Dispatch<SetStateAction<boolean>>
    onRequestClose: (event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>) => void
    walletName: string
    selectedWallet: selectStateType
    cash: number
    description: string
    id: number
}

const WalletCardModal: FC<WalletCardModalProps> = (props) => {

    const dispatch: Dispatch<WalletAction> = useDispatch();

    const options = WalletTypes.map(wallType => ({ value: wallType.type, label: wallType.verbName, icon: wallType.icons?.select }));

    const [name, setName] = useState<string>('');

    const [selectedType, setSelectedType] = useState<selectStateType>(props.selectedWallet);
    const [cash, setCash] = useState<string>('');

    const [isNameEmpty, setIsNameEmpty] = useState<boolean>(false);
    const [isCashEmpty, setIsCashEmpty] = useState<boolean>(false);
    const [isCashNan, setIsCashNan] = useState<boolean>(false);

    const [addIsOpen, setAddIsOpen] = useState<boolean>(false);
    const [subIsOpen, setSubIsOpen] = useState<boolean>(false);

    const [sumToAdd, setSumToAdd] = useState<string>('');
    const [sumToSub, setSumToSub] = useState<string>('');

    const nameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsNameEmpty(false);
        setName(e.target.value);
    }

    const plusClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (sumToAdd !== '' || sumToSub !== '') {
            return;
        }
        setSubIsOpen(false);
        setAddIsOpen(prev => !prev);
    }

    const minusClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (sumToAdd !== '' || sumToSub !== '') {
            return;
        }
        setAddIsOpen(false);
        setSubIsOpen(prev => !prev);
    }

    const selectChange = (newValue: any) => {
        setSelectedType(newValue);
    }

    const сashChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsCashEmpty(false);
        setIsCashNan(false);
        setCash(e.target.value);
    }

    const closeAllInputs = () => {
        setAddIsOpen(false);
        setSubIsOpen(false);
        setSumToAdd('');
        setSumToSub('');
    }

    const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (name === '') {
            setIsNameEmpty(true);
            return;
        }

        if (cash === '') {
            setIsCashEmpty(true);
            return;
        }

        if (isNaN(+cash) && cash !== '') {
            setIsCashNan(true);
            return;
        }

        dispatch({
            type: WalletActionTypes.EditWallet, payload: {
                id: props.id,
                type: selectedType.value,
                description: name,
                balanse: +cash,
                history: []
            }
        });

        props.setIsOpen(false);
    }

    return (
        <Modal isOpen={props.isOpen} onRequestClose={props.onRequestClose} className={styles.modal}>
            <div className={styles.container}>
                <div className={styles.titleDiv}>
                    <h1 className={styles.title}>Информация о счёте {props.walletName}</h1>
                </div>
                <div>
                    <form onSubmit={formSubmit} className={styles.form}>
                        <p>Изменить название счёта</p>
                        <WhiteInput value={name} onChange={nameChange} placeholder={props.description} />
                        {isNameEmpty && <span className={styles.warnSpan}>Название не должно быть пустым</span>}
                        <p>Тип</p>
                        <WalletSelect
                            selectChange={selectChange}
                            selectedType={selectedType}
                            options={options}
                        />
                        <p className={styles.initialCash}>Изменить сумму</p>
                        <form>
                            <div className={styles.control}>
                                <div onClick={plusClick}>+</div>
                                <div onClick={minusClick}>-</div>
                            </div>
                            <div className={styles.input}>
                                {addIsOpen && <WhiteInput   style={{width: 175}} value={sumToAdd}
                                                            placeholder='Сумма для пополнения'
                                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                                                setSumToAdd(e.target.value)} />
                                }
                                {subIsOpen && <WhiteInput   style={{width: 175}} value={sumToSub}
                                                            placeholder='Сумма для списания'
                                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                                                setSumToSub(e.target.value)} />}
                                { (addIsOpen || subIsOpen) && <div className={styles.closeIcon}>
                                    <AiFillCloseCircle onClick={closeAllInputs} size={25} fill='grey' />
                                </div> }
                            </div>
                        </form>
                        {/* <WhiteInput onChange={сashChange} value={cash} placeholder={props.cash.toLocaleString()} style={{marginBottom: 9}} />
                        { isCashEmpty && <span className={styles.warnSpan}>Сумма не должна быть пустой</span> }
                        { isCashNan && <span className={styles.warnSpan}>Сумма должна быть числом</span> } */}
                        <AddButton theme={Theme.Violet}>Сохранить</AddButton>
                    </form>
                </div>
            </div>
        </Modal>
    )
}

export default WalletCardModal;