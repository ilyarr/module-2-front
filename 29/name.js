const firstName = 'Ilya';
const lastName = 'R';
const patronymic = 'Stanson';
const birthYear = 1990;
const major = 'Прикладная информатика';

const result1 = firstName + ' ' + lastName + ' ' + patronymic + '\n' +
                + birthYear + '\n' +
                + major;

const result2 = `${firstName} ${lastName} ${patronymic}
${birthYear}
${major}`;

console.log(result1);

console.log(result2);
