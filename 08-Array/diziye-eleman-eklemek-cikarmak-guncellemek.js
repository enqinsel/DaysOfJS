/* Diziye eleman eklemek, cikarmak, guncellemek */

// Not: Calistirmak istediginiz Js dosyasini index.html sayfasina gidip yorum satirindan cikariniz.

let items = [10, 20, 30, 40]
console.log("items - ilk hali :", items);


// Sona eleman eklemek -> push

items.push(50)
console.log("50 : ", items);

// Basa eleman eklemek -> unshift

items.unshift(5) // veri tipi onemli degil. Suan da integer veri tipini ekledik.
console.log("5 : ", items);

items.unshift("engin")
console.log("engin : ", items);

// Sondaki elemani cikarmak -> pop

    // sondaki elemani cikarip onu degiskene atayip ne oldugunu gormek

    let lastItem = items.pop() // sondaki eleman(50) silindi ve degiskene atadi
    console.log("lastItem: ", lastItem, ", items: ", items); // 50 ...

// Bastaki elemani cikarmak -> shift

let firstItem = items.shift() // ilk eleman(engin) silindi ve degiskene atadi
console.log("firstItem: ", firstItem, ", items: ", items); // engin ...


// Array icindeki bir elemanin bilgisinin degistirilmesi

    // ilk elemanin degistirilmesi
    items[0] = 8 // 5 olan ilk elemani 8 ile degistirdik.
    console.log(items);

    // son elemanin degistirilmesi
    items[items.length - 1] = 48 // 40 olan son elemani 48 ile degistirdik.
    console.log(items);




// ********************************************************************

// Özet örnek

var sports = ['basketball', 'football', 'tennis'];
console.log(sports);

// sonuna ekleme
sports.push("voleyball")
console.log(sports);

// basina ekleme
sports.unshift("handball")
console.log(sports);

// sondaki elemani silme
sports.pop()
console.log(sports);

// bastaki elemani silme
sports.shift()
console.log(sports);

// İcindeki bilgiyi guncellemek

sports[0] = "Boxing"
console.log("guncellendi: ", sports);


// splice() -> diziye hem eleman hem de eleman silmek icin kullanilir.
// Metodun ilk parametresi islemin yapilacagi index numarasini, ikinci parametre ise kac elemanin silinecegini belirtir.

sports.splice(1, 0, 'baseball'); // 1.indexe baseball ekle ve 0 tane eleman sil.
console.log(sports);

sports.splice(0, 2); // 0. indexten itibaren 2 elemani sil
console.log(sports);

// indexi olmayan bir bilgiyi guncellersek?

sports[3] = "asdasd" // ikinci index bos, ucuncu indexe atar. ikinci index ise empty yazar.
console.log("empty: ", sports);


// elemanin indexini bulma -> indexOf()
console.log(sports.indexOf("tennis"));

// dizide istedigimiz elemani silme splice ile

sports.splice(sports.indexOf("tennis"), 1);
console.log(sports);

// Yukaridaki islem sunu soyluyor:
/* splice islemin icine indexOf ve 1 yazdik. indexOf("tennis") diyerek; silmek istedigimiz elemanin yani tennisin indexini verdi. Sonra 1 diyerek, indexOfdan gelen indexten itibaren(indexOf dahil) kaç tane eleman silecegini soyledik. O da 1. Yani tennis elemanini sil demis olduk. */