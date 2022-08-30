/* Cok kullanilan array dizi metotlari ve array icinde array olusturma */

// Not: Calistirmak istediginiz Js dosyasini index.html sayfasina gidip yorum satirindan cikariniz.


let items = [1, 2, 3, 4, 5]

// Array icinde Array

let femaleUsers = ["Ayse", "Hulya", "Merve"]
let maleUsers = ["Ahmet", "Hasan", "Mehmet"]

// items arrayin basina femaleUsers arrayini ekledik
items.unshift(femaleUsers)
console.log(items);

// items arrayin sonuna maleUsers arrayini ekledik

items.push(maleUsers)
console.log(items);

// icindeki arraye ulasma
console.log(items[0][1]);
console.log(items[0].length); // sifirinci indeksteki dizinin eleman sayisi: 3

// array icerisindeki ogeleri ayirmak -> splice(pos, item?)

let newItems = items.splice(1, 5)
console.log("newItems: ",newItems);
console.log("Items: " ,items);


// array icerisindeki ogenin index bilgisini bulmak -> indexOf("value")

items.unshift("lorem")
items.push("ipsum")
console.log(items);

console.log(items.indexOf("ipsum"));


// Array kopyalamak -> slice , [...ES6]

    // bu sekilde kopyalama olmaz sadece ikisi aynı olur aynı sonuclar cikar.
let copyItems = items
console.log(items);

copyItems.pop()
console.log("items: ", items);
console.log("copyItems: ", copyItems);

console.log("Kopyalandiktan sonraki hali:");
copyItems = items.slice()
copyItems.pop()
console.log("items: ", items);
console.log("copyItems: ", copyItems);

console.log("********");
let es6Items = [...items] // es6 ve sonrasinda gelen kopyalama islemi
console.log(es6Items);

// Iki array bilgisini birlestirmek -> [...es6, ...es6]

console.log("---------");
let allUsers = [...femaleUsers, ...maleUsers] // es6 birden fazla array yapisini birlestirmek
console.log(allUsers);

// Array icindeki bilgiyi stringe cevirme -> toString, join

console.log("toString: ", allUsers.toString()); // stringe cevirdik, 1.yontem
console.log("join: ", allUsers.join(" --- ")); // aralarina --- atayarak string yaptik

// Istedigimiz index bilgisine oge eklemek -> splice (index, 0, value)

allUsers.splice(allUsers.length, 0, "engin")
console.log(allUsers);

// eleman var mi yok mu ? -> includes

console.log(allUsers.includes("ali")); // false doner, ali bilgisi yoktur.