let shareIcon = document.querySelector("#shareIcon__ctrl");
let shareCard = document.querySelector('.shareCard');
let copyLink = document.querySelector('#copyLink');
let copyMsg = document.querySelector('#shareCard__msg');
let closeIcon = document.querySelector("#close__icon");
let bingprevSec = document.querySelector('.bing__prevSection');
let courseTag = document.querySelector('#course-tag');
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

closeIcon.addEventListener('click', closeBingPrev);

function closeBingPrev(){
    bingprevSec.style.display = 'none';
}

function writeInnerText() {
    courseTag.innerHTML = 'help me creat a three course meal';
}

