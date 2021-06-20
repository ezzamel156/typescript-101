// literal
const flipCoin = (): 'Head'|'Tail' => Math.random() < 0.5 ? 'Head' : 'Tail';
console.log(flipCoin());

// enum
enum Position {
    GOALKEEPER,
    DEFENDER,
    MIDFIELDER,
    STRIKER
}
// type Position = 'goalkeeper' | 'defender' | 'midfielder' | 'striker';
console.log(Position.STRIKER);

const bestPlayerForPosition = (position: Position): string => {
    let bestPlayer: string;
    switch (position) {
        case Position.GOALKEEPER:
            bestPlayer = 'Bernd Leno';
            break;
        case Position.DEFENDER:
            bestPlayer = 'Laurent Koscielny';
            break;
        case Position.MIDFIELDER:
            bestPlayer = 'Mesut Ozil';
            break;
        case Position.STRIKER:
            bestPlayer = 'Olivier Giroud';
            break;
        default:
            bestPlayer = 'Andre Santos'
            break;
    }
    return bestPlayer;
}

console.log(bestPlayerForPosition(Position.STRIKER));

