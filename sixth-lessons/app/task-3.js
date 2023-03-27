const body = document.querySelector('body');

const main = document.createElement('main');
main.setAttribute('class', 'mainClass check item');

const div = document.createElement('div');
div.setAttribute('id', 'myDiv');

const p = document.createElement('p');
p.textContent = 'First paragraph';

div.appendChild(p);
main.appendChild(div);
body.appendChild(main);