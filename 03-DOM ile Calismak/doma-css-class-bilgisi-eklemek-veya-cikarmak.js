/* DOM'a CSS class bilgisi eklemek veya cikarmak */

// Not: Calistirmak istediginiz Js dosyasini index.html sayfasına gidip yorum satirindan cikariniz


let greeting = document.querySelector("#greeting")


greeting.classList.add("text-primary")
greeting.classList.add("title")

// birden fazla da ekleyebiliyoruz --> add()
greeting.classList.add("info", "btn", "bg")


// class silme --> remove()

greeting.classList.remove("title", "bg")
console.log(greeting.classList);

// index sirasina gore dondurme --> item()
    //Eger index, class length'inden (sayısından) daha büyük veya length'ine eşit olursa null döner.


console.log(greeting.classList.item(1)); // info

// kontrol etme --> contains()
    //Element verilen class'ı içeriyorsa true, içermiyorsa false döner. 

console.log(greeting.classList.contains('warning')); // false
console.log(greeting.classList.contains('info'));

// Toggle() : classList.add() ve classList.remove() yöntemini aynı anda çağırmak yerine classList.toggle() yöntemini kullanılabilir. Yani eger class varsa siliyor yoksa ekliyor şeklinde ifade edilse daha doğru olur bence.

console.log(greeting.classList.toggle('info')); // info classi vardi bu yüzden remove gorevi gordu ve sildi
console.log(greeting.classList.toggle('test')); // test classi yoktu, bu yüzden add gorevi gordu ve ekledi.

    // Bu metodu kullanmadan önce contains() metodu ile sınıfın var olup olmadığını manuel olarak kontrol etmek gerekir.

//Bir CSS sınıfını başka bir sınıfla değiştirmek için kullanmak --> replace()

console.log(greeting.classList); // kontrol edildi elimizde ne var ne yok diye.

console.log(greeting.classList.replace("btn" , "block"));

console.log(greeting.classList); // btn classi yerine block classi gecti.

// Sinif sayisini bulmak icin --> length()

console.log(greeting.classList.length); // sonuc 3