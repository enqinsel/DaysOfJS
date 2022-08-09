/* DOM'a Giris */

// Not: Calistirmak istediginiz Js dosyasini index.html sayfasına gidip yorum satirindan cikariniz


//(Document Object Model) DOM’da HTML ile hazırladığınız sayfa, document; bu document'in içine yerleştirdiğiniz her türlü öğe ise element olarak adlandırılır. DOM'da nesnelerin birer element olarak kullanılabilmesi için hiyerarşik bir düzen izlenerek çağrılmaları gerekir. HTML’deki her bir elamanın birbiri ile hiyerarşik bir yapı oluşturması ile oluşur. DOM bir ağaç dizini gibi bütün dokümanları birbirine bağlar. Bazen bu hiyerarşik yapıyı kullanmadan metotlar(getElementById) ile istediğimiz elemente ulaşabiliriz. Bunu da diğer derslerde görücez.

console.log("Dokumanin URL'sini verir: "+document.URL)

console.log(`
Hostname: ${document.location.hostname}
Host: ${document.location.host}
Pathname: ${document.location.pathname}
Port: ${document.location.port}
Protocol: ${document.location.protocol}
Href: ${document.location.href}
`)


console.log(document.body);
console.log(document.head);

// stil de verebiliyoruz

document.body.style.backgroundColor = "aqua"