/* Number Veri Tipi ile calismak ve temel aritmetik islemlere bakis */

// Not: Calistirmak istediginiz Js dosyasini index.html sayfasına gidip yorum satirindan cikariniz


// Number veri turu tanimlamak

let price = 100
let tax = 0.18
let priceTax = price * tax
let total = price + priceTax
console.log(
    "Fiyat:", price, 
    "KDV Orani:", tax, 
    "KDV Tutari:", priceTax,
    "Fiyat:", total
    )


let stringNumber = "12"
console.log(stringNumber) // Bu bir stringdir
console.log(typeof(stringNumber)) // typeof veri tipini gösterir.


let newNumber = Number(stringNumber) // Bu şekilde string veri tipini number veri tipine dönüştürmüş olduk.
console.log(newNumber)
console.log(typeof(newNumber)) 

// arttirma ve azaltma islemleri

let counter = 1
console.log("oldCounter:", counter)

counter += 1 // kısa yontem
console.log("newCounter:", counter)

    // counter = counter + 1  uzun yontem

    // counter ++ daha kisa yontem

counter --
console.log("Azaltilmis hali:", counter)

counter +=2
console.log("2 Eklendi:", counter) //3

counter *=10
console.log("10 ile carpildi:", counter) //30


counter /=3
console.log("3'e bolundu:", counter) //10

// Islem onceligi
    //Degiskene atmadan console uzerinden yapiyorum.
console.log(2 + 3 * 5) // burada islem onceligi carpmada olur. 2 + 15 = 17
console.log(2 + 3 * 10 / 2) // burada islem onceligi; bolme,carpma,toplama diye gerceklesir. 2+3*5 = 17

// Mod(kalan) % alma(Asagidaki iki soruyu mod alma ile bulabiliriz):

  // sayi tek mi cift mi ? (Bunu anlamak icin sayiyi 2'ye bolup kalana bakariz. 0 ise cifttir, degilse tek.)

  console.log(3 % 2) // Sonuc: 1 , 3 sayisi tektir.
  console.log(4 % 2) // Sonuc: 0 , 4 sayisi cifttir.
  
  // 8 urun alan koliye tum urunler sigiyor mu ?

  console.log(8 % 8) // 8'lik bir koliye 8 urun koyarsam koliye sigmis olur. Sonuc 0
  console.log(12 % 8) // 8'lik bir koliye 12 urun koymaya calisirsam sigmaz. Sonuc bize fazlaligi verir.(4)


// us alma 

console.log(2 * 2 * 2) // Sonuc:8. 2'nin 3 ussu oluyor. 2^3

console.log(2 ** 3) // Bu şekilde us almis oluyoruz. 2^3
console.log(2 ** 4) // 2^4 = 16

// Asagi yuvarlama islemi  --> Math.floor

console.log( Math.floor(1.9) ) // Asagiya yuvarlar, sonuc: 1
console.log ( Math.floor(1.1) ) // sonuc: 1 

// Yukari yuvarlama islemi --> Math.ceil

console.log( Math.ceil(1.1) ) // Sonuc: 2
console.log( Math.ceil(1.9) ) // Sonuc: 2

// Yakina yuvarlama islemi --> Math.round

console.log(Math.round(1.2) ) // 1
console.log(Math.round(1.5) ) // 2
console.log(Math.round(1.7) ) // 2

// Sayinin mutlak degerini dondurme
console.log( Math.abs(-5) ) // 5