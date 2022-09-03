// Uygun dizi metotlarini kullanarak, dizi icin asagidaki sartlari saglayan myFunction fonksiyonunu yazin.

// Elemanlarin arasinda 5'ten buyuk olan olan bir eleman varsa konsola "Besten buyuk bir eleman mevcut." yoksa "5'ten buyuk eleman mevcut degil." yazdir.

let dizi = [3, 6, 9, 14, 16];

function myFunction(dizi) {
    let sonuc = dizi.some(function (sayi) {
        return sayi > 5
    })

    if (sonuc == true) {
        console.log("Besten buyuk bir eleman mevcut.");
    } else {
        console.log("5'ten buyuk eleman mevcut degil.");
    }
}

myFunction(dizi);