// Eventlerle alistirma


// cut event
let cut = document.querySelector("#cut")

cut.addEventListener("cut", domCut)

function domCut(event) {
    alert("KESİLDİ")
    console.log(event.type); // etkinlik tipini ogrendik, "cut"
}

// change event

// let select = document.querySelector("#select")

// select.addEventListener("change", domChange)

// function domChange(event){
//     console.log("Etkinlik tipi : " + event.type);
//     console.log("secildi" , event.target.value);
// }

// Kabarciklanma Etkinligi (Event Bubbling)

// ic ice elementler cagrildi  

let container = document.querySelector('.container');
let inputText = document.querySelector('.inputText');
let button = document.querySelector('#button');
let selectColor = document.querySelector('#selectColor');

selectColor.addEventListener('click', function () {
    console.log("selectColor");
})

inputText.addEventListener('click', function () {
    console.log("inputText");
})

container.addEventListener('click', function () {
    console.log('container');
})

    /*Burada class=container olan div elementi icerisinde 3 farkli "id" numarasi olan elementler bulunmaktadir. Container kapsayan kume, diger elementler ise bu kume icerisindeki ayrik kumelerdir. Dolayisiyla diger uc elemente tiklandiginda class=container olan div elementini tutan container degiskeni, tiklanan elementi tutan degisken ile ekrana yazilacaktir. ornegin inputText elementine tiklandiginda; ekran ciktisi: inputText container seklinde olacaktir. */


// Yakalama Etkinligi (Event Capturing)

    /*Ic ice elementlerde, ornegin uzerine tiklanan bir eleman kendisinin icindeki elemani da yazar. Kabarciklanma etkinliginin tam tersi seklinde calisir. Hedef distan ice dogrudur. Bir onceki ornekteki ciktinin tam tersi olarak ; ekran ciktisi container inputText seklindedir. */

// Kullanim Sekli: element.addEventListener(event, function, useCapture); useCapture parametresi "True" ve "False" değerleri almaktadır.

