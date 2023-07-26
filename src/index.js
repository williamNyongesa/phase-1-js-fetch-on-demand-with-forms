const init = () => {
    const inputForm = document.querySelector('form');

    inputForm.addEventListener("submit",function(event){
        event.preventDefault();

        const input = document.querySelector('#searchByID');
        
        console.log(input.value);
        
        fetch(`http://localhost:8080/movies/${input.value}`)
        .then(response => response.json())
        .then(data => {

        const title = document.querySelector('section#movieDetails h4');
        const summary = document.querySelector('section#movieDetails p');
    
        title.innerText = data.title;
        summary.innerText = data.summary;
    });
    })
}

document.addEventListener('DOMContentLoaded', init);