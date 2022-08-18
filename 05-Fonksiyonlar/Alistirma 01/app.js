let btn = document.querySelector("#btn")

btn.addEventListener("click" , controlYou)

function controlYou(inpValue,yaziHTML){
    yaziHTML = document.querySelector("#yazi")
    inpValue = document.querySelector("#inp")
    yaziHTML.innerHTML = inpValue.value
}