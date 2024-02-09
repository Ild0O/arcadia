/*
function createForm(){
    const form = document.createElement('form')
    return form
}

function createInput(type, placeholder, value){
    const input = document.createElement('input')
    input.type = type;
    if(placeholder != null) {input.placeholder = placeholder};
    if(value != null){input.value = value}
    return input
}

// ouvre le formulaire
function openForm(){
    const container = document.querySelector('.container')
    container.append(createForm())
    
    const form = document.querySelector('form')
    form.append(
        createInput("text", "Entrer votre Id", null),
        createInput("password", "Entrer votre mot-de-passe", null),
        createInput("submit", null, "Valider")
    )

    async function submitData(){
        let button = document.querySelector('input[type=submit]')
        console.log(button)
        button.addEventListener('click', function(){
            let response = fetch('./public/src/response.js')
    
            let result = response.json();
        })
        
        submitData();
    }
}

function openPentacle(){
    const selectTitle = document.querySelector('h1')
    selectTitle.addEventListener('click', openForm);
}

openPentacle();
*/









// recevoir les data.
// vérifier les data.
// rediriger l'utilisateur.
