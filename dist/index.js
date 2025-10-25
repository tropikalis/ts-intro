"use strict";
console.clear();
const a = 5;
const b = 'ABC';
const c = true;
function sum(a, b) {
    return a + b;
}
const marks = [10, 2, 8, 4, 6];
marks.push(5);
marks.push(7, 9, 1, 3);
console.log(marks);
//const words: string[] = [];
const words = [];
//words.push(1);
words.push('1');
//words.push(true);
//words.push([]);
//words.push({});
console.log(words);
const jonas = {
    name: 'Jonas',
    age: 99,
    isMarried: true,
    favoriteColor: '',
};
console.log(jonas);
jonas.favoriteColor = 'red';
console.log(jonas);
const allUsers = [
    {
        name: 'Jonas',
        age: 99,
        isMarried: true,
        houseInfo: {
            city: 'Vilnius',
            street: 'Gedimino str.',
            footage: 500,
        },
        favoriteFood: [
            { name: 'Food-1', size: 'small' },
            { name: 'Food-2', size: 'medium' },
            { name: 'Food-3', size: 'large' },
        ],
    },
    {
        name: 'Maryte',
        age: 88,
        isMarried: true,
        houseInfo: {
            city: 'Vilnius',
            street: 'Gedimino str.',
            footage: 500,
            floors: 3,
            rooms: 7,
        },
        favoriteFood: [
            { name: 'Food-1', size: 'small' },
            { name: 'Food-2', size: 'medium' },
            { name: 'Food-3', size: 'large' },
            { name: 'Food-4', size: 'large' },
        ],
    },
];
const inactiveUser = [
    allUsers[0],
];
const activeUser = [
    allUsers[1],
];
