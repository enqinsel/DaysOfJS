/* Object içine metot ekleme */

// Not: Calistirmak istediginiz Js dosyasini index.html sayfasına gidip yorum satirindan cikariniz


let user1 = {
    firstName: "Engin",
    lastName: "İnsel",
    score: [1,2,3,4],
    isActive: true,
    shortName: function() {
        return `${this.firstName[0].toUpperCase()}. ${this.lastName}`
    }
}
console.log(user1.shortName());


var person = {
	name: 'Engin',
	surname: 'İnsel',
	age: 25,
	city: 'Bursa',
	introduce: function () {
		console.log(`My name is ${this.name} ${this.surname}, I'm ${this.age} yo.`);
	},
};

person.myCity = function () {
	console.log(`I live in ${this.city}`);
};


person.introduce()
person.myCity();
console.log(person);


const fonksiyonAdi = () => {console.log("Merhaba Kodluyoruz")}

console.log(fonksiyonAdi.name);
