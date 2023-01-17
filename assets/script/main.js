let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

//  button 1
let frontend = document.querySelector('a:nth-of-type(1)')
let section = document.querySelector('section')

frontend.addEventListener("click",reshape)
function reshape(){
  section.classList.toggle("reshape");
};

// button 2
let design = document.querySelector('a:nth-of-type(2)')

design.addEventListener('click', foutHandler)
design.addEventListener('animationend', foutHandler)

function foutHandler() {
  design.classList.toggle('fout')
}

// button 4
let development = document.querySelector('a:nth-of-type(4)')

development.addEventListener("click", fat)
function fat(){
  development.classList.toggle("fat");
};

//  button 5
let sprint = document.querySelector('a:nth-of-type(5)')

sprint.addEventListener("click", floot_up);
function floot_up(){
  sprint.classList.toggle("floot-up");
};

// button 6
let fix = document.querySelector('a:nth-of-type(6)')

fix.addEventListener('click', roteteHandler)
fix.addEventListener('animationend', roteteHandler)

function roteteHandler() {
  fix.classList.toggle('rotete')
}

// button 7
let the = document.querySelector('a:nth-of-type(7)')

the.addEventListener('click', counterHandler)
the.addEventListener('animationend', counterHandler)

function counterHandler() {
  the.classList.toggle('counter')
}

//  button 8
let Flow = document.querySelector('a:nth-of-type(8)')
let background = document.querySelector('.background')

Flow.addEventListener("click", Fill);
function Fill(){
  background.classList.toggle("fill");
}

//  button 9
let user = document.querySelector('a:nth-of-type(9)')
let audio = new Audio('assets/buzz.mp3');

user.addEventListener('click', shockHandler)
user.addEventListener('animationend', shockHandler)

function shockHandler() {
  user.classList.toggle('shock')
  audio.play();
}

// button 10
let interface = document.querySelector('a:nth-of-type(10)')

interface.addEventListener('click', color_wheelHandler)
interface.addEventListener('animationend', color_wheelHandler)

function color_wheelHandler() {
  interface.classList.toggle('color-wheel')
}

// button 3 de alles button
let alles_button = document.querySelector('a:nth-of-type(3)')
alles_button.addEventListener('click', triggerAll)
function triggerAll(){
  color_wheelHandler();
  counterHandler();
  shockHandler();
  Fill();
  counterHandler();
  roteteHandler();
  floot_up();
  fat();
}

