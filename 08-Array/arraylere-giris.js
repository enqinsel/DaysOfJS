/* Arreylere(Diziler) Giriş */

// Not: Calistirmak istediginiz Js dosyasini index.html sayfasına gidip yorum satirindan cikariniz.

// Array Olusturmak

let domain = "enqinsel" // string
let isActive = false //boolean
let items = [1, 2, 3, isActive, domain] // array [numbers, boolean, string]

console.log(items);

// Arraye eleman eklemek hatali version

    // items = [4,5,6] // yeni bir dizi olusturur. icine eklemez.
    // console.log(items);

    // items += [4,5,6] // dizi olmadı birlestirme islemi yapti.
    // console.log(items); 


let emptyArray = [] // bos liste. Neden olustururuz? - Ornegin formdaki her bilgi girildiginde listeye atayabiliriz.

// Array icerisindeki eleman/oge sayisini ogrenmek

console.log(items.length);
    // document.querySelector("#info").innerHTML = items.length


// Array icindeki ilk elemana ulasmak

console.log(items[2]); // indexi sifirdan baslar. Sonuc: 3
console.log(items[3]); // sonuc false
console.log(items[0]); // sonuc 1. Ilk elemana sıfır indeksi ile ulasilir.
console.log(items[5]); // sonuc undefined, cünkü 5 indeksinin karsilayacagi eleman yok. Maks. 4'tur.

// Arrayin ortasindaki elemana ulasmak

console.log( "Ortasindaki eleman: ", items[ Math.floor(items.length/2)] );

// Array icindeki son elemana ulasmak

console.log(items[items.length - 1]); // items.length: eleman sayisini verir. 1 cikartarak son elemanin indeksini buluruz.

// Degisken icindeki bilginin array olup olmadiginin kontrol edilmesi

console.log(typeof(items)); // object olarak cikti veriyor.
console.log(Array.isArray(items)); // true


// hangileri isArray -> True verir?.

console.log("[] : ", Array.isArray( [] ) ); // true
console.log("1 : ", Array.isArray( 1 ) ); // array olmadigi icin false
console.log("true : ", Array.isArray( true ) ); // false


// dizi icerisinde farkli bir dizi varsa;

let arr = [1,2,3,["dört","beş","altı"],7,8];

console.log(arr[3]); // icindeki diziyi verir

console.log(arr[3][0]); // icindeki dizinin ilk elemanina ulastik.

//Dizi prototipinde tanımlı foreach fonksiyonu yardımıyla da dizi elemanlarına erişilebilir.
arr.forEach((item, index) => {
    console.log(item, index);
  });