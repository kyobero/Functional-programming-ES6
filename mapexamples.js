const numbers = [1, 2, 3, 4, 5];

const double = x=>x*2;

const doubledNumbers = numbers.map(double); 

const isEven = x => x % 2 === 0;

const evenNumbers = numbers.filter(isEven);

const words = [
    'hello',
    'goodbye',
    'the',
    'Antarctica',
];

const createLengthTest = minLength =>
    word => word.length > minLength;

const longWords = words.filter(createLengthTest(5));

console.log(longWords);