type Point = [number, number, number]

const isTheSamePoint = (point1: Point, point2: Point): boolean => {
    return point1.toString() === point2.toString()
}

const p1: Point = [1, 3, 4];
const p2: Point = [1, 3, 4];
const p3: Point = [0, 8, 4];

console.log(isTheSamePoint(p1, p2))
console.log(isTheSamePoint(p1, p3))
console.log(isTheSamePoint(p2, p3))
