const url = 'https://coronavirus-19-api.herokuapp.com/all';
async function api() {
    const response = await fetch(url);
    const data = await response.json();
    const cases = data.cases
    const deaths = data.deaths
    const recovered = data.recovered
    console.log(data);
    document.getElementById('cases').textContent = cases
    document.getElementById('deaths').textContent = deaths
    document.getElementById('recovered').textContent = recovered
};
api(); 

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }