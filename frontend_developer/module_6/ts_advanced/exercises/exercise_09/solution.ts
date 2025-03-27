interface IFlying {
    canFly: true;
}

interface IBird extends IFlying {
    isLiving: true;
}

interface IPlane extends IFlying {
    canCarryPeople: true;
}

interface ISuperman extends IBird, IPlane {
    guessWho(value: string): string
}

const superman: ISuperman = {
    canFly: true,
    isLiving: true,
    canCarryPeople: true,
    guessWho(value: string): string {
        return `It's a ${value.toLowerCase() === 'superman'
            ? `${value}!`
            : `${value}?`
        }`
    }
}

console.log(superman.guessWho('bird')); // "It's a bird?";
console.log(superman.guessWho('plane')); // "It's a plane?";
console.log(superman.guessWho('superman')); // "It's a superman!";
