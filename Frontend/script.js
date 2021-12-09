const button = document.getElementById('submit');
const jokeBox = document.getElementById('jokeBox');

const fetchUrl = () => {
    const jokeCount = document.getElementById('numberOfJokes').value;
    const category = document.getElementById('jokeCategory').value;
    const url = `http://localhost:3000/api?category=${category}&number=${jokeCount}`;
    return url;
}

const displayJokes = () => {
    var request = new XMLHttpRequest()

    request.open('GET', fetchUrl(), true)
    request.onload = function () {
    var data = JSON.parse(this.response)

    if (request.status >= 200 && request.status < 400) {
        data.forEach(joke => {
            jokeBox.innerHTML += `<img src=${joke.image} width="150" height="150"> <br> <strong> ${joke.jokeString} ${joke.jokeAnswer} </strong> <br>`;
        })
    } else {
        console.log('error jokes are broken')
    }
    }
    request.send()
    jokeBox.innerHTML = '';
}

button.addEventListener('click', displayJokes);