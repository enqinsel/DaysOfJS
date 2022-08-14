/* Ternary Operatoru ile short if kullanimi */

// Not: Calistirmak istediginiz Js dosyasini index.html sayfasına gidip yorum satirindan cikariniz


// Ornek: Eger kullanici adin varsa yazdir yoksa kullanici bilginiz yok diye yazdir

let userName = prompt("Kullanici bilgisi giriniz: ")
let info = document.querySelector("#info")

// ternary kullanimi:
// kosul ? dogruysa : yanlissa

    // template literalin icine koymasak da olurdu
info.innerHTML = `${userName.length > 0 ? userName : "Kullanici bilginiz yok"}`


// Zincirleme gibi ic ice kullanabiliriz.

var money = 40;
var canBuy = 
    (money < 17) ? "Satın alamazsın..":
    (money > 30) ? "Satın alabilirsin..":
    "Para miktarını girmen gerekmektedir..";

console.log(canBuy) // "Satın alabilirsin.."