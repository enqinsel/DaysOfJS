// Uygun dizi metotlarini kullanarak verilen dizinin elemanlari icinde 10'dan buyuk olan elemanlarin 5'er katindan olusan yeni bir dizi olusturun. (sonuc [55, 75, 85] olmali.)

let dizi = [2,5,8,11,15,17];

// 10'dan buyuk elemanlari filtrelemek icin filter metodunu kullanacagiz:

let sonucFilter = dizi.filter(function(sayi){
    return sayi > 10
})

console.log("10'dan buyuk olanlar: ", sonucFilter);

let sonuc =  sonucFilter.map(function(sayi){
    return sayi *5
})

console.log("Sonuc: ", sonuc);