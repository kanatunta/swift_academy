const arr = ['adsd.com', 'dfsdfdsf.hiy.h.com', 'dsfdsfsdf.com.media'];
const arrCom = arr.filter(e => e.endsWith('.com'));
const arrCom2 = arr.filter(e => e.match(/(.com)$/g));
console.log(arrCom);
console.log(arrCom2);
console.table(arrCom);

const persons = [
    { name: 'Pep1', age: 23 },
    { name: 'Pep2', age: 33 },
    { name: 'Pep3', age: 43 },
    { name: 'Pep4', age: 17 },
    { name: 'Pep5', age: 56 }
];

const age = 18;
persons
    .filter(person => person.age >= age)
    .map(personOver18 => {
        console.log(personOver18.name);
    });

console.log(
    persons
        .filter(person => person.age >= age)
        .map(e => e.name)
        .join(' ')
);

const arrAddress = persons.map(e => {
    e.adres = 'Sofia';
    return e;
});

console.log(arrAddress);
