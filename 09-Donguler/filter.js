/* Array filter kullanimi */

// Not: Calistirmak istediginiz Js dosyasini index.html sayfasina gidip yorum satirindan cikariniz.

// 5 harften fazla olanlar(6)
const PRODUCTS = ["Mic", "Cable", "Speaker", "Desktop PC", "Server", "Mouse", "Keyboard"]

const NEW_PRODUCTS = PRODUCTS.filter(item => (item.length > 5))
console.log("6 harfli products: ", NEW_PRODUCTS);


// aktif kullanicilar?

const USERS = [
    { fullName: "Ayse Sumer", isActive: false },
    { fullName: "Engin İnsel", isActive: true },
    { fullName: "Asya Basar", isActive: true },
    { fullName: "Aksel Durmaz", isActive: false }
]


// const ACTIVE_USERS = USERS.filter(user => (user.isActive === true))
const ACTIVE_USERS = USERS.filter(user => (user.isActive)) // yukaridaki ile ayni, default true'dir

console.log("user active: ", ACTIVE_USERS);