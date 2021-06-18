const baseURL = 'https://rws-cards-api.herokuapp.com/api/v1/cards/random';
const howManyQuery = '?n='
let url;

function cosmicCardFetch(url){
    const quantity = document.querySelector('input').value;
    url = baseURL + howManyQuery + quantity;
    console.log(url)

    fetch(url)
        .then(function(result){
            return result.json()
        }) .then(function(json) {
            console.log(json)
        })
}