const conteiner = document.querySelector('.conteiner');
const button = conteiner.querySelector('.button');
const collapse = conteiner.querySelector('.collapse');

button.addEventListener('click', (e) => {
	e.preventDefault();

	collapse.classList.toggle('show');
});
