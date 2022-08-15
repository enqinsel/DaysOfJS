let random = Math.floor(Math.random()*10)
let user = prompt("Bir sayı gir ve rastgele sayıyı bulmaya çalış!")

if(user === random && user != null){
    alert("Bildiniz")
}
else if(user == "")(alert("Boş giriş yaptınız"))
else if(user == null)(alert("Giriş yapmaktan vazgeçtiniz"))
else{
    alert(`Random Sayi: ${random} Bir daha deneyiniz :(`)
}