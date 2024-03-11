

console.log(`Soy el JS`);

const title = document.querySelector(`h1`);
console.log(title);

title.innerText = `Aprendemos selectores con JS`;

// const secondTitle = document.querySelector(`h2:last-of-type`);
// console.log(`Second Title`, secondTitle);

// const studyTitle = document.getElementById(`study`);
// console.log(`studyTitle`, studyTitle);

const studyTitle = document.querySelector(`#study`);
console.log(`studyTitle`, studyTitle);


// const technologies = document.getElementsByClassName(`technology`);
const technologies = document.querySelectorAll(`.technology`);
console.log(`Technologies`, technologies);

for (let i = 0; i < technologies.length; i++) {
  const technology = technologies[i];
  const prevText = technology.innerText;
  technology.innerText = `${i + 1} - ${prevText}`;
}

const THEPOWER_URL = 'https://www.thepowermba.com/es/'
const titleLink = document.querySelector('h2.title-link > a');
console.log('Title Link', titleLink);
titleLink.href = THEPOWER_URL;