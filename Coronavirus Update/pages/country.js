var url = " https://coronavirus-19-api.herokuapp.com/countries"
async function api() {
    var response = await fetch(url);
    var data = await response.json()
    append(data)
    console.log(data)
};
api();
//loop
function append(data) {
    var maincontainer = document.getElementById("mydata");
    for (var i = 0; i < data.length; i++) {
        var li = document.createElement("li");
        var con = data[i].country;
        li.innerHTML = con + '<br>' + 'Cases:&nbsp' + data[i].cases + '&nbsp|&nbsp' +' Active: ' + data[i].active + '<br>' + ' Deaths: ' + data[i].deaths  + '&nbsp&nbsp&nbsp&nbsp|&nbsp' +' Recovered: ' + data[i].recovered; 
        maincontainer.appendChild(li)
        li.className += "list"
        console.log(con)
    }
};
//search bar
function search_item(){
    let input = document.getElementById('searchbar').value;
    input = input.toLowerCase();
    let x = document.getElementsByClassName('list');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else{
            x[i].style.display="list-item"
        }
    }
}

/*function myFunction(x) {
    x.style.border-color = "yellow";
  };*/