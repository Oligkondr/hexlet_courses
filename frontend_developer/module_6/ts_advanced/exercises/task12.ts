export type MySet<T> = {
    items: T[]
    add(value: T): number
    has(value: T): boolean
}
