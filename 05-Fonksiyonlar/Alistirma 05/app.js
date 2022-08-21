let counter = document.querySelector("#counter")
let increase = document.querySelector("#increase")
let decrease = document.querySelector("#decrease")

let sayac = 0;



increase.addEventListener("click", clickEvent)
decrease.addEventListener("click", clickEvent)

function clickEvent() {
    console.log(this.id); // test
    this.id == "increase" ? (counter.style.color = "blue", sayac += 1) : (counter.style.color = "red", sayac -= 1)
    counter.innerHTML = sayac
    
}
