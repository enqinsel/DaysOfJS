/* forEach ile array icerisindeki ogelerin cagirilmasi */

// Not: Calistirmak istediginiz Js dosyasini index.html sayfasina gidip yorum satirindan cikariniz.

const PRODUCTS = ["laptop", "Phone", "Speaker", "Desktop PC", "Server", "Mouse", "Keyboard"]

// PRODUCTS.forEach((product, index, array) => (console.log(array[index] = product + " 111")))

// console.log(PRODUCTS);


/**
 * let userList = document.querySelector("#userList")

for(index = 0 ; index < users.length; index++){
    // console.log(users[index]); //users[0] , users[1] , users[2] olacagindan sonucu istedigimiz gibi verecektir. 

    let li = document.createElement("li")
   // li.classList.add("list-group-item")
    li.append(users[index])
    userList.appendChild(li)
    
}
 */

let userList = document.querySelector("#userList")

PRODUCTS.forEach((product,index) => {
    console.log(product,index);
    let li = document.createElement("li")
    // li.append(product, " - ",index)
    li.innerHTML = `${product.toUpperCase()} - ${index}`
    userList.appendChild(li)
})