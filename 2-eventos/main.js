

let inputValue = ''

const onButtonClicked = () => {
  alert(`El input tiene como valor: ${inputValue}`);
};



const onInputChanged = (event) => {
  inputValue = event.target.value;
  const inputTextH3 = document.querySelector('#input-text')
  inputTextH3.innerText = inputValue;
};

const buttonElement = document.querySelector('button')
buttonElement.addEventListener('click', onButtonClicked)

const inputElement = document.querySelector('input[type="text"]')
inputElement.addEventListener('input', onInputChanged);