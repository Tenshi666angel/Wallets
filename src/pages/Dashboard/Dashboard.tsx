import React, { FC, useState } from "react";
import AddButton from "../../components/UI/button/AddButton";
import WalletCard from '../../components/WalletCard/WalletCard';
import styles from './Dashboard.module.css';
import { Theme } from '../../constants/ButtonThemes';
import { useSelector } from "react-redux";
import { WalletState } from "../../types/types";
import NewWalletModal from "../../components/NewWalletModal/NewWalletModal";
import { NavLink } from "react-router-dom";
import { Router } from "../../utils/Router";

const DashBoard: FC = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const state = useSelector((store: WalletState) => store.wallets);

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    const wallets = state.map(wallet => 
        <WalletCard key={wallet.id}
                    type={wallet.type}
                    description={wallet.description}
                    id={wallet.id}
                    balanse={wallet.balanse} />)

    return (
        <div className={styles.container}>
            <div className={styles.cards}>
                { wallets[wallets.length -1] } { wallets[wallets.length - 2] }
            </div>
            <div className={styles.control}>
                <AddButton onClick={openModal} theme={Theme.Violet} style={{ marginTop: 5 }}>+ Добавить счёт</AddButton>
                <NavLink to={Router.Wallets}><AddButton theme={Theme.Orange} style={{marginTop: 5}}>Все счета</AddButton></NavLink>
            </div>
            <NewWalletModal setIsOpen={setIsOpen} isOpen={isOpen} onRequestClose={closeModal} />
        </div>
    );
}

export default DashBoard;