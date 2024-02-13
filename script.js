const button = document.getElementById('send-hug-btn');
const message = document.getElementById('hug-message');

function sendHug() {
    message.textContent = 'Sending a virtual hug! ';
    setTimeout(() => {
        message.textContent = '';
    }, 2000);
    document.getElementById('send-hug-btn').classList.add('animation');
    setTimeout(() => {
        document.getElementById('send-hug-btn').classList.remove('animation');
    }, 1000);
}

function showRandomQuote() {
    const quotes = [
        '"A hug is like a boomerang - the more you give, the more you get back." - Unknown',
        '"Hugs are the universal language of care and comfort." - Kathleen Keating',
        '"Hold fast to dreams, for if dreams die, life is like a broken-winged bird that cannot fly." - Langston Hughes',
        '"There is magic in a hug, and the magic is in the warmth of connection." - Virginia Satir',
        '"A single hug can dispel a multitude of anxieties." - Ogden Nash',
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const quoteDiv = document.createElement('div');
    quoteDiv.innerHTML = `<i>"${randomQuote}"</i>`;
    document.querySelector('.message').appendChild(quoteDiv);
}

button.addEventListener('click', () => {
    sendHug();
    showRandomQuote();
});

showRandomQuote();