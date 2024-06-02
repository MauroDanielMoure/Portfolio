document.querySelector(".bars__menu").addEventListener("click",animateBars);

const line1__bars = document.querySelector(".line1__bars-menu");
const line2__bars = document.querySelector(".line2__bars-menu");
const line3__bars = document.querySelector(".line3__bars-menu");
const navBar = document.querySelector(".nav-bar");
const lamp = document.querySelector('.luz');
const body = document.querySelector('body');
const preferedColor = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';





function animateBars(){
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");
    navBar.classList.toggle("active");
}

window.addEventListener('load', () => {
    const progress = document.getElementById('progress')
    requestAnimationFrame(update);
});

function update(){
    progress.style.width = `${((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100)}%`;
    requestAnimationFrame(update);
}


const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

lamp.addEventListener('click', ()=>{
    let switchTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
    setTheme(switchTheme);
});

setTheme(localStorage.getItem('theme') || preferedColor);

lamp.onclick = function(){
    body.classList.toggle('on')    
};

if (localStorage.getItem('theme') == 'dark'){
    body.removeclassList('on');    
}
else {
    body.classList.add('on')
};


