/* Fonksiyonlara Giris - Genel Bakış */

// Not: Calistirmak istediginiz Js dosyasini index.html sayfasına gidip yorum satirindan cikariniz


// Ilk fonksiyonumuzu tanimlamak:



function helloWorld(){
    console.log("Hello World");
}

function hello(){
    console.log("merhaba");
    helloWorld() // hello fonksiyonumuzu cagirdigimizda helloWorld fonksiyonu calisir
}


hello() //calistir


// Ornek:

// let userName = prompt("Kullanici Adinizi Giriniz")
// let age = prompt("Yasinizi giriniz")
// let info = document.querySelector("#info")

// function userCheck(){
//     if(age >= 18 && userName){
//         info.innerHTML = "Ehliyet Alabilirsiniz"
//     }
//     else if(!(userName && age)){
//         info.innerHTML = "Kullanici adinizi veya yasinizi giriniz"
//     }
//     else if(age<=18 && userName){
//         info.innerHTML = "Ehliyet Alamazsiniz"
//     }
// }

// userCheck()


function printHello(name){
    console.log("Merhaba" , name);
}

printHello("engin")


function add(sayi1, sayi2){
    console.log(sayi1 + sayi2);
}

add(5 , 3)

// Anonim fonksiyon

let topla = function(number1, number2){
     return number1 + number2
}

//topla(1,4) // bu sekilde olmaz fonksiyon gibi çağıramayız, hatalı kullanimdir.


// callback
function islem(topla){
    console.log(topla * 2);
}

islem(topla(1,5))


// return function

function addition(sayi1, sayi2){
    return (sayi1 + sayi2)
}

let added = addition(2,4) // add = 6

console.log(added); // 6


// Scope

    // degisken1 funk1() fonksiyonun kapsamındadır. Lokal degiskendir
function funk1(){
    let degisken1 = 5

    return degisken1 *2
}

console.log(funk1());

  // funk2() fonksiyonunda degisken1 funk1() fonksiyonun kapsamı icinde oldugu icin baska yerde cagirilamaz.

function funk2(){
    let degisken2 = 3
    let degisken3 = 5

    return degisken1 + degisken2 + degisken3  // hata verir
}

//console.log(funk2()); // degisken1 is not defined at funk2() hatasi aliriz


let myDegisken = 9

function funk3(){
    return myDegisken // hata vermez
}

console.log(funk3()); // 9 sonucunu verir. Cunku myDegisken olarak adlandirdigimiz degisken bir global degiskendir, her yerden cagirilir.


// Asenkron Calisma

function print1(){
    console.log("İlk Ekran Çıktısı");
}

function print2(){
    setTimeout(function(){console.log("İkinci Ekran Çıktısı");}, 3000) // Hepsinden üç saniye sonra çalışacak
}

function print3(){
    console.log("Üçüncü ekran çıktısı");
}


print1() // ilk gözüken
print2() // üçüncü gözüken
print3() // ikinci gözüken

/*Bunun sebebi asenkron çalışma yapısıdır. printScreen1 fonksiyonu çalıştıktan sonra printScreen2 fonksiyonun çalışması için beklemeden printScreen3 fonksiyonumuz çalışır. Bu durumdan kurtulmak için callback kullanıyoruz denebilir. */

function printScreen1() {
    console.log("İlk ekran çıktısı");
  }

  function printScreen2(callback1, callback2) {
    setTimeout(function () {
      callback1();
      console.log("İkinci ekran çıktısı")
      callback2();
    }, 3000);
  }

  function printScreen3() {
    console.log("Üçüncü ekran çıktısı");
  }


 printScreen2(printScreen1, printScreen3);