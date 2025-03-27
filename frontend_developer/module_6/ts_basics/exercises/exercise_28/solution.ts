const formatPrice = (num?: number | null): string => {
    return num !== null && num !== undefined
        ? `$${num.toFixed(2)}`
        : '$0.00';
}

console.log(formatPrice(3.145))
console.log(formatPrice(200))
console.log(formatPrice())
console.log(formatPrice(null))
