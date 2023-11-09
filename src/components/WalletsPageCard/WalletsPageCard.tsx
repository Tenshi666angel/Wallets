import { FC } from "react";
import { WalletTypes } from "../../constants/WalletTypes";
import styles from './WalletsPageCard.module.css';
import { CardColors } from "../../constants/CardColors";
import { Card } from "../../constants/CardTypes";
import { BsFillTrashFill } from "react-icons/bs";
import { Dispatch } from "redux";
import { WalletAction } from "../../types/types";
import { useDispatch } from "react-redux";
import { WalletActionTypes } from "../../constants/WalletActionTypes";

type WalletCardPageProps = {
    type: string
    description: string
    id: number
    balanse: number
}

const WalletsPageCard: FC<WalletCardPageProps> = (props) => {

    const getColorFromType = () => {
        switch(props.type) {
            case Card.Cash:
                return CardColors.Cash;
                break;
            case Card.Debet:
                return CardColors.Debet;
                break;
            case Card.Credit:
                return CardColors.Credit;
        }
    }

    const dispatch: Dispatch<WalletAction> = useDispatch();

    const removeWalletOnClick = () => {
        dispatch({ type: WalletActionTypes.RemoveWallet, payload: {
            id: props.id,
            type: props.type,
            description: props.description,
            balanse: props.balanse,
            history: []
        }});
    }

    const color = getColorFromType();

    const { type, verbName, icons } = WalletTypes.find(wall => wall.type === props.type)!;

    return ( 
        <div style={{backgroundColor: color}} className={styles.card}>
            <div className={styles.icon}>
                { icons.page }
            </div>
            <div className={styles.verbName}>
                <h4 className={styles.name}>{verbName}</h4>
                <p className={styles.description}>{props.description}</p>
                <b className={styles.balanse}>{props.balanse.toLocaleString()} ₽</b>
            </div>
            <div className={styles.control}>
                <button onClick={removeWalletOnClick}>
                    <BsFillTrashFill size={30} />
                </button>
            </div>
        </div>
    );
}

export default WalletsPageCard;