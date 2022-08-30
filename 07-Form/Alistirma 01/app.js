let userForm = document.querySelector("#userForm")
let alertDOM = document.querySelector("#alertDOM")


const alertFunction = (title, message, className = "warning") =>
    `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
    <strong>${title}</strong> ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`

userForm.addEventListener("submit", formHandler)

function formHandler(event) {
    //form submit edildiğinde tarayıcının yenilenmesini önleyen fonksiyon
    event.preventDefault()

    let USER_NAME = document.querySelector("#userName")
    let SCORE = document.querySelector("#score")
    let data = JSON.parse(localStorage.getItem("list")) || [];

    if (USER_NAME.value && SCORE.value) {
        addItem(USER_NAME.value, SCORE.value)
        data.push({ "username": USER_NAME.value, "score": SCORE.value });
        localStorage.setItem("list", JSON.stringify(data));
        USER_NAME.value = "" // gonderdikten sonra sifirlandi
        SCORE.value = ""
    } else {
        alertDOM.innerHTML = alertFunction(
            "Hooop!",
            "Eksik Bilgi Girdiniz.",
            "danger"
        )
    }
}


let userListDOM = document.querySelector("#userList")

const addItem = (userName, score) => {
    let liDOM = document.createElement("li")
    liDOM.innerHTML = `${userName} <span class="badge bg-primary rounded-pill">${score}</span> `
    liDOM.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center")
    userListDOM.append(liDOM)
}
