import { createStore } from "redux";
import { WalletAction, WalletState } from "../types/types";
import { Card } from '../constants/CardTypes';
import { WalletActionTypes } from "../constants/WalletActionTypes";

const initialState: WalletState = {
    wallets: [
        { 
            id: 1, 
            balanse: 0, 
            type: Card.Cash, 
            description: 'Моя наличка', 
            history: []
        },
        {
            id: 2, 
            balanse: 0, 
            type: Card.Debet, 
            description: 'Моя дебетка', 
            history: []
        }
    ]
}

const walletReducer = (state: WalletState = initialState, action: WalletAction): WalletState => {
    switch(action.type) {
        case WalletActionTypes.AddWallet:
            return { ...state, wallets: [ ...state.wallets, action.payload ] }
            break;
        case WalletActionTypes.EditWallet:
            return {
                ...state, wallets: state.wallets.map((wall) => 
                    wall.id === action.payload.id
                    ?
                    {
                        id: wall.id,
                        balanse: action.payload.balanse,
                        type: action.payload.type,
                        description: action.payload.description,
                        history: wall.history
                    }
                    :
                    wall
                    )
            }
            break;
        case WalletActionTypes.RemoveWallet:
            return {
                ...state, wallets: state.wallets.filter((wall) => wall.id !== action.payload.id)
            }
            break;
        default:
            return state;
            break;
    }
}

export const store = createStore(walletReducer);