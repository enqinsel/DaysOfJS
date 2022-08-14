/* Koşullarla Çalışma */

// Not: Calistirmak istediginiz Js dosyasini index.html sayfasına gidip yorum satirindan cikariniz

// kullanici bilgisi varsa ekrana ismini yazdir

let username = prompt("Kullanici adinizi giriniz")

// username.length > 0 ve username.length kisaltilmis hali;

if (username) { // if kismi her zaman true ise calisir
    console.log(`Kullanici Bilginiz: ${username}`);
} else {
    console.log("Kullanici Bilginiz Girilmedi");
} 


