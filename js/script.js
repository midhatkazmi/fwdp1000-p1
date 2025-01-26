const navMenu = document.getElementById('Nav');
const navButton = document.getElementById('Nav-Btn');

navButton.addEventListener('click', function() {
    navMenu.classList.toggle('display');
});

const myBody = document.getElementById('Body');
const themeButton = document.getElementById('Theme-Btn');

themeButton.addEventListener('click', function() {
    myBody.classList.toggle('dark');
});

const emailAddress = document.getElementById('Email-Address');
const copyButton = document.getElementById('Copy-Btn');

copyButton.addEventListener('click', function() {
    navigator.clipboard.writeText(emailAddress.innerHTML);
});