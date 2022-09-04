// Uygun dizi metodunu kullanarak verilen dizinin elemanlarinin carpiminin sonucunu (24) veren bir fonksiyon yaziniz.

let dizi = [2, 3, 4];


function myFunction(dizi) {

    function indirgeyici(akumulator, sayi) {
        return akumulator * sayi
    }

    let sonuc = dizi.reduce(indirgeyici, 1)

    console.log(sonuc);
}

myFunction(dizi)