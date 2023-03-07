let shareIcon = document.querySelector("#shareIcon__ctrl");
let shareCard = document.querySelector('.shareCard');
let copyLink = document.querySelector('#copyLink');
let copyMsg = document.querySelector('#shareCard__msg');
let closeIcon = document.querySelector("#close__icon");
let bingprevSec = document.querySelector('.bing__prevSection');
let courseTag = document.querySelector('#course-tag');
let qtTemplates = document.querySelector('#questions-samples')
let myText = document.querySelector('#firstText');
let annivTag = document.querySelector('#anniv-tag');
let artTag = document.querySelector('#art-tag');
let fitTag = document.querySelector('.fit-tag');
let poemTag = document.querySelector('#poem-tag');
let fishTag = document.querySelector('#fishTr-tag');
let storyTag = document.querySelector('#story-tag');
let codeTag = document.querySelector('#code-tag');
let carTag = document.querySelector('#car-tag');
let quizTag = document.querySelector('#quiz-tag');
let petTag = document.querySelector('#pet-tag');
let festTag = document.querySelector('#fest-tag');
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

let firstInnerText = `<p>I need to throw a dinner party for 6 peope who are vegetarian. Can you suggest
a 3-course menu with a chocolate dessert?</p>`;
let firstBaseText = `<p>Create a 3-course menu.</p>`;
let secndInnerText = `<p>I am planning a trip for our anniversary in September. What are some places 
we can go that are within a 3 hour flight from London Heathrow?</p>`;
let scndBaseTxt = `<p>Help plan my special anniversary trip.</p>`;
let thrdinnTxt = `<p>Arts and crafts ideas, with instructions for a toddler using only cardboard boxes, plastic
                    bottles, paper and strings</p>`;
let thrdBaseTxt = `<p>What art ideas can I do with my kids?</p>`;
let fourthinnTxt = `<p>Plan me a workout for my arms and abs with no situps and no gym equipment. It should only take 30minutes</p>`;
let fourthBaseTxt = `<p>Can you get me fit?</p>`;
let fifthInnerTxt = `<p>Write a poem that rhymes for my 8-year-old Jake. He loves dog and facts about the ocean</p>`;
let fifthBaseTxt = `<p>Write a rhyming poem</p>`;
let sixInnerText = `<p>I just went fishing in River Niger in Nigeria and I would like to go fishing in the Florida keys in the Spring.
                    What would I need t do differently?</p>`;
let sixBaseTxt = `<p>Help me plan for my fishing trip</p>`;
let svthInnerTxt = `<p>Write a  story for children about a dog who lives on the moon</p>`;
let svthBaseTxt = `<p>Can you help me write a story?</p>`;
let eghtInnrTxt = `<p>Write code to find the fibanocci sequence in pyton</p>`;
let egthBaseTxt = `<p>I need some help with my coding.</p>`;
let ninthInnrTxt = `<p>What cars should I consider buyimg that are AWD, go 0-60 in less than 6secs, seat 6 or more and ave decent reviews</p>`;
let ninthBaseTxt = `<p>I need a big fast car.</p>`;
let tenthInnerTxt = `<p>Write a quiz about pop music trivia that i can play with my friends that has 5 questions</p>`;
let tenthBaseTxt = `<p>Help me create a trivia quiz.</p>`;
let elvthTxt = `<p>How do I pick the best dog breed for me? Is it best bought or adopt?</p>`;
let elvthBaseTxt = `<p>Help me find a pet.</p>`;
let twlvthTxt = `<p>I like electronic music and want to go for my first festival this year. Do you have any recommendations or tips for me?</p>`;
let twlvthBaseText = `<p>Find me a music festival.</p>`;


function writeInnerText(identif, compTxt) {
    identif.innerHTML = `<span class='hvrTxt'>${compTxt}</span>
                            <button class='hvrBtn'>Try it on Bing</button>`;
}

function revertText(identif, innTxt) {
    identif.innerHTML = `${innTxt}`;
}
