/* Karsilastirma operatoru ve mantiksal operatorler */

// Not: Calistirmak istediginiz Js dosyasini index.html sayfasına gidip yorum satirindan cikariniz

let price = 1
let price2 = "1"
user = "guest"


// == Esitse (sadece degere bakar)

console.log(price == 1); // true
console.log(price2 == 1); // true
console.log(price == 100); // false

// === Hem degeri hem de turu esitse

console.log(price === 1); // true
console.log(price2 === 1); // false 
console.log(price == 100); // false

// != Esit degilse

console.log(price != 1); // false
console.log(price2 != 1); // false
console.log(price != 200); // true (dogru 200'e esit degil.)

// < Kucukse , > Buyukse

console.log(price > 100); // false
console.log(price < 100); // true
console.log(price2 < 100); // true
console.log(price2 > 100); // false

// <= Kucuk veya esitse , >= Buyuk veya esitse

console.log(price >= 100); // false
console.log(price <= 100); // true
console.log(price2 <= 100); // true
console.log(price2 >= 100); // false

// && ve

console.log(price && user != "guest"); // false - price var mi user guest degil 
console.log(price < 10 && price > 0);  // true
console.log(price === 1 && price2 === 1); // false
console.log(price === 1 && price2 == 1); // true

// || veya

console.log(price < 10 || price > 0); // true
console.log(price > 10 || price > 0); // true
console.log(price || user != "guest"); // 1 - ilk dogru olan yazdirildi
console.log(price || user == "guest"); // 1 - ilk dogru olan yazdirildi
console.log(price == 1 || price2 === 1); // true
console.log(price == 3 || price > 2 || price > 0); // true - sonuncusu dogru

// ! degil(tersi)

console.log(price > 0 && user == "guest"); // true -> 1 && 1 = 1
console.log(price > 0 && !user == "guest"); // false -> 1 && 0 = 0
console.log( !(price > 0) ); // false
console.log( price > 0 ); // true
console.log(2); // 2
console.log(!!2) // true