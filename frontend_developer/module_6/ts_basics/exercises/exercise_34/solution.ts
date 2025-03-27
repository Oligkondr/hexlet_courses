type Transaction = (amount: number) => number
type Wallet = {
    transactions: { apply: Transaction }[],
    balance: number
}

const applyTransactions = (arg: Wallet): number => {
    return 1
}
