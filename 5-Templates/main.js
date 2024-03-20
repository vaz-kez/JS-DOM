
const QUOTES = [
  {
    quote: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',
    author: 'Author 1',
    year: '2022',
  },
  {
    quote: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',
    author: 'Author 2',
    year: '2024',
  },
  {
    quote: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.',
    author: 'Albert Einstein',
    year: '1950',
  },
];

const quotesList = document.querySelector('#quotes-list');

const getQuoteTemplate = (quote, author, year) => {
  return `<div class="quote-block">
<blockquote>${quote}</blockquote>
<p>${author} - ${year}</p>
</div>`;
};

const setupQuotesList = () => {


  for (let i = 0; i < QUOTES.length; i++) {
    const quoteElement = QUOTES[i];

    quotesList.innerHTML += getQuoteTemplate(
      quoteElement.quote,
      quoteElement.author,
      quoteElement.year
    );
  }
};

const handleFormSubmit = (event) => {
  event.preventDefault();
  const formElements = event.target.elements

  const newQuote = {
    author: formElements.author.value,
    quote: formElements.quote.value,
    year: formElements.year.value,
  };

  console.log(event.target.elements);
  quotesList.innerHTML += getQuoteTemplate(
    newQuote.quote,
    newQuote.author,
    newQuote.year
  );

  event.target.reset();


};

const form = document.querySelector('#quote-form')
form.addEventListener('submit', handleFormSubmit)

setupQuotesList();