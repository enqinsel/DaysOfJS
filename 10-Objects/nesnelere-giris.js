/* Liste icerisindeki ogeye erismek ve yeni oge eklemek */

// Not: Calistirmak istediginiz Js dosyasini index.html sayfasına gidip yorum satirindan cikariniz

let arrayObj = [1, 2, 3]
let object1 = {obj: 1}

console.log("arrayObj: ", typeof(arrayObj));
console.log("object1: ", typeof(object1));

let item1 = new Object()
let item2 = {}

console.log("item1: ", typeof(item1));
console.log("item2: ", typeof(item2));

// obje olusturmak

let item3 = {}
let item4 = new Object()

console.log("object1: ", object1);
console.log("object1: ", object1.obj); // icindeki 1 sayisina ulasiriz

//artist isimli objemiz
//name isimli, "engin" primitive değerine sahip property
//album isimli, içerisinde başka bir objeye yer veren property

let artist = {name: "engin", album:{title: "Cigerizm", year:2022}}

console.log(artist);


/*Primitive(string, number, boolean vb.) değerlerin aksine objeler, JavaScript istemcisinin belleğinde, sahip oldukları değerlerle değil, sistemin atadığı hafıza adresleriyle kayıtlıdırlar. Bunun ayrımını aşağıdaki örnekte şöyle görebiliriz: */

    // ayni degerlere sahip 2 primitive veri tipi
let mesaj = "merhaba"
let baskaMesaj = "merhaba"

console.log(mesaj == baskaMesaj); // true
    // ayni degerlere, farklı memory adreslere sahip 2 obje

let obje = {mesaj: "merhaba"}
let baskaObje = {mesaj: "merhaba"}

console.log(obje == baskaObje); // false

/*Bu örnekte görüldüğü gibi, aynı primitive değerlere sahip olan “mesaj” ve “baskaMesaj” isimli değişkenler eşit kabul ediliyor. Fakat “obje” ve “baskaObje” isimli objeler de bire bir aynı değerleri barındırmalarına rağmen eşit kabul edilmiyorlar. Çünkü bu iki obje, arka planda göremediğimiz iki ayrı hafıza adresiyle tanınıyorlar, bu yüzden içerikleri aynı olsa da farklı kabul ediliyorlar. */


// Object literals ile object oluşturmak

let laptops = {
    brand: "monster",
    model: "abra",
    color: "black"
}
console.log("with literal: ", laptops);

// new keyword ile object olusturmak

let laptop = new Object()

laptop.brand = "Casper"
laptop.model = "nirvana"
laptop.color = "grey"

console.log("with new keyword: ", laptop);

// object.create()


let countriesTalkSpanish = {
    continent: "south america",
    language: "spanish"
    };

let noInheritence = Object.create(null);   //herhangi bir kalıtım(inheritence) almaz
console.log(noInheritence);
    
let standartObject = Object.create(Object.prototype) //standart obje kalıtımı alır.
console.log(standartObject);

let argentina = Object.create(countriesTalkSpanish)
console.log("argentina: ",argentina);

argentina.capital = "buenos aires"; 
//objeye, ülkenin başkentini belirten yeni bir property atadık. Artık elimizde başkentini, konuşulan dili ve hangi kıtada yer aldığını bildiğimiz bir ülke var.