// ************ Fonksiyonlara Paremtreler Atamak ve Fonksiyondan geri dönüş almak *********

/**
 Temel Kurallar:
 1: Bir fonksiyon bir veya birden fazla parametre alabilir veya hiç almayabilir.
 2: Bir fonksiyon disari bilgi gonderebilir(return) veya göndermeyebilir
 3: Mumkunse fonksiyonun disariya bagimliliklarini azaltmak gerekir. Bunu parametre ile yapabiliriz
 */


 let firstName = "lorem"

 //  default parametre alan fonksiyonumuz
 function greetings(firstName=""){
    console.log(`Merhaba ${firstName ? firstName : ""}`);
 }

console.log(firstName); // degisken, fonksiyonun parametresi degil

 greetings("lorem") // fonksiyonu cagirdik ve parametre gonderdik

 let bilgi = greetings("lorem2") 
 console.log(bilgi); // undefined alir. Bunu yapabilmek icin fonksiyona return eklemek lazım

 // buradaki firstName parametre oldugu icin yukaridaki ile cakismaz
 function greetings2(firstName, lastName){
    let info = `Merhaba ${firstName} ${lastName}`
    return info
 }

 console.log(greetings2("Ad", "Soyad")); // returnden gelen sonucu konsola yazdirdik.

 //ornek - id ve icindeki bilgiyi kullanicidan alip yazdirdik

 function domIdWriteInfo(id, deger){
    id = prompt("idyi gir")
    let idBul = document.querySelector(`#${id}`)
    deger = prompt("değer gir")
    idBul.innerHTML = deger
 }

 domIdWriteInfo()






