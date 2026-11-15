
const picArray = [
    {
        title: 'First picture',
        filename: 'img/pic2.jpg',
        caption: 'First picture caption',
        description: 'This is the first picture.'
    },
    {
        title: 'Second picture',
        filename: 'img/pic3.jpg',
        caption: 'Second picture caption',
        description: 'This is the second picture.'
    },
    {
        title: 'Third picture',
        filename: 'img/pic4.jpg',
        caption: 'Third picture caption',
        description: 'This is the third picture.'
    }
];

const target = document.querySelector('#target');

for (const pic of picArray) {
    const article = document.createElement('article');

    const heading = document.createElement('h2');
    heading.textContent = pic.title;

    const figure = document.createElement('figure');

    const image = document.createElement('img');
    image.src = pic.filename;
    image.alt = pic.title;

    const caption = document.createElement('figcaption');
    caption.textContent = pic.caption;

    const description = document.createElement('p');
    description.textContent = pic.description;

    figure.appendChild(image);
    figure.appendChild(caption);

    article.appendChild(heading);
    article.appendChild(figure);
    article.appendChild(description);

    target.appendChild(article);
}
