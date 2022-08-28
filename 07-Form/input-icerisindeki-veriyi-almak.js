/* Input icerisindeki veriyi almak */

// Not: Calistirmak istediginiz Js dosyasini index.html sayfasına gidip yorum satirindan cikariniz.


let formDom = document.querySelector("#userForm")
formDom.addEventListener("submit", formSubmit)


function formSubmit(event) {
    event.preventDefault() // default islemi engelledik. Sayfa yenilenmez.
    console.log("islem ger");
    let scoreInputDom = document.querySelector("#score")
    console.log(scoreInputDom.value); // inputun icindeki veriyi aldik

    // yukaridaki bilgiyi localstorageye ekleyelim
    localStorage.setItem("score",scoreInputDom.value )
}

