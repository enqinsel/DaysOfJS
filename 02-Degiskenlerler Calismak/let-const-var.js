/* ************ Degiskenler *********** */ 

// Not: Calistirmak istediginiz Js dosyasini index.html sayfasına gidip yorum satirindan cikariniz

// var ile degisken tanimlama

var serverName = "engininsel.com"
console.log(serverName)

// let ile degiskeni bos tanimlamak

let apiKey;
console.log(apiKey) // bu şekilde undefined gösterir.

// let ile degiskene bilgi atamak

apiKey = "ASD64asd213f"
console.log(apiKey)

// let ile degiskene bilgi atayarak tanimlamak

let password = "1234"
console.log(password)

// Degisken atamasi yapmadan once kullanmaya calismak
  // Bu şekilde hata verir.
//console.log(fullName)
//let fullName = "Engin İnsel"

// Yukaridaki işlemi  "var" ile yaptigimizda ise;
    // Bu şekilde de undefined vericektir.
    // Bu bloğu çalıştırmadan önce 25-26 satırları yorum satırı yapın.

console.log(firstName)
var firstName = "Engin"

// let ile tanimlanan degiskenin icindeki bilgiyi degistirme

let lastName = "Ege"
lastName = "insel"
console.log(lastName)

// let ile ekleme islemi

lastName += " Engin"
console.log(lastName)

// const ile degiskeni bos tanimlamak
  // const degiskeni tanimlandiktan sonra bir daha tanimlanamaz. İcerisindeki bilgi degistirilemez. Bos tanimlama olmaz.

const serverPassword = "213adsa212"
console.log(serverPassword)




/*
**JavaScript loosely typed bir programlama dilidir. Yani bir değişkeni tanımlarken değişkenin türünü (sayısal, metinsel, boolean) belirtmemize gerek yoktur.


*var 
    Yani değişkenin( variable) kısaltmasıdır.
    fonksiyon içerisindeki değerlerinin dışarıdan erişilebilir.
    Var ile tanımlanan değişlenler kodun herhangi bir yerinde ve birden fazla kez kullanılabilir . Ya da tekrar tanımlanabilir.
    var ile tanımlanan değişkenler global scope veya function scope'tur. Global scope'ta tanımlanan değişkenlere her yerden ulaşılabilir. Function içerisinde tanımlanan değişkenlere ise tanımlı olduğu fonksiyonda ulaşılabilir
*let
    Sonradan tekrar değiştirilebilir Aynı kapsam (scope) içerisinde sadece bir sefer tanımlanabilir. Tekrar tanımlanmaya çalıştığında kod hata verir ve çalışmayı durdurur.
*const
    Constant yani Sabit anlamını taşımaktadır .
    const ile tanımlanmış bir değişken let kullanımında olduğu gibi tanımlandığı kapsam (block scope) içerisinden erişilebilir ve bunun dışından erişimler sağlanmaz.
*/
