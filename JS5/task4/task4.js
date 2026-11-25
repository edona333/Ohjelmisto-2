const form = document.querySelector('form');
const input = document.querySelector('#query');
const results = document.querySelector('#results');

form.addEventListener('submit', async function(event) {
    event.preventDefault();

    const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(input.value)}`
    );

    const data = await response.json();

    results.innerHTML = '';

    for (const tvShow of data) {
        const article = document.createElement('article');

        article.innerHTML = `
            <h2>${tvShow.show.name}</h2>
            <a href="${tvShow.show.url}" target="_blank" rel="noopener noreferrer">
                More information
            </a>
            <img src="${tvShow.show.image?.medium || 'https://placehold.co/210x295?text=Not%20Found'}"
                 alt="${tvShow.show.name}">
            <div>${tvShow.show.summary || ''}</div>
        `;

        results.appendChild(article);
    }
});