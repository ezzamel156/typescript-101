"use strict";
const greeting = 'Hello buddies';
const year = 2021;
const addTwoNumbers = (a, b) => a + b;
let result = addTwoNumbers(1, 2);
function addTwoNumbersOld(a, b) {
    return a + b;
}
let resultOld = addTwoNumbersOld(1, 2);
const getUserById = (id) => ({
    id,
    name: 'hooman',
    age: 28,
    email: 'hooman@gmail.com',
});
const getZombieById = (id) => ({
    id,
    name: 'zambie',
    age: 99,
    email: 'zambie@gmail.com',
    deathDate: new Date
});
const user = getUserById('156');
const zombie = getZombieById('309');
const saveUser = (user) => console.log('saving user', user);
const saveZombie = (zombie) => { var _a; return console.log('saving zombie', zombie, (_a = zombie.deathDate) === null || _a === void 0 ? void 0 : _a.toISOString()); };
saveUser(zombie);
saveZombie(user);
//# sourceMappingURL=index.js.map