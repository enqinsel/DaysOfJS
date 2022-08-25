/* Local Storage Giris - Veri ekleme, duzenleme ve silme */

// Not: Calistirmak istediginiz Js dosyasini index.html sayfasına gidip yorum satirindan cikariniz.


// localStorage icerisine bilgi kaydetmek

let email = "enqinsel@gmail.com"
localStorage.setItem("userEmail" , email) // -> anahtar, deger yapisi kullanilir(key, value)


// localStorage icerisindeki bilgiyi bir degiskene atamak ve cagirmak (getItem)
let localStorageEMailInfo = localStorage.getItem('userEmail')

console.log(localStorageEMailInfo)


// localStorage icerisinden istenilen Key bilgisinin silinmesi
localStorage.removeItem("userEmail") // key bilgisini yazarak silebiliriz.
