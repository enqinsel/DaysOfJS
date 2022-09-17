/* Hata Yonetimi , Try-Catch Kullanimi */

// Not: Calistirmak istediginiz Js dosyasini index.html sayfasina gidip yorum satirindan cikariniz.


let product;

try{
    product.forEach(item => console.log(item))
}
catch(error){
    console.log("Bu bir try-catch kullanimi hatasi: ",error);
}
