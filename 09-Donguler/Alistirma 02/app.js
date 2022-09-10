/**
 * Soru 1: Asagidaki diziyi kullanarak filter() metodu ile yaşı 30'dan büyük olan kişiyi getirin.
 * Soru 2: Asagidaki diziyi kullanarak filter() metodu ile JavaScript bilen kişiyi getirin.
 */

const person = [{
    name: "Adem",
    age: 25,
    languages: ["JavaScript", "CSS"],
},
{
    name: "Oğuz",
    age: 33,
    languages: ["Java", "HTML"],
}
];

// soru1
let personAge = person.filter(thirtyAge => (thirtyAge.age > 30))
console.log("Yasi 30'dan buyuk olan kisi: ", personAge);

// soru2
let personJS = person.filter(JS => (JS.languages.includes("JavaScript")))
console.log(personJS);