
var canvas = document.getElementById('canvas');
var frodo;
var fuego;
var nube;
var nube2;
var objPiso;
var insta;
var gameOver;
// var logoInicio;
var box;
//------------------------------------
    // logoInicio = new inicioObj();
// logoInicio.dibuja();
//------------------------------------------------
function inicializar() {
    
    ctx = canvas.getContext('2d');
      
    frodo = new frodoObj();
    fuego = new fuegoObj();
    objPiso = new pisoObj()
    insta = new instaObj()
    box = new boxObj()
    gameOver = new gameOverObj()
    nube = new nubesObj(70, 0, 400, 114, 36);
    nube2 = new nubesObj(120, 0, 300, 95, 30);
    cargaImg();
    ///------elimino versiones anteriores para mejorar la carga---
    localStorage.removeItem('h');
    localStorage.removeItem('H');
    localStorage.removeItem('Hpuntuacion');
    localStorage.removeItem('1.3');
    if(localStorage.getItem('v.'+nivel.latVersion)){       
        localStorage.removeItem('v.'+nivel.latVersion);        
    }
    document.onselectstart = function () {
        return false;
    }
    console.log('inicializo!');
} 
function cargaImg() {
    
    imgFrodo = new Image();
    imgFrodo.src = 'assets/frodo.png';
    imgNube = new Image();
    imgNube.src = 'assets/nube.png';
    ImgFuegos = new Image();
    ImgFuegos.src = 'assets/fuego1.png';
    ImgInsta = new Image();
    ImgInsta.src = 'assets/insta.png';
    imgPiso = new Image();
    imgPiso.src = 'assets/piso.png';
    ImgBox = new Image();
    ImgBox.src = 'assets/cajaFrodas.png';
   
    imgGameOver = new Image();
    imgGameOver.src = 'assets/Gameover.png';
    
}


document.addEventListener('keydown', function (evento) {
    (evento.keyCode == 32 || evento.keyCode == 32) ? saltaYreinicia() : {};
})

canvas.addEventListener('touchstart', function () {
    saltaYreinicia();
})

function saltaYreinicia() {

    if (nivel.muerto === false) {
        if (frodo._y === piso - 75) {
            frodo.saltar()
        }
    } else {
        nivel.muerto = false;
        nivel.velocidad = 9;
        nube2._vy = 2.5;
        nube._vy = 2;
        fuego._x = ancho + 100;
        fuego._sale = true;
        insta._x = ancho + 100;
        insta._sale = false;
        nube._x = 400;
        nube2._x = 300;
        nivel.puntuacion = 0;
        nivel.aumentoPuntuacion = 1;
        nivel.incrementoDificultad = 3;
        nivel.vueltas = 0;
        nivel.inicia = true;
    }
};
// var ancho = document.getElementById('canvas').getContext('2d').canvas.clientWidth;
// var alto = document.getElementById('canvas').getContext('2d').canvas.clientWidth*0.4286;
var ancho = 700;
var alto = 300;
var ctx;
var piso = 200;
var imgFrodo, imgNube, ImgCiudad, ImgFuegos, imgPiso, imgNubeDoble, imgGameOver;

function limpiaCanvas() {
    canvas.width = ancho;
    canvas.height = alto;
}
//CREA OBJETO NIVEL
var nivel = {
    velocidad: 0, puntuacion: 0,
    muerto: true, aumentoPuntuacion: 1,
    vueltas: 0, nivel: 1,
    version: 1.5 , latVersion: 1.4,
     incrementoDificultad: 3, inicia:false
}
//FUNCIONES DEL JUEGO
function saleRandom() {
    
    if (nivel.puntuacion > 51) {
        var random = Math.floor(Math.random()*(6-1) + 1);  
        if (random <= 2) {
            insta._sale = false;
            fuego._sale = true;
            box._sale = false;
        } else if(random<= 4) {
            insta._sale = true;
            fuego._sale = false;
            box._sale = false;
        } else if(random == 5) {
            insta._sale = false;
            fuego._sale = false;
            box._sale = true;
        }
    }

}


let high = localStorage.getItem('v.'+nivel.version);

function puntuacion() {
    //PUNTUACION DEL NIVEL QUE CORRE
    high = localStorage.getItem('v.'+nivel.version);
    muestraPuntajes(`score:${nivel.puntuacion}`, 580)
    

    if (nivel.muerto == true) {

        if (high === null) {
            localStorage.setItem('v.'+nivel.version, nivel.puntuacion);
            muestraPuntajes(`HIGH: 0 `, 430);
        }
        else if (high < nivel.puntuacion) {
            localStorage.setItem('v.'+nivel.version, nivel.puntuacion);
            muestraPuntajes(`HIGH: ${high}`, 430);
        } else {
            muestraPuntajes(`HIGH: ${high}`, 430);
        }
        
    }
}
function muestraPuntajes(input, donde) {
    ctx.font = ' bold 20px courier new';
    ctx.fillStyle = "#555555";
    ctx.fillText(input, donde, 20);
}



function dificultad() {
    if (nivel.vueltas == nivel.incrementoDificultad) {
    nivel.incrementoDificultad += 3;
        //    velocidad maxima 24
        if(nivel.velocidad<24){        
        nivel.velocidad += 2.5;
        nivel.aumentoPuntuacion += 1;

       }
    }
}
function avisoInicio(){
    if(nivel.inicia == false){
        ctx.font = 'bold 30px courier new';
        ctx.fillStyle = 'black';
        ctx.fillText(`${'TAP o ESPACIO PARA INICIAR'}`, 120, 115);
    }}

// BUCLE PRINCIPAL
setTimeout(function(){
let fps = 50;
setInterval(function () {
    principal();

}, 1000 / fps);

setInterval(function () {
    
    frodo.corre();
    
}, 1000 / fps * 8);



function principal() {
    // inicio de  juego
    
    limpiaCanvas()
    frodo.gravedad();
    //CARGA DIBUJOS
    objPiso.dibuja();
    frodo.dibuja();
    fuego.dibuja();
    insta.dibuja();
    box.dibuja();
    nube.dibuja();
    nube2.dibuja();
    //CARGA MOVIMIENTOS
    objPiso.movimiento();
    fuego.movimiento();
    nube.movimiento();
    nube2.movimiento();
    insta.movimiento();
    box.movimiento();
    // CARAGA JUGABILIDAD

    fuego.choque();
    insta.choque();
    box.choque();
    puntuacion();
    dificultad();
    avisoInicio();

}},2000)

