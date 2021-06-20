const logger = (something: unknown): void => console.log(something);
let a = logger('COYG!');
// console.log('a =', {a});

interface User {
    id: string;
    email: string;
    name: string|null;
    age?: number;
}

const createUser = (email: string): User => ({
    id: '123',
    email,
    name: null,
});

const user = createUser('ezzamel@gmail.com');
console.log('user = ', {user});
