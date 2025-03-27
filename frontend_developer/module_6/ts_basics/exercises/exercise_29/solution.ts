type Turtle = 'turtle' | null;

type Game = {
    makeTurn: (direction: 'left' | 'right') => void;
    state: Array<Turtle>;
};

const startGame = (): Game => {
    const state: Array<Turtle> = ['turtle', null, null, null, null];

    const makeTurn = (move: 'left' | 'right') => {
        let turtleIndex = state.indexOf('turtle');

        if (move === 'left') {
            if (turtleIndex === 0) {
                throw new Error('ERROR')
            }

            state.splice(turtleIndex, 1)
            turtleIndex -= 1
            state.splice(turtleIndex, 0, 'turtle');
        }

        if (move === 'right') {
            if (turtleIndex === 4) {
                throw new Error('ERROR')
            }

            state.splice(turtleIndex, 1)

            turtleIndex += 1
            state.splice(turtleIndex, 0, 'turtle');
        }
    }

    return {makeTurn, state};
};

const {makeTurn, state} = startGame();
console.log(state); // ['turtle', null, null, null, null]

// makeTurn('left')

makeTurn('right')
makeTurn('right')
makeTurn('right')
makeTurn('right')
makeTurn('right')

console.log(state);
