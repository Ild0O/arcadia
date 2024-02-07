const createTitle = document.createElement('h1');
const container = document.querySelector('.container');
const containerNode = container.append(createTitle);
const title = document.querySelector('h1');

const imgPath = './public/img/gate.png';

const gateImg = document.querySelector('img');
gateImg.src = imgPath;


title.textContent = "Where she is ?"