import { BiMoney } from "react-icons/bi";
import { Card } from "./CardTypes";
import { AiFillCreditCard } from "react-icons/ai";
import { BsFillCreditCard2BackFill } from 'react-icons/bs'
import { CardColors } from "./CardColors";

enum IconSize {
    Select = 25,
    Card = 50,
    Page = 70
}

export const WalletTypes = [
    {
        type: Card.Cash,
        verbName: 'Наличные',
        icons: {
            card: <BiMoney size={IconSize.Card} style={{ fill: 'whitesmoke' }} />,
            select: <BiMoney size={IconSize.Select} style={{ fill: CardColors.Cash }} />,
            page: <BiMoney size={IconSize.Page} style={{ fill: 'whitesmoke' }} />
        }
    },
    {
        type: Card.Debet,
        verbName: 'Дебет. карта',
        icons: {
            card: <AiFillCreditCard style={{ fill: 'whitesmoke' }} size={IconSize.Card} />,
            select: <AiFillCreditCard style={{ fill: CardColors.Debet }} size={IconSize.Select} />,
            page: <AiFillCreditCard style={{fill: 'whitesmoke'}} size={IconSize.Page} />
        }
    },
    {
        type: Card.Credit,
        verbName: 'Кредит. карта',
        icons: {
            card: <BsFillCreditCard2BackFill style={{ fill: 'whitesmoke' }} size={IconSize.Card} />,
            select: <BsFillCreditCard2BackFill style={{ fill: CardColors.Credit }} size={IconSize.Select} />,
            page: <BsFillCreditCard2BackFill style={{fill: 'whitesmoke'}} size={IconSize.Page} />
        }
    }
]