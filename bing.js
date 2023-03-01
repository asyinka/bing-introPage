let shareIcon = document.querySelector("#shareIcon__ctrl");
let shareCard = document.querySelector('.shareCard');
let copyLink = document.querySelector('#copyLink');
let copyMsg = document.querySelector('#shareCard__msg');

function displayShareCard() {
    shareCard.style.display = 'block';
}
function offdisplayShareCard() {
    shareCard.style.display = 'none';
}

copyLink.addEventListener('click', () => {
    let para = document.createElement('p');
    para.setAttribute('id', 'shareCard__msg');
    let textNode = document.createTextNode('Link copied to clipboard');
    para.appendChild(textNode);

    copyMsg.innerHTML = para;
    shareCard__msg.style.display = 'none';
    displayShareCard();
})

