let shareIcon = document.querySelector("#shareIcon__ctrl");
let shareCard = document.querySelector('.shareCard');
let copyLink = document.querySelector('#copyLink');
let copyMsg = document.querySelector('#shareCard__msg');
let closeIcon = document.querySelector("#close__icon");
let bingprevSec = document.querySelector('.bing__prevSection');

function displayShareCard() {
        shareCard.style.display = 'block';
}
function offdisplayShareCard() {
    shareCard.style.display = 'none';
    copyMsg.innerText = 'Introducing the new bing';
    copyMsg.style.color = 'black';
}

copyLink.addEventListener('click', () => {
        copyMsg.innerText = 'Link copied to clipboard';
        copyMsg.style.color = 'green';
    // displayShareCard();
})

// closeIcon.onclick() = () => {
//     bingprevsec.style.display = 'none';
// }
closeIcon.addEventListener('click', closeBingPrev);

function closeBingPrev(){
    bingprevSec.style.display = 'none';
}

