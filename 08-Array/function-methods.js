/* Metotlar icinde fonksiyon tanimladigimiz metotlar(forEach, map vs.) */

// Not: Calistirmak istediginiz Js dosyasini index.html sayfasina gidip yorum satirindan cikariniz.


// forEach()

/**
 * Kullanimi:
  
    dizi.forEach(function(diziElemanininKendisi, diziElemanininIndeksi, dizininKendisi) {
        // Code here.
    });
    
    Ihtiyacimiza gore bu parametrelerden hepsini veya aralarindan birkacini kullanabiliriz.
 */

// Malzemeler dizisindeki her bir malzemeyi ve onun indeksini konsola yazdİran bir kod yazalim:

let malzemeler = ["yumurta", "un", "sut"];

malzemeler.forEach(function(malzeme, malzemeIndeksi) {
    console.log("forEach: ", malzeme, malzemeIndeksi);
});

// degisken adlarini degistirebiliriz ama oraya gelen deger sabittir.(satir 11)
malzemeler.forEach(function(x, y, z) {
    console.log("forEach:" , x,y,z);
});

// map()
    /* 
        forEach'den tek farki: Sonucu yeni(!) bir dizide tutar.
    */
    // Bir dizideki sayilarin 5 katindan olusan baska bir dizi olusturalim:
 
let sayilar = [1,2,3];

let sayilarin5kati = sayilar.map(function(sayi){
    return sayi*5;
});

console.log("map: ", sayilarin5kati); // Cikti olarak [5,10,15] gormeyi bekleriz.
console.log("map: ", sayilar); // Cikti olarak [1,2,3] gormeyi bekleriz. Orijinal dizimiz ayni kalir.

    // Ozetle sunu yaptik: Var olan dizi icerisindeki elemanlarla etkilesime girip, her elemanin sonucunu ayri bir diziye tek tek attik. Yani bir dizi uzerinde(sayilar) islem yapip sonucu baska bir dizide(sayilarin5kati) cikarrtik.

// some()
    /*
    Bir array icerisinde belirtilen kosullara uygun bir eleman varsa, sonucumuz true donecektir. Eger yoksa da false degeri donecektir. 
    */
let numbers = [4,5,6]

    // sonucu gorebilmek icin ciktiyi "sonuc" adli degiskende tutalim.
let sonuc1 = numbers.some(function(number){
    return number > 5
})

console.log("some: ", sonuc1); // Dizi icerisinde 5'ten buyuk bir eleman bulundugu icin ciktida "true" gormeyi bekleriz.

    // fonksiyonu degiskene atinca yapacagimiz islemin siniri yoktur. Basit bir ornek:
if(sonuc1 == true){
    console.log("some: bu bir true");
}else{
    console.log("some: bu bir false");
}

// every()
    /**
     * every metodu ile belirtilen bir kosulun dizideki tum elemanlara uyup uymadigini kontrol ederiz.
     * some metodunda oldugu gibi, Boolean yani true veya false olarak doner.
     * True donebilmesi icin dizideki TUM(!) elemanlarin fonksiyondaki kosula uymasi gerekir.
     */

let rakamlar = [6,7,8]

let sonuc = rakamlar.every(function(rakam){
    return rakam > 3;
})

console.log("every: ", sonuc); // 6,7 ve 8, 3 sayisindan buyuk oldugu icin true doner

let rakamlar2 = [1,2,4]

let sonuc2 = rakamlar2.every(function(rakam2){
    return rakam2 > 3
})

console.log("every: ", sonuc2); // 4 sayisi 3'den buyuk ancak 1 ve 2 buyuk degildir. Bu yuzden false doner.

// filter()

    /**
     * filter metodu bir dizi icerisindeki belirli bir kosulu saglayan elemanlar ile yeni bir dizi olusturmamizi saglar. Dolayisiyla dizi elemanlarini filtrelememize yariyor.
     * Yeni olusacak bir diziyi bir degiskende sakliyoruz.
     * Orijinal dizi bozulmuyor.
     */

let myNumbers = [1,2,3,4,5]

let filterNumbers = myNumbers.filter(function(myNumber){
    return myNumber > 3
})

console.log("filter: ", filterNumbers); // Kosulumuza uyan sayilari ayri bir dizide cikardi.
console.log("filter: ", myNumbers); // Orijinal dizi bozulmadi.


    // Olurda map() fonksiyonu ile karistirirsak; Ayni islemleri map() fonksiyonunda deneyelim:

let testMap = [1,2,3,4,5]

let ciktiMap = testMap.map(function(girdiMap){
    return girdiMap > 3
})

console.log("testMap: ",ciktiMap); // Bu sefer ne yapti? her bir rakami tek tek deneyerek 3'ten buyuk mu oldugunu sorgulayip ayri bir diziye atti. Bir dongu gibi calisti.

console.log("testMap: ",testMap); // Orijinal dizimiz bozulmadi.

// find()

    /**
     * Bu metot belirtilen kosula uyum saglayan dizi elemanini bulmamizi saglar.
     * Diger metotlarin aksine find metodu, elemanin kendisini doner.
     * Kosulu saglayan birden fazla eleman varsa, buldugu ilk elemani doner.
     * Kosulu saglayan bir eleman bulamazsa undefined doner.
     */

    // degisken adi kalmadi :)
let sayilarimiz = [4,5,3,6,5,7]

let bulunacakEleman1 = sayilarimiz.find(function(bul){
    return bul === 5
})

console.log("find: ", bulunacakEleman1); // ilk eleman olarak 5i doner.

let bulunacakEleman2 = sayilarimiz.find(function(bul){
    return bul > 5
})

console.log("find: ", bulunacakEleman2); //5'den buyuk olan sayiyi doner. Dikkat! 5'ten sonra gelen ilk buyuk sayiyi verir.

let bulunacakEleman3 = sayilarimiz.find(function(bul){
    return bul < 3
})

console.log("find: ", bulunacakEleman3); // Dizi icerisinde 3'ten kucuk deger olmadigi icin undefined gormeyi bekleriz.

let bulunacakEleman4 = sayilarimiz.find(function(bul){
    return bul < 6
})

console.log("find: ", bulunacakEleman4); // Sonucumuz 4. Soyle dusunelim: dizide sira ile ilerleyerek cozumu buluyoruz ve kosulumuzu ilk saglayan bizim sonucumuzdur. Ilk sirada 4 var, 6'dan kucuk ve kosulumuz saglandi. Dongu bitmistir, sonuc 4.


// sort()
    /**
     * Bu metot, dizi icerisindeki elemanlari siralamaya yarar.
     * Orijinal dizi siralanmis sekilde doner. Yani dizi mutasyona ugrar, degisir.
     * Eger parametre olarak bir fonksiyon verilmezse, dizi elemanlari stringe cevrilir ve UTF-16 degerlerine gore siralanir.
     * Artan veya azalan olarak siralamak icin farkli bir yol izlenmelidir.
     */

let weNumbers = [3,5,2,10,4]

weNumbers.sort()
console.log("sort: ", weNumbers); // sayilarin string halleri UTF-16 degerlerine gore siralandiklari icin, sonucumuzuz: [10, 2, 3, 4, 5]olur.

let weNumbers2 = [3,5,2,10,4]

let sonuc5 = weNumbers2.sort(function(a,b){
    return b-a
})

console.log("sort: ", sonuc5); // Cikti olarak [10, 5, 4, 3, 2] aliriz.

    // harfleri bu sekilde siralayabiliriz.
let harf = ["d","a","c","b","e"]
console.log("sort: ", harf.sort()); // ['a', 'b', 'c', 'd', 'e']

    // kelimeleri bu sekilde siralayabiliriz.
let kelime = ["diyarbakir", "ankara", "cizre", "bursa", "edirne", "datca"]
console.log("sort: ", kelime.sort()); // ['ankara', 'bursa', 'cizre', 'datca', 'diyarbakir', 'edirne']

// reduce()

    /**
     * Bu metot dizimizi yalnizca bir degere indirger.
     * Parantez icerisine parametre olarak bir fonksiyon ve accumulator'un(toplayicinin) baslangiz degeri girilir.
     * Bu metot orijinal diziyi degistirmez.(Mutate etmez)
     */

let sayilarReduce = [10,20,30]

function indirgeyici (akumulator, sayi){
    return akumulator + sayi
}

    //Bu fonksiyonu ve toplamaya 0'dan baslayacagimizi belirten 0 sayisini metodumuza parametre olarak girelim ve sonucu bir degiskende tutalim:

let sonuc1Reduce = sayilarReduce.reduce(indirgeyici,0)

console.log("reduce: ", sonuc1Reduce); //0 + 10 + 20 + 30 = 60 olacagindan cikti olarak 60 bekleriz.

    // Eger akumulatorumuzu 0 yerine 5'den baslatsaydik cikabilecek sonucu gorelim:

let sonuc2Reduce = sayilarReduce.reduce(indirgeyici, 5)

console.log("reduce: ", sonuc2Reduce); // 5 + 10 + 20 + 30 = 65 olacagindan cikti olarak 65 bekleriz.