/* DOM icerisinden etiket ve id ile oge secimi */

// Not: Calistirmak istediginiz Js dosyasini index.html sayfasına gidip yorum satirindan cikariniz


// getElementById
let title = document.getElementById("title")
title.innerHTML = "Degisen Bilgi"

console.log(title.innerHTML);

// querySelector
    //QuerySelector () yöntemi, CSS seçicilere dayalı olarak DOM'dan html elemanlarını seçmenize izin veren iki modern JavaScript yönteminden biridir. Bu yöntem ile hem css class'larını hem de id'lerini kullanabilirsiniz. Bunu yaparken class için ön ek olarak nokta ".", id'ler için kare "#" kullanmanız gerekir. Sayfada eşleşen ilk elemanı size döndürecektir. Belirtilen elemanın eşleşememesi durumunda geriye null dönecektir.

let link = document.querySelector("ul#list>li>a") // daha kisa yoldan da cozebiliriz; a etiketine id vererek. Orn: querySelector("#link")

link.innerHTML = "Link bilgisi degisti."
link.innerHTML += " 'Engin Tarafindan'"

link.style.color = "red"

    //class ekledik. Sadece web sayfa gelistiricisinde gorebiliriz. index.html'e somut olarak gecmez.
link.classList.add("btn")

    //console.log ile yazmamiza gerek yok artik sayfamizda gorebiliyoruz. Deneme amacli yazilmistir.
console.log(link.innerHTML);


let ikinci = document.querySelector(".ikinci")
console.log(ikinci.innerHTML);

let ucuncu = document.querySelector("#ucuncu")
console.log(ucuncu.innerHTML);

//getElementsByTagName

    //Elemanları etiket isimlerine göre seçmek için getElementsByTagName() metodu kullanılır. Birden çok elemente ulaşmak amacı ile kullanılır. Girdi olarak bir html elementi alır ve buna uygun bir HTMLCollection döndürür.

let li = document.getElementsByTagName("li")
console.log(li);

console.log(li[1].innerHTML)

    // Sayfadaki tum etiketleri getirmis olduk.
let all = document.getElementsByTagName("*")
console.log(all);


//getElementsByName

    //Elemanları isimlerine göre getirmek içim getElementsByName() metodu kullanılır. Elemanların name değerlerine göre bir NodeList objesi döndürür.

    //E-posta adını taşıyan tüm öğeleri getirelim.

let emails = document.getElementsByName("e-posta")
console.log(emails);

    // Unutmayın ki name değeri id'de olduğu gibi biricik bir değer taşımaz birden fazla eleman aynı name değerini taşıyabilir. Eğer biricik (uniq) bir değer vermeniz gerekirse id'yi kullanın.'

//getElementsByClassName

let kuslar = document.getElementsByClassName("kusu")
console.log(kuslar);

    // Bu metotla birden fazla class name belirtip daha detaylı bir seçim yapabilirsiniz.

let kuslar2 = document.getElementsByClassName("baykus kusu")
console.log(kuslar2);