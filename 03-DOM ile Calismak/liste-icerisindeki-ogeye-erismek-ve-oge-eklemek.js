/* Liste icerisindeki ogeye erismek ve yeni oge eklemek */

// Not: Calistirmak istediginiz Js dosyasini index.html sayfasına gidip yorum satirindan cikariniz

// last-child --> son eleman
// first-child --> ilk eleman

let itemLast = document.querySelector("ul#list>li:last-child")
console.log(itemLast.innerHTML);

// il ogeyi degistirdik
let itemFirst = document.querySelector("ul#list>li:first-child")
itemFirst.innerHTML = "ilk oge degisti"


console.log(itemFirst.innerHTML);

// oge eklemek

let ulDOM = document.querySelector("ul#list")

let liDOM = document.createElement("li")

liDOM.innerHTML = "Kendi elementim"

// append ile en sona eklenir
ulDOM.append(liDOM)

// prepend en basa ekler
ulDOM.prepend(liDOM)

// oge stilini degistirme

liDOM.style.color = "red"
ulDOM.style.fontSize = "36px"
