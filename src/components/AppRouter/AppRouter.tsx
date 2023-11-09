import React from "react";
import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Router } from "../../utils/Router";
import DashBoard from "../../pages/Dashboard/Dashboard";
import WalletListPage from "../../pages/WalletListPage/WalletListPage";

const AppRouter: FC = () => {
    return (
        <Routes>
            <Route path={Router.Home} element={<Navigate to={Router.DashBoard} />} />
            <Route path={Router.Wallets} element={<WalletListPage />} />
            <Route path={Router.DashBoard} element={<DashBoard />} />
        </Routes>
    );
}
 
export default AppRouter; 