        /* Boolean Veri Turu ile Calismak */

// Not: Calistirmak istediginiz Js dosyasini index.html sayfasına gidip yorum satirindan cikariniz


// 0 ve 1'i anlamak

        // true === 1 , false === 0 demektir. Bilgisayar bu sekilde anliyor

let isActive = false // 0
isActive = true // 1
console.log(isActive)


let userName;
let isUserName = Boolean(userName) // userName var mi diye sorguluyoruz.
console.log(isUserName) // tanimlamadigimiz icin bos oldugu icin false donecektir

// İçinde değer barındıran tüm ifadeler true'tur.

Boolean("10") // true
Boolean(2) // true
Boolean("0") // true
Boolean(" ") // true. Ici bos gibi gozukse de bosluk karakteri vardir.
Boolean(-0.1) //true
Boolean(10>9) //true

userName = "engin"
console.log("Is There User Name ? : ", Boolean(userName))

// Boolean ile bilgi var mı yok mu kontrol edebiliriz. 

//İçinde değer barındırmayan tüm ifadeler false 'tur.

Boolean("") // false 
Boolean() // false
Boolean(0) //false
Boolean(-0) //false
Boolean(null) //false
Boolean(false) //false
Boolean(NaN) //false
Boolean(undefined) // false


// Boolean ile sonucu iki ihtimalli if gibi durumlarda kontrol etmek icin kullanabiliriz.

Boolean(0 === 0) // Sıfır, sıfıra esit mi ? true donecektir. Cevap ya true olur ya da false. if(0 === 0)

// Aslinda karar yapilarini kullanirken arka tarafta Boolean kullanmis oluyoruz.