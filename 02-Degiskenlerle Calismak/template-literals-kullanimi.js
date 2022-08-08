        /* Template Literals Kullanimi */

// Not: Calistirmak istediginiz Js dosyasini index.html sayfasına gidip yorum satirindan cikariniz



let username = "engin"
const DOMAIN = "engininsel.com"

// string birlestirme islemi
let email = username + "@" + DOMAIN
console.log("Merhaba "+username+" Yeni mail adresin: "+email)

// Template literals kullanimi; Yazma konforlugu kazandiriyor, birden fazla satir yazabiliyoruz.

let info = `Merhaba ${username}, Yeni mail adresin: ${email}

Mail adresiniz "${email.length}" karakterlidir, ${(4 * 10) + 1} kere Maşallah :)

${new Date().getHours()}:${new Date().getMinutes()} saatlerinde gelen mail.
`

console.log(info)

