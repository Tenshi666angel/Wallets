import React from "react";
import { FC } from "react";
import Navbar from "./components/Navbar/Navbar";
import AppRouter from './components/AppRouter/AppRouter';

const App: FC = () => {
    return ( 
        <div>
            <Navbar />
            <AppRouter />
        </div>
    );
}
 
export default App;