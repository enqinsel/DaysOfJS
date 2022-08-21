let input = document.querySelector("#input")
let demo = document.querySelector("#demo")


input.addEventListener("click",test)

function test(){
    console.log(this.type);
    console.log(this.value);
}

function myFunction(val){
    demo.innerHTML = val
}