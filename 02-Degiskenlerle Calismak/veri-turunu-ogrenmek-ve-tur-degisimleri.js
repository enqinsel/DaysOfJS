        /* Veri turunu ogrenmek ve tur donusumleri */

// Not: Calistirmak istediginiz Js dosyasini index.html sayfasına gidip yorum satirindan cikariniz


// veri turunu ogrenmek (typeof)
let price = 111
let stringPrice = "111"
let hasPassword = true


console.log(
        "price: ",
        typeof(price)  // number
)

console.log(
        "stringPrice: ",
        typeof(stringPrice)  // string
)

console.log(
        "hasPassword: ",
        typeof(hasPassword)  // boolean
)


// string(metinsel) bilgileri int ya da floata donusturmek

let number1 = "11"
number1 = parseInt(number1) 
console.log ( "number1: ", number1, typeof(number1) )



let number2 = "11px" // px11 olsaydi NaN sonucunu verecekti
number2 = parseInt(number2) 
console.log ( "number2: ", number2, typeof(number2) )


let number3 = "11px"
number3 = Number(number3) // Sonuc NaN olacak. Number sadece sayilari baz alir, baska karakter olmamali
console.log ( "number3: ", number3, typeof(number3) )



let number4 = "11.4px"
number4 = parseFloat(number4)
console.log ( "number4: ", number4, typeof(number4) )


// number veri tipinden stringe donusturmek

let number5 = 55

number5 = number5.toString()

console.log(typeof(number5))






