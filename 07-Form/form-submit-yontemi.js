/* Form Submit Yontemi */

// Not: Calistirmak istediginiz Js dosyasini index.html sayfasına gidip yorum satirindan cikariniz.


//  Form Submit

let formDom = document.querySelector("#userForm")

formDom.addEventListener("submit", formSubmit)

function formSubmit(event) {
    event.preventDefault() // default islemi engelledik. Sayfa yenilenmez.
    console.log("islem ger");
}


