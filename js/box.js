class boxObj {
    constructor() {
        this._x = ancho + 100;
        this._y = piso - 25;
        this._src = 'assets/cajaFrodas.png';
        // this._sizeX = 38;
        this._sizeX = 30;
        // this._sizeY = 75;
        this._sizeY = 82;
        this._sale = false;
    }
    dibuja() {
        ctx.drawImage(ImgBox, 0, 0, 30, 82 , this._x, this._y, this._sizeX, this._sizeY);
    }
    movimiento() {
        if (nivel.puntuacion > 51 && this._sale == true) {

            if (this._x < -100) {
                this._x = ancho + 100;
                nivel.puntuacion += nivel.aumentoPuntuacion;
                nivel.vueltas += 1;
                saleRandom();
               

            } else if (this._sale == true) {
                this._x -= nivel.velocidad;
            }

        }
    }
    
    choque() {
        if ((this._x >= 100 && this._x <= 201)||(this._x+this._sizeX >= 100 && this._x+this._sizeX <= 201)) {
            if (frodo._y >= piso || frodo._y >= piso - 75) {
                ctx.font = 'bold 30px courier new';
                ctx.fillStyle = "black";
                ctx.fillText(`DISMINUYE VELOCIDAD`, 180, 180);
                nivel.velocidad = 18;
            }
        }
    }
}