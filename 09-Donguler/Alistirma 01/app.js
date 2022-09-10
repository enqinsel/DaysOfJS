/**
 * Çalışmamızda yapmamızı istediğim şey belirli araba markalarını bir dizi oluşturarak konsola yazdırmak bunun için yapmamız gerekenler çok basit öncelikle bir Array oluşturmalı ve arabalarımızı bu diziye eklemeliyiz.
Ardından bir while döngüsü oluşturuyoruz ve bu döngüye araba elemanlarımızı ekliyoruz. (döngüyü sınırlandırmayı ve parametre vermeyi unutmuyoruz.)
 */


let cars = ["Mercedes", "BMW", "Volvo", "Audi","Fiat"]

let i = 0
while(cars[i]){
    console.log(cars[i]);
    i++
}