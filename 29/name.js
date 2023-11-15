const firstName = 'Ilya';
const lastName = 'R';
const patronymic = 'Johnson';
const birthYear = 1990;
const major = 'Прикладная информатика';

const result1 = firstName + ' ' + lastName + '\n' +
                patronymic + '\n' +
                'Год: ' + birthYear + '\n' +
                'Направление: ' + major;

const result2 = `${firstName} ${lastName}
${patronymic}
Год: ${birthYear}
Направление: ${major}`;

console.log('1 способ:');
console.log(result1);

console.log('\n2 способ:');
console.log(result2);
