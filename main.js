var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


var menu = document.getElementById("sidemenu");

function openmenu(){
    menu.style.right= "0";
}
function closemenu(){
    menu.style.right= "-200px";
}



//Animation
const words = ["Coder","Developer","Student"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    let textElement = document.getElementById("animated-text");
    let currentWord = words[wordIndex];

    if (!isDeleting && charIndex <= currentWord.length) {
        textElement.textContent = currentWord.substring(0, charIndex);
        charIndex++;
    } else if (isDeleting && charIndex >= 0) {
        textElement.textContent = currentWord.substring(0, charIndex);
        charIndex--;
    }

    if (charIndex === currentWord.length && !isDeleting) {
        isDeleting = true;
        setTimeout(typeEffect, 1000);
    } else if (charIndex === 0 && isDeleting) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeEffect, 500);
    } else {
        setTimeout(typeEffect, isDeleting ? 100 : 150);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
});


window.addEventListener("scroll", function () {
    let navbar = document.querySelector("nav");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});




// CONTACT US RESPONSES (USING GOOGLE SHEETS)
const scriptURL = 'https://script.google.com/macros/s/AKfycbxKmjIw5dXg8VwLxJ2v-NbdHZ5rRA_0Y9Zi6VlhbeQrfjmTrXJ_OxkWoTPzDYlNzwDFNQ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message Sent Successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})