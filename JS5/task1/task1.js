const form = document.querySelector('form');
const input = document.querySelector('#query');

form.addEventListener('submit', async function(event) {
    event.preventDefault();

    const searchTerm = input.value;

    const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(searchTerm)}`
    );

    const data = await response.json();

    console.log(data);
});
