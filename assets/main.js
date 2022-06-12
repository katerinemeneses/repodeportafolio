
var typed = new Typed('.typed', {
	strings: [
		'<b class="desccription">DISEÑO <span class="description-color"> WEB</span></b>',
		'<b class="desccription"><span class="description-color">FRONT-END: </span> HTML, JavaScript, REACT, CSS, SASS</b>',
		'<b class="desccription"><span class="description-color">METODOLOGIAS: </span> BEM, SCRUM</b>',
		'<b class="desccription">DESARROLLADOR WEB: <span class="description-name"> CRISTIAN MORENO</span></b>',
	],
	// stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 100, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 30, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: false, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});

let elementosOcultos = document.querySelectorAll('.oculto');


function mostrarElementos() {
	let scrollTop = document.documentElement.scrollTop;
	for (let i = 0; i < elementosOcultos.length; i++) {
		let alturaOculto = elementosOcultos[i].offsetTop;
		if (alturaOculto - 300 < scrollTop) {
			elementosOcultos[i].classList.add('mostrar')
			elementosOcultos[i].classList.add('abajo')
		}

	}
}

window.addEventListener('scroll', mostrarElementos);


let buttonMenu = document.getElementById('menu-header');
let menu = document.querySelector('.header-list');

buttonMenu.addEventListener('click', function(){
	menu.classList.toggle('visible')
});


function ocultarMenu(e) {
	menu.classList.remove('visible')
}

//SLIDER PROYECTOS
const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider-section");
let sliderSectionLast = sliderSection[sliderSection.length -1 ];

const btnIzquierdo = document.querySelector("#btn-izquierdo");
const btnDerecho = document.querySelector("#btn-derecho");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next() {
	let sliderSectionFirst = document.querySelectorAll(".slider-section")[0];
	slider.style.marginLeft = "-200%";
	slider.style.transition = "all 0.5s";
	setTimeout(function() {
		slider.style.transition = "none";
		slider.insertAdjacentElement('beforeend', sliderSectionFirst);
		slider.style.marginLeft = "-100%"
	}, 500);
}

function Prev() {
	let sliderSection = document.querySelectorAll(".slider-section");
	let sliderSectionLast = sliderSection[sliderSection.length - 1];
	slider.style.marginLeft = "0";
	slider.style.transition = "all 0.5s";
	setTimeout(function() {
		slider.style.transition = "none";
		slider.insertAdjacentElement('afterbegin', sliderSectionLast);
		slider.style.marginLeft = "-100%"
	}, 500);
}

btnDerecho.addEventListener('click', function() {
	Next();
});

btnIzquierdo.addEventListener('click', function() {
	Prev();
})

setInterval(function() {
	Next();
}, 5000);


//	FORMULARIO

const $form = document.querySelector('#contacto');
const agradecimiento = document.querySelector('#agradecimiento')

$form.addEventListener('submit', handleSubmit);
//nombre, email, enviar

//API para enviar el formulario
async function handleSubmit(event) {
	event.preventDefault();
	const form = new FormData(this);
	const response = await fetch(this.action, {
		method: this.method,
		body: form,
		headers: {
			'Accept' : 'application/json'
		}
	})
	if(response.ok){
		this.reset
		agradecimiento.classList.add('animacion-contact')
	}
}

