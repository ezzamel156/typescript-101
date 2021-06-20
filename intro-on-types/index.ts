const greeting: string = 'Hello buddies';
const year: number = 2021;

const addTwoNumbers = (a: number, b:number): number => a + b;
let result: number = addTwoNumbers(1, 2);

function addTwoNumbersOld(a: number, b:number): number {
    return a + b;
}
let resultOld: number = addTwoNumbersOld(1, 2);

interface User {
    id: string;
    name: string;
    age: number;
    email: string;
}

interface Zombie {
    id: string;
    name: string;
    age: number;
    email: string;
    deathDate?: Date;
}

const getUserById = (id: string): User => ({
    id,
    name: 'hooman',
    age: 28,
    email: 'hooman@gmail.com',
});
const getZombieById = (id: string): Zombie => ({
    id,
    name: 'zambie',
    age: 99,
    email: 'zambie@gmail.com',
    deathDate: new Date
});
const user = getUserById('156');
const zombie = getZombieById('309');

const saveUser = (user: User) => console.log('saving user', user);
const saveZombie = (zombie: Zombie) => console.log('saving zombie', zombie, zombie.deathDate?.toISOString());

saveUser(zombie);
saveZombie(user);
