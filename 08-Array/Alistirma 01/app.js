let kalemlik = new Array()

// Arrayin icinde ayri bir array actik.
kalemlik[0] = new Array("Silgi", 2, "mavi")
kalemlik[1] = new Array("Kalem", 3, "kırmızı")
kalemlik[2] = new Array("Cetvel", 1, "siyah");

// Cikti olarak [["Silgi", 2, "mavi"], ["kalem", 3, "kırmızı"], ["Cetvel", 1, "siyah"]] seklinde 3 elemanli bir dizi doner
console.log(kalemlik);

console.log(kalemlik[0][0]); // dizi icerisindeki silgiyi goruntuledik.


// Kalemlik icerisindeki silgilerin rengini goruntulemek istersek:
console.log(kalemlik[0][2]);