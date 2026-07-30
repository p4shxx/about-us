const fechaInicio = new Date(2026,2,30);

function actualizarContador(){
    const ahora = new Date();
    // Diferencia en milisegundos
    const diferencia = ahora - fechaInicio;
    // Conversión
    const segundos = Math.floor(diferencia/1000);
    const minutos = Math.floor(segundos/60);
    const horas = Math.floor(minutos/60);
    const dias = Math.floor(horas/24);

    document.getElementById("contador").innerHTML=

    `
    ❤️ ${dias} días
    <br>
    ${horas%24} horas
    ${minutos%60} minutos
    ${segundos%60} segundos
    ❤️`;

}

//Actualizar cada segundo

setInterval(actualizarContador,1000);

actualizarContador();

const fotos=[

"img/foto1.jpg",
"img/foto2.jpg",
"img/foto3.jpg",
"img/foto4.jpg",
"img/foto5.jpg",
"img/foto6.jpg",
"img/foto7.jpg",
"img/foto8.jpg",
"img/foto9.jpg"


];

let indice=0;

function cambiarFoto(){

    indice++;

    if(indice>=fotos.length){

        indice=0;

    }

    document.getElementById("foto").src=fotos[indice];

}

// Cambia cada 3 segundos

setInterval(cambiarFoto,3000);

function crearCorazon(){

    const heart=document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(15+Math.random()*30)+"px";

    heart.style.animationDuration=(5+Math.random()*5)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },10000);

}

setInterval(crearCorazon,300);

// Texto que quieres que aparezca.
// Puedes cambiarlo por el que quieras.
const texto = "El 30 de marzo de 2026 comenzó la mejor historia de mi vida ❤️";

// Elemento donde se escribirá el texto
const textoMaquina = document.getElementById("textoMaquina");

// Posición de la letra actual
let posicion = 0;

// Función que escribe una letra cada cierto tiempo
function escribirTexto(){

    // Si todavía quedan letras...
    if(posicion < texto.length){

        // Añade una letra al texto
        textoMaquina.innerHTML += texto.charAt(posicion);

        // Avanza a la siguiente letra
        posicion++;

        // Vuelve a ejecutarse dentro de 70 milisegundos
        setTimeout(escribirTexto, 70);
    }

}

// Empieza a escribir cuando carga la página
escribirTexto();

const mensajeCarta = 
"Hola mi amor, \n\n" +
"quería dejarte este regalito para que perdure con el tiempo y puedas entrar cada vez que quieras, recordar nuestra historia y ver todo lo que hemos construido a lo largo del tiempo.\n\n" +
"Todo este tiempo ha significado mucho para mí, mucho antes de haber empezado a salir hiciste que mis días sean especiales gracias a tu compañía .\n\n" +
"Yo sé que no todo siempre será perfecto, que habrán días en los que vamos a discutir o tendremos algún problema, pero quiero que sepas que eso no cambiará lo que yo siento por tí, porque incluso en los momentos difíciles seguiré eligiéndote y seguiré queriendo arreglar las cosas contigo. " +
"Haré todo lo que esté a mi alcance para cuidarte, hacerte feliz y poder vivir la vida que deseo contigo. " +
"Gracias por formar parte de mi vida, por ser tú y por todos los momentos que todavía nos quedan por vivir. " +
"Te amo mucho más que ayer, da igual el día que leas esto. "
;


const carta = document.querySelector(".carta-scroll");
const textoCarta = document.getElementById("textoCarta");


// Control para que solo escriba una vez
let cartaEscrita = false;

// Detectar cuando aparece la carta
window.addEventListener("scroll",()=>{
    const posicion = carta.getBoundingClientRect().top;
    const pantalla = window.innerHeight;
    if(posicion < pantalla - 100){
        // Mostrar carta
        carta.classList.add("visible");
        // Empezar escritura una sola vez
        if(!cartaEscrita){
            cartaEscrita=true;
            escribirCarta();
        }
    }
});

let letra = 0;

function escribirCarta(){
    if(letra < mensajeCarta.length){
        textoCarta.innerHTML += mensajeCarta.charAt(letra);
        letra++;
        setTimeout(escribirCarta,60);
    }
}

const CONTRASENA = "roblox";

let intentos = 0;

const boton = document.getElementById("botonEntrar");

const password = document.getElementById("password");

const intro = document.getElementById("intro");

const contenido = document.getElementById("contenido");

const error = document.getElementById("mensajeError");

const botonPista = document.getElementById("botonPista");

const pista = document.getElementById("pista");

boton.addEventListener("click", comprobar);

password.addEventListener("keydown", function(e){

    if(e.key==="Enter"){

        comprobar();

    }

});

function comprobar(){

    if(password.value===CONTRASENA){

        // Animación de desaparecer

        intro.style.opacity="0";

        setTimeout(()=>{

            intro.style.display="none";

            contenido.style.display="block";

        },1000);

    }

    else{

        intentos++;
        error.innerHTML = "Esa no es la contraseña";
        password.value = "";

        // Después de 3 errores aparece la pista
        if(intentos >= 3)
            {
            const pista = document.getElementById("pista");
            pista.innerHTML = "Pista: ¿En dónde nos conocimos?";
            pista.style.opacity = "1";
        }
    }

}

botonPista.addEventListener("click", ()=>{
    pista.innerHTML = "Pista: ¿En dónde nos conocimos?";
    pista.style.opacity = "1";
});
