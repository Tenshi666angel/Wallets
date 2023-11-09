import React from "react";
import styles from './Navbar.module.css';
import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Router } from "../../utils/Router";
import { IoWalletOutline } from 'react-icons/io5';
import AddButton from "../UI/button/AddButton";
import { Theme } from "../../constants/ButtonThemes";

type NavData  = {
    isActive: boolean;
    isPending: boolean;
}

const Navbar: FC = () => {

    const activeSelect = (navData: NavData) => 
                                    navData.isActive ? styles.activeNavItem : styles.navItem;

    return (
        <header className={styles.header}>
            <IoWalletOutline size={30} className={styles.logo} />
            <NavLink to={Router.DashBoard} className={activeSelect}>Обзор</NavLink>
            <NavLink to={Router.Wallets} className={activeSelect}>Счета</NavLink>
            <NavLink to={Router.Entries} className={activeSelect}>Записи</NavLink>
            <div className={styles.addEntry}>
                <AddButton theme={Theme.Orange}>+ Добавить запись</AddButton>
            </div>
        </header>
    );
}
 
export default Navbar;