

const technologies = [
  'JavaScript',
  'HTML',
  'CSS',
  'React',
  'Vite',
  'TypeScript',
];


const setupTechnologiesList = () => {
  const listElement = document.createElement('ul')
  listElement.className = 'technologies';


  for (let i = 0; i < technologies.length; i++) {
    const technology = technologies[i];

    const liElement = document.createElement('li');
    const buttonElement = document.createElement('button');
    buttonElement.innerText = 'Eliminar';
    buttonElement.className = 'delete-button';

    liElement.innerText = technology;
    liElement.append(buttonElement);
    listElement.append(liElement);
  }
  document.body.append(listElement);
};

const handleDelete = (event) => {
  const liElement = event.target.parentElement;
  console.log(liElement);

}

const addDeleteButtonListeners = () => {
  const deleteButtons = document.querySelectorAll('.delete-button')

  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener('click', handleDelete)
  }
}

setupTechnologiesList();
addDeleteButtonListeners();