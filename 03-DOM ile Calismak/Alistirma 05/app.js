let veri = document.querySelector("#veri")
let buttonaddon2 = document.querySelector("#button-addon2")
let ul = document.querySelector("#ul")



// Enter key
veri.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("button-addon2").click();
  }
});


// Butonumuza bir fonksiyon yazdik.
buttonaddon2.addEventListener("click", todolist)
let li;


function todolist() {

  if (veri.value.length > 0) {
    // burada bir li etiketi yarattik
    li = document.createElement("li");


    // bu li etiketinin icine, verimizden gelen value degerini attik.
    li.textContent = veri.value

    // li etiketimize class ekledik. Boylelikle css özelligi kazandi
    li.classList.add("list-group-item", "listem")

    // date ekledik
    div = document.createElement("div")
    div.classList.add("divStyle", "text-muted")
    time = new Date();
    console.log(time.toLocaleTimeString('en-US'));
    div.textContent = time.getDate() + "/" + (time.getMonth() + 1) + "/" + time.getFullYear() + " " + time.toLocaleTimeString('en-US');


    ul.prepend(li)
    // daha sonra bu li etiketini ul etiketine yani listeye eklemis olduk.
    li.append(div)
    // ekleme yaptiktan sonra input yerimizi bosalttik.
    veri.value = "";

  } else {
    alert("Not giriniz")

  }

}
