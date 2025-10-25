console.clear();
const a: number = 5;
const b: string = 'ABC';
const c: boolean = true;
function sum (a: number, b: number) {
    return a + b;
}
const marks = [10, 2, 8, 4, 6];
marks.push(5);
marks.push(7, 9, 1, 3);

console.log(marks);

//const words: string[] = [];
const words: string[] = [];
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

type HouseDetails = {
    city: string;
    street: string;
    footage?: number;
    floors?: number;
    rooms?: number;
};

type Food = {
    name: string;
    size: 'small' | 'medium' | 'large';
};

type User = {
    name: string;
    age: number;
    isMarried: boolean;
    houseInfo: HouseDetails;
    favoriteFood: Food[]; 
};

const allUsers: User[] = [
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

    const inactiveUser: User[] = [
        allUsers[0],
    ];

    const activeUser: User[] = [
        allUsers[1],
    ];

