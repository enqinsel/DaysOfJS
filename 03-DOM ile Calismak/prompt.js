/* Prompt ile kullanicidan bilgi almak */

// Not: Calistirmak istediginiz Js dosyasini index.html sayfasına gidip yorum satirindan cikariniz


// konsola yazdirdik
let fullName = prompt("Bir isim giriniz:")

console.log(fullName);

// DOM'a yazdirdik

let baslik = document.getElementById("baslik")

                            // "Orn:Ahmet" = Text(input) içerisinde gösterilecek uyarıdır. Boş da bırakılabilir.
let promptBaslik = prompt("İsim gir" , "Orn:Ahmet")
                                            // html etiketi de kullanabiliriz
baslik.innerHTML = `${baslik.innerHTML} <small style="color:red">${promptBaslik}</small>`