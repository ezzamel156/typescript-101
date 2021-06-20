// any basically disables type checking
const anyLogger = (something: any): void => {
    console.log(something.whateverYouWantHere);    
};

// for unknown types, need to do some checking, only then there's no error
// althrough sometimes typescript isn't smart enough so we need to use type cast. Check line 36
const unknownLogger = (something: unknown): void => {
    // console.log(something.CannotLikeDat);
    if(typeof something === 'string') {
        console.log(something.toUpperCase());        
    } else {
        console.log(something);        
    }
};

type anyType = { prop1: any; prop2: any};
const anyFoo:anyType = {
    prop1: 'hello',
    prop2: { 
        lol: 'lol'
    },
};
// we can write anything here but on compile time, it throws error
// console.log(anyFoo.prop2.jenggg.toUpperCase());

type unknownType = { prop1: unknown; prop2: unknown};
const unknownFoo:unknownType = {
    prop1: 'hello',
    prop2: { 
        lol: 'lol'
    },
};
console.log(unknownFoo.prop2);

if (unknownFoo.prop2 
    && typeof unknownFoo.prop2 === 'object' 
    && Object.hasOwnProperty.call(unknownFoo.prop2, 'lol')) {
        console.log((unknownFoo.prop2 as {lol: unknown}).lol);        
    }
