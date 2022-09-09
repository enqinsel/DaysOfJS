/* Break ve Continue Kullanimi  */

// Not: Calistirmak istediginiz Js dosyasini index.html sayfasina gidip yorum satirindan cikariniz.


const LOREM_LIST = [
    "lorem", "ipsum", "dolor", "amet", "consectetur", "adipisicing", "elit"
]

// break
let counter = 0

for (; counter < 10; counter++) {
    if (counter === 5) {
        break
    }
    console.log("break: ", counter);
}

// continue

let sayac = 0

for (; sayac < 10; sayac++) {
    if (sayac === 5) {
        continue
    }
    console.log("continue: ", sayac);
}


// ornek

const userList = document.querySelector("#userList")

    // with break
// for (i = 0; i < LOREM_LIST.length; i++){
//     if(LOREM_LIST[i] == "dolor"){break}
//     let li = document.createElement("li")
//     li.classList.add("list-group-item")
//     li.append(LOREM_LIST[i])
//     userList.appendChild(li)
// }

    // with continue
for (i = 0; i < LOREM_LIST.length; i++){
    if(LOREM_LIST[i] == "dolor"){continue}
    let li = document.createElement("li")
    li.classList.add("list-group-item")
    li.append(LOREM_LIST[i])
    userList.appendChild(li)
}

// Ozetle: break-> buraya kadar,dur. continue-> bunu atla,geç.

