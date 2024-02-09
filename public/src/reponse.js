fetch('./data/data.json')
.then(r => r.json())
// .then(body => console.log(body['nom']))
.then(body => afficheNom(body['nom']))


function afficheNom(response){
    const para = document.querySelector('#nom')
    console.log(para)
    para.textContent = response
}

fetch('./data/path.json')
.then(r => r.json())
.then(path => redirectToRoute(path, 'info'));

function redirectToRoute(path, nomRoute){
    for( const property in path){
        console.log(property + ' ' + path[property])

        if(property === nomRoute){
            window.location = path[property]
        }
    }
}



// fetch('./data/data.json', {
//     method: 'GET'
// })
// .then(response => response.json())
// .then(response => console.log(JSON.stringify(response)))