// Difference between interface and type

interface User {
    id: string,
    name: string,
}

type OtherUser = {
    id: string,
    name: string
}

// Unions
type Position = 'GK' | 'DEF' | 'MID' | 'FWD';
const playerPosition: Position = 'GK';
console.log(playerPosition);

interface Timestamp {
    createdAt: Date,
    updatedAt: Date,
}

// intersection
type UserWithTimestamp = User & Timestamp;
const user: UserWithTimestamp = {
    id: '123',
    name: 'Mel',
    createdAt: new Date,
    updatedAt: new Date,
}
console.log(user);

// aliasing
type customString = string;
type AliasUser = User;

// Declaration Merging
interface Lol {
    id: string,
    name: string,
}

interface Lol {
    age: number,
}

const lel: Lol = {
    id: '123',
    name: 'mel',
    age: 123,
}
console.log(lel);

