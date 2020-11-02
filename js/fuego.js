class fuegoObj {
    constructor() {
        this._x = ancho + 100;
        this._y = piso - 25;
        this._src = 'assets/fuego.png';
        this._sizeX = 38;
        this._sizeY = 75;
        this._sale = true;
    }
    dibuja() {
        ctx.drawImage(ImgFuegos, 0, 0, 151, 225, fuego._x, fuego._y, fuego._sizeX, fuego._sizeY);
    }
    movimiento() {
        //SCORE < 51 SALE SOLOFUEGO

        if (fuego._x < -100 && fuego._sale == true) {
            fuego._x = ancho + 100;
            nivel.puntuacion += nivel.aumentoPuntuacion;
            nivel.vueltas += 1;
            // SCORE MAYOR A 51, ACTIVA RANDOM ENTRE BOX, INSTAGRAM Y FUEGO
            (nivel.puntuacion > 51)?saleRandom():{};
        } else if (fuego._sale == true) {
            fuego._x -= nivel.velocidad;
        }

    }

    choque() {
        if ((this._x >= 100 && this._x <= 201) || (this._x + this._sizeX >= 100 && this._x + this._sizeX <= 201)) {

            if (frodo._y >= piso || frodo._y >= piso - 75) {
                nivel.muerto = true;
                nivel.velocidad = 0;
                nube._vy = 0;
                nube2._vy = 0;
                ctx.font = 'bold 30px courier new';
                ctx.fillStyle = "black";
                gameOver.dibuja();
                ctx.fillText(`QUEMASTE LA FRODA REY`, 180, 180);               
            }
        }
    }
}