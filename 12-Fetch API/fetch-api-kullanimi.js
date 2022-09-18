/* Fetch API kullanimi */

// Not: Calistirmak istediginiz Js dosyasini index.html sayfasina gidip yorum satirindan cikariniz.


// JSON dosyasindan veri çekmek

fetch("data/data.json") 
.then(response => response.json()) // ?
.then(data => {
     console.log(data); 
     console.log(data.userName);
     console.log(data.IDs);
    }
)


// API uzerinden veri çekmek

let url = "https://jsonplaceholder.typicode.com/users"

fetch(url)
.then(response => response.json())
.then(data => {
    //console.log(data);
    data.forEach(item => {
        console.log(item.name); // isimlerine ulastik.
    })
})
