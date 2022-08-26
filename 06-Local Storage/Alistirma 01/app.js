// Fonksiyonlarda yaptigimiz counter ornegine burada local storage ekleyerek yapalim

let counter = document.querySelector("#counter")
let increase = document.querySelector("#increase")
let decrease = document.querySelector("#decrease")

let sayac = localStorage.getItem("sayac") ? Number(localStorage.getItem("sayac")) : 0

counter.innerHTML = sayac

increase.addEventListener("click", clickEvent)
decrease.addEventListener("click", clickEvent)

function clickEvent() {
    console.log(this.id); // test
    this.id == "increase" ? (counter.style.color = "blue", sayac += 1) : (counter.style.color = "red", sayac -= 1)
    localStorage.setItem("sayac", sayac)
    counter.innerHTML = sayac
    
}
