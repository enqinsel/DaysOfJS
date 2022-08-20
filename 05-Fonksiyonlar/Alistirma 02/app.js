// Bir dizi veya film listesi parametre alan bir arrow fonksiyonumuz olsun, bunların her birini 1'den başlayarak alt alta yazalım.

const seriesList  = (list) => {

 list.forEach((series,index) => {
    console.log(`${index + 1} ${series}`);   
 });
}

seriesList(["Prison Break" , "Breaking Bad" , "Lost"])