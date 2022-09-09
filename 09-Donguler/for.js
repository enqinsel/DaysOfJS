/* For dongusu kullanimi */

// Not: Calistirmak istediginiz Js dosyasini index.html sayfasina gidip yorum satirindan cikariniz.

/**
 * Kullanimi:
 * for (BaşlangıçAtaması; Koşulİfadesi; döngüSonundaÇalışacakİfade) {"Koşul sağlanıyorsa(true) çalışmasını istediğim komutlar."
}; 
    "Koşul sağlanmazsa(false) döngüden çıkılır."
 */


let users = ["Lorem", "Ipsum", "Dolor"]

// for(let index = 1; index <= 10; index++){
//     console.log(index);
// }
    // disaridan tanimlama yaparak da oldugunu gorduk
// let index = 0;
// for(; index <= 10; index++){
//     console.log(index);
// }

// users icindekileri domda yazdiracak olursak:

let userList = document.querySelector("#userList")

for(index = 0 ; index < users.length; index++){
    // console.log(users[index]); //users[0] , users[1] , users[2] olacagindan sonucu istedigimiz gibi verecektir. 

    let li = document.createElement("li")
   // li.classList.add("list-group-item")
    li.append(users[index])
    userList.appendChild(li)
    
}



