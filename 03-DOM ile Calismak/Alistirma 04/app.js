
function insert_Row(){
    let table = document.querySelector("#sampleTable")

    let newTr = document.createElement("tr")
    let newTd = document.createElement("td")
    let newTd2 = document.createElement("td")
    
    let col1 = prompt("Birinci sütun için bir değer giriniz")
    let col2 = prompt("İkinci sütun için bir değer giriniz")

    newTd.textContent = col1
    newTd2.textContent = col2
    
    table.append(newTr) // table'in icine bir tr attik
    
    newTr.append(newTd) // td' nin icine td attik
    newTr.append(newTd2)

     // İkinci Yol

        // var table=document.getElementById('sampleTable').insertRow(0);
    

        // let cell1 = table.insertCell(0)
        // let cell2 = table.insertCell(1)

        // cell1.innerHTML = "test1"
        // cell2.innerHTML = "test2"
}