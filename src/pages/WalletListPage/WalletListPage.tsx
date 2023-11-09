import { FC } from "react";
import WalletsPageCard from "../../components/WalletsPageCard/WalletsPageCard";
import { WalletTypes } from "../../constants/WalletTypes";
import { useSelector } from "react-redux";
import { WalletState } from "../../types/types";

const WalletListPage: FC = () => {

    const state = useSelector((store: WalletState) => store.wallets);

    const wallets = state.map(wallet => <WalletsPageCard
                                            key={wallet.id}
                                            id={wallet.id}
                                            type={wallet.type}
                                            description={wallet.description}
                                            balanse={wallet.balanse}/>);

    return ( 
        <div>
            { wallets }
        </div>
    );
}
 
export default WalletListPage;