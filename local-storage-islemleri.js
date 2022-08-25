/* Local Storage Islemleri */

// Not: Calistirmak istediginiz Js dosyasini index.html sayfasına gidip yorum satirindan cikariniz.



// Eger tutacagimiz bilgi object ise JSON.stringify ile objeyi string yapiya cevirebiliriz.
let user = {userName:"engin", isActive: true}

localStorage.setItem("userInfo" , JSON.stringify(user))

let userclg = localStorage.getItem("userInfo") // bilgiyi al
userclg = JSON.parse(userclg)
console.log(userclg);

// 2. egzersiz

let items = [1,2,3, user]
// localStorage.setItem("newItems", items) // hatali
localStorage.setItem("newItems", JSON.stringify(items))

//JSON Parse ile localStorage icindeki bilginin cekilip kullanilmasi
let newInfo = JSON.parse(localStorage.getItem("newItems"))
console.log(newInfo.items);