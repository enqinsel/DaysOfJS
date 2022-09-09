/* While dongusu kullanimi */

// Not: Calistirmak istediginiz Js dosyasini index.html sayfasina gidip yorum satirindan cikariniz.

// while, bir sey olana kadar calisir, sonsuz dongudur. Kosulumuzu sagladiktan sonra durdurmak gerekir.

let counter = 0

while(counter < 10){
    console.log(counter);
    counter++
}

let userName;
//verdiğimiz koşul sağlandığı sürece döngü devam eder
while(!userName){
    userName = prompt("Kullanici bilgisi giriniz: ")
    console.log(userName);
}