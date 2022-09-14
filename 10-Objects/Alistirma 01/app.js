// kompleks obje ornegi

let state = {
    users: [
        { name: "Brock", age: 25, favoriteColor: "red" },
        { name: "Jessie", age: 17, favoriteColor: "yellow" },
        { name: "James", age: 41, favoriteColor: "blue" },
        { name: "Winnie", age: 18, favoriteColor: "purple" }
    ],
    settings: {
        version: "1.0.5",
        DNS: "105.xx.xx.xx",
        website: "https://www.example.com/"
    },
    banList: ["Ash", "Angelica", "Tom", "Jerry"]
}


// "banList" propertysinde 3. elemana ulaşmak istersek şu şekilde ulaşabiliriz:

console.log(state.banList[2]); //Tom

// "settings"lerdeki "website" değerine ulaşmak istersek şu şekilde ulaşabiliriz:

console.log(state.settings.website); //https://www.example.com/

// "user"larda James'in en sevdiği rengi öğrenmek istersek, o veriye şu şekilde ulaşabiliriz:

console.log(state.users[2].favoriteColor); //blue

// json dosyasindaki objeye ulasma
import myJson from './test.json' assert {type: 'json'}; // dosyayi import ettik

console.log(myJson);
console.log(myJson.name);