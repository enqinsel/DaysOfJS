// Kosullarla Calismak Bolum Sonu Egzersizi:

/* 
1- prompt ile aldigin bilgiye gore asagidaki yapiyi kullanarak notun bilgisini #info'ya yazdir
AA  90-100
BA  85-89
BB  80-84
CB  75-79
CC  70-74
DC  65-69
DD  60-64
FD  50-59
FF  0-49
2- kullanicinin girdigi verinin istedigimiz aralikta olup olmadigini kontrol et
3- ff bilgisinde uzgun surat ikonu cikart, digerlerinde ise gulucuk olsun :)
4- ff class bilgisi text-danger, digerlerinin ise text-primary olsun
*/


const SMILE = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path fill-rule="evenodd" d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683z"/>
  <path d="M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>
`
const FROWN = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path fill-rule="evenodd" d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683z"/>
  <path d="M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>
`

const WARNING = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
</svg>
`


let point = prompt("Puani giriniz:")
let info = document.querySelector(".info")
let textInfo;

if (point.length > 0 && point >= 0 && point <= 100){
    textInfo = SMILE
    info.classList.add("text-primary")
    if(point>=90 && point <= 100){
        textInfo += "AA"
    }
    else if(point >= 85 && point <= 89){
        textInfo += "BA"
    }
    else if(point >= 80 && point <= 84){
        textInfo += "BB"
    }
    else if(point >= 75 && point <= 79){
        textInfo += "CB"
    }
    else if(point >= 70 && point <= 74){
        textInfo += "CC"
    }
    else if(point >= 65 && point <= 69){
        textInfo += "DC"
    }
    else if(point >= 60 && point <= 64){
        textInfo += "DD"
    }
    else if(point >= 50 && point <= 59){
        textInfo += "FD"
    }
    else{
        textInfo = FROWN
        info.classList.remove("text-primary")
        info.classList.add("text-danger")
        textInfo += "FF"
    }

}else{
    textInfo = WARNING
    info.classList.remove("text-primary")
    info.classList.add("text-danger")
    textInfo += "0 ile 100 arasinda bir puan giriniz"
}
info.innerHTML = `${textInfo} ${point}`