/* Switch Case */

// Not: Calistirmak istediginiz Js dosyasini index.html sayfasına gidip yorum satirindan cikariniz

// JavaScript'te if-else koşul yapısındaki koşulların arttığı durumlarda kod okunabilirliğini artırmak ve daha performanslı sayılabilecek bir yapı olan switch yapısı tercih edilebilir.


let hava = "gunesli"

switch (hava) {
    case "bulutlu":
        alert("Hava bulutlu, hafif giyin")
        break
    case "yagmurlu":
        alert("Semsiyeni yanina al")
        break
    case "gunesli":
        alert("Hava gunesli, disari cik")
        break
    case "Karlı":
        alert("Kalin giyin");
        break;
    case "Firtinali":
        alert("Bir süre disari cikma");
        break;
    default:
        alert("Bilinmeyen hava durumu: " , hava)

}