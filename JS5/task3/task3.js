const form = document.querySelector('form');
const input = document.querySelector('#query');
const results = document.querySelector('#results');

form.addEventListener('submit', async function(event) {
    event.preventDefault();

    const query = input.value;

    const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`
    );

    const tvShows = await response.json();

    console.log(tvShows);

    results.innerHTML = '';

    for (const tvShow of tvShows) {
        const show = tvShow.show;

        const article = document.createElement('article');

        const name = document.createElement('h2');
        name.textContent = show.name;
        article.appendChild(name);

        const link = document.createElement('a');
        link.href = show.url;
        link.target = '_blank';
        link.textContent = 'Show details';
        article.appendChild(link);

        const image = document.createElement('img');
        image.src = show.image?.medium;
        image.alt = show.name;

        if (show.image?.medium) {
            article.appendChild(image);
        }

        const summary = document.createElement('div');
        summary.innerHTML = show.summary || '';
        article.appendChild(summary);

        results.appendChild(article);
    }
});
