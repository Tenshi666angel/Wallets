import React, { FC, useState } from "react";
import styles from './WalletCard.module.css';
import { BiMoney } from 'react-icons/bi';
import { AiFillCreditCard } from 'react-icons/ai';
import { Card } from "../../constants/CardTypes";
import { WalletTypes } from "../../constants/WalletTypes";
import WalletCardModal from "./WalletCardModal/WalletCardModal";
import { selectStateType } from "../../types/types";

type WalletCardProps = {
    type: string
    description: string
    id: number
    balanse: number
}

const WalletCard: FC<WalletCardProps> = (props) => {

    const { type, verbName, icons } = WalletTypes.find(wallType => wallType.type === props.type)!;

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const selectedWalletType: selectStateType = {
        value: type,
        label: verbName,
        icon: icons.select
    }

    const getDataFromType = (): { style: any } => {
        switch(type) {
            case Card.Cash:
                return { style: styles.cashCard };
                break;
            case Card.Debet:
                return { style: styles.debetCard };
                break;
            case Card.Credit:
                return { style: styles.creditCard }
                break;
            default:
                return { style: undefined }
        }
    }

    const { style } = getDataFromType();

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }
 
    return (
        <>
            <div onClick={openModal} className={style}>
                { icons.card }
                <div className={styles.balanse}>
                    <h4>{verbName}</h4>
                    <p className={styles.description}>{props.description}</p>
                    <b>{props.balanse.toLocaleString()} ₽</b>
                </div>
            </div>
            <WalletCardModal 
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                onRequestClose={closeModal}
                selectedWallet={selectedWalletType}
                walletName={verbName}
                cash={props.balanse}
                id={props.id}
                description={props.description}
            />
        </>
    );
}

export default WalletCard;