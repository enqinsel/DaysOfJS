/* String veri turu islemleri */

// Not: Calistirmak istediginiz Js dosyasini index.html sayfasına gidip yorum satirindan cikariniz


let email = "enqinsel@gmail.com"
let firstName = "engin"
let lastName = "INSEL"

// string karakter sayisi ogrenme --> length

console.log(
    `Mail adresiniz "${email.length}" karakterden olusuyor,
Adiniz "${firstName.length}" karakterden olusuyor,
Soy Adiniz "${lastName.length}" karakterden olusuyor
`)

// ilk karakteri bulmak --> [0]

console.log(`Adinizin bas harfi "${firstName[0]}", soyadinizin ikinci harfi: "${lastName[1]}"`)

// buyuk harf / kucuk harf

console.log(`Buyuk harflerle adiniz: "${firstName.toUpperCase()}", Kucuk harflerle soy adiniz: "${lastName.toLowerCase()}"`)

// string icerisinde istedigimiz bilgiyi aramak ve yerini bulmak --> search

console.log(`@ harfini bulma: ${email.search("@")}, Saglamasi: ${email[8]}`)
console.log(`Olmayan bir sey varsa -1 gelir, varsa 0'dan baslar. Olmayan: ${email.search("sadasd")}`)


// belli bir yere kadar al --> slice
   // Not: slice(0,3) diyorsak; 0,1 ve 2. indislerdeki elemani alir, 3'u almaz.

console.log(`
 Mail adresinizin ilk 3 harfi: ${email.slice(0,3)}.
  bilgisi: ${email.slice(8)}; 
 Daha pratik bir sekilde de yapabiliriz ve @ isaretini almamamiz gerekir: ${email.slice(email.search("@") + 1)} 
 Hepsini goster: ${email.slice(0)}`)


// bilgiyi degistirmek --> replace

console.log(`Eski mail adresiniz: "${email}", Yeni mail adresiniz: ${email.replace("enqinsel","engocan")}`)

email = email.replace("gmail.com", "hotmail.com")
console.log(email)


// istedigim bilgi var mi sorgusu --> includes
    // true false dondurur.

console.log(`Mail adresinde hotmail bilgisi var mi ? : ${email.includes("hotmail")},
Mail adresinde gmail bilgisi var mi ? : ${email.includes("gmail")}
`)

// istedigim bilgiyle basladi mi bitti mi ? --> startsWidth, endsWidth

console.log(`Mail adresim "hotmail.com" ile mi bitti ? : ${email.endsWith("hotmail.com")},
Mail adresim "gmail.com" ile mi bitti ? : ${email.endsWith("gmail.com")}`)

console.log(`Adımın bas harfi "e" mi ? : ${firstName.startsWith("e")}`) //Buyuk kucuk harf duyarliligi var.

// ilk harflerini buyuk yapmak

console.log(`Adin: ${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()}, Soyadin: ${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}`)


// Metni diziye cevirme --> split

let isim = "Engin, Ege, Ahmet, Mehmet"
let isimler = isim.split(",")
console.log(isimler)
console.log(`Dizimizin ilk elemanina bu sekilde de ulasabiliriz: ${isimler[0]}`)



// Examples

let url = "www.kodluyoruz.org";
let language = "Java";

//Soru 1: Yukaridaki language değiskenin degerini JavaScript olarak degiştirin ve konsola yazdirin.

console.log(language.replace("Java","JavaScript"))

// Soru 2: Yukaridaki url degiskenini kullanarak "www" olmadan domain (kodluyoruz.org) adinda yeni bir degisken olusturun ve konsola yazdirin.


console.log(url.indexOf("."))
    //Önce indexOf kullanarak "noktanın" yerini öğrendik.

let domain = url.slice(3 + 1)
    //3+1 olması "noktadan" sonrasını al demek.
console.log(domain)