const baseURL = 'https://api.openbrewerydb.org/breweries';
const byDistance = "?by_dist=";
const byCity = "?by_city=";
const byState = "?by_state=";

const resultsBody = document.querySelector('.resultTable');
let favorites = []


//by distance function
function searchByDistance(){
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(queryPosition)
    } else {
        alert('Geolocation is not supported by your browser')
    }
}
function queryPosition(position){
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let query = `${byDistance}${lat},${lon}`
    getBreweries(query);
}

//by city function
function searchByCity(){
    let cityName = document.getElementById('byCity').value;
    let query = byCity + cityName;
    getBreweries(query);
}
//by state function
function searchByState(){
    let stateName = document.getElementById('byState').value;
    let query = byState + stateName;
    getBreweries(query);
}

const getBreweries = async (query) => {
    let response = await fetch(`https://api.openbrewerydb.org/breweries${query}`);
    let data = await response.json();
    displayResults(data);
}

function displayResults(data){
    console.log(data);
    while (resultsBody.firstChild){
        resultsBody.removeChild(resultsBody.firstChild);
    }
    data.map(brewery => {
        //declare variables for API values
        let name = brewery.name;
        let street = brewery.street;
        let city = brewery.city;
        let state = brewery.state;
        let website = brewery.website_url;
        //create HTML elements and give them values
        let tableRow = document.createElement('tr');
        let placeTitle = document.createElement('td');
        placeTitle.innerText = name;
        let address = document.createElement('td');
        address.innerText = `${street} - ${city}, ${state}`;
        let visit = document.createElement('td');
        let linkButton = document.createElement('button');
        linkButton.setAttribute('class', 'btn btn-dark');
        linkButton.innerHTML = `<a href=${website} target="_blank">Visit</a>`;
        visit.appendChild(linkButton);
        let save = document.createElement('td');
        let saveButton = document.createElement('button');
        saveButton.setAttribute('class', 'btn btn-dark');
        saveButton.setAttribute('onclick', 'saveToFavorites(`${brewery.name}, ${brewery.city}, ${brewery.state}`)')
        saveButton.innerHTML = '&#127866';
        save.appendChild(saveButton);
        //append those new HTML elements to the DOM
        tableRow.appendChild(placeTitle);
        tableRow.appendChild(address);
        tableRow.appendChild(visit);
        tableRow.appendChild(save);
        resultsBody.appendChild(tableRow);
    })
}

function saveToFavorites(breweryToSave){
    favorites.push(breweryToSave)
    console.log(favorites)
}