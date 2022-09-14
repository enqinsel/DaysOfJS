/* Object Key-Value */

// Not: Calistirmak istediginiz Js dosyasini index.html sayfasına gidip yorum satirindan cikariniz

let laptop1 = {
    brand: "Apple",
    model: "MacBook Pro",
    "2kg": 2, // 2kg yalniz basina hatalidir. basa sayi gelmez
    model_name: "MacBook Air",
    "test id": 1234
}


console.log(laptop1);

//Dogru Anahtar Bilgisi Olusturmak
console.log(laptop1.brand, laptop1["brand"]);
console.log(laptop1.model, laptop1["model"]);
console.log(laptop1["2kg"]);


//Anahtar bilgisine yeni deger eklemek
laptop1.brand = "Mac"
laptop1["brand"] = "Mac1"
console.log(laptop1);

// Yeni bilgi eklemek
laptop1.version = "10.15.7"
console.log(laptop1);


// Anahtar bilgilerine ulasmak (keys) -> Object.keys(item)
let keys = Object.keys(laptop1)
console.log(keys);
console.log(keys[1]);
console.log("other: ", Object.keys(laptop1));

keys.forEach(keyInfo => {
    console.log("keys: ", keyInfo, ", value: ", laptop1[keyInfo]);
})

// Deger bilgilerine ulasmak (values) -> Object.values(item)

console.log(Object.values(laptop1));

let values = Object.values(laptop1)

values.forEach(value => {
    console.log("value: ", value);
})


// [key, value] doner --> entries
console.log("entries: ", Object.entries(laptop1));


// example:
let person = {
    name: "Jack",
    age: 20,
};

console.log(person.name);
console.log(person["age"]);

let key = prompt("Kişinin hangi özelliğini öğrenmek isterdiniz?", "name");

// değişken ile erişim
alert(person[key]);      // Jack (prompt’a “name” yazarsak erişeceğimiz değer)

// JSON metodu
let user = {
    name: "Jack",
    age: 20
};

document.getElementById("demo").innerHTML = JSON.stringify(user); // Bu, objenizi bir stringe çevirip demo idsine basacaktır.
