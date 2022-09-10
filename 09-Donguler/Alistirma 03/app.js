// Maaş zam hesaplama; 
// İşçilerin aldıkları maaşlara ait bir dizi olsun. Maaşı 3000 TL'nin üzerinde olanlarınkine %15, altında olanlarınkine de %25 zam yapan bir array map oluşturalım.

let salary = [ 1100, 13000, 2500, 4500, 1500, 25000, 2000 ];

let newSalary = salary.map(number => {
    if (number > 3000){
        return number += ((number*15)/100)
    }else{
        return number += ((number*25)/100)
    }
})

console.log(newSalary);
