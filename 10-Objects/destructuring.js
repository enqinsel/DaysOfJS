/* Obje ve Array destructuring kullanimi */

// Not: Calistirmak istediginiz Js dosyasini index.html sayfasina gidip yorum satirindan cikariniz.


// Object Destructuring


let settings = {
    userName: "enqinsel",
    password: "1234",
    isActive: false,
    ip: "127.0.0.1",
    serverName: "kodluyoruz.org"
}

// Obje icindeki bilgilerin tek seferde cikarilmasi
// yontem 1
// let serverName = settings.userName
// console.log(serverName);

//yontem 2(rename && destructuring) -> userName as user olarak dusunebiliriz.
let { userName: user, password, isActive, ip: serverIP, serverName } = settings

console.log(user, password, isActive, serverIP, serverName);
console.log(user); // bilgileri bu sekilde de alabiliyoruz
console.log(serverIP);


// Obje icindeki bazi bilgilerin cikarilmasi 
///...newSettings demek, kalanini newSettingse obje olarak at
let { userName: userName2, password: password2, isActive: isActive2, ...newSettings } = settings

console.log(userName2, password2, isActive2);
console.log(newSettings); // kalanini goruntuledik

// Objenin destructuring ile kopyalanmasi

//HATALI
//let settings2 = settings
// settings2.userName = "Degisen bilgi"
// console.log("settings: ", settings);
// console.log("settings2: ", settings2);

//DOGRUSU
let settings2 = { ...settings }
settings2.userName = "Degisen bilgi"
console.log("settings: ", settings);
console.log("settings2: ", settings2);


// Arrayler icin

let score = [100, 200, 300, 400]

let [score1, score2, ...otherScore] = score
console.log(score1, score2, otherScore);

// kopyasini almak ve rename

let copyOfScore = [...score]
copyOfScore[0] = 700
console.log("copyOfScore: ", copyOfScore);
console.log("score: ", score);

// fonksiyona parametre girerken de yapabiliriz:

const sayilar = {
    sayi1: 5,
    sayi2: 3
}

const cikarma = ({ sayi1, sayi2 }) => {
    return sayi1 - sayi2;
}

console.log("sonuc: ", cikarma(sayilar));


// toplama

let numbers = {
    a: 5,
    b: 4
}

let topla = ({ a, b }) => {
    return a + b
}

console.log("Topla:", topla(numbers));


let person = { name: "Selin", city: "Ankara", favoriteColor: "aqua blue" }; 
let {name:foo}=person;
console.log(foo)