export type WalletState = {
    wallets: Wallet[]
}

export type Operation = {
    id: number
    date: Date
    sum: number
    description: string
    type: string
}

export type Wallet = {
    id: number
    type: string
    description: string
    balanse: number
    history: Operation[]
}

export type WalletAction = {
    type: string
    payload: Wallet
}

export type CardType = {
    Cash: string
    Debet: string
    Credit: string
}

export type selectStateType = {
    value: string
    label: string
    icon: React.ReactNode
}