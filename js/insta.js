class instaObj {
    constructor() {
        this._x = ancho + 100;
        this._y = 20;
        this._src = 'assets/insta.png';
        this._sizeX = 129;
        this._sizeY = 87;
        this._sale = false;
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

    dibuja() {
        ctx.drawImage(ImgInsta, 0, 0, 129, 87, this._x, this._y, this._sizeX, this._sizeY)
    }

    choque() {
        if ((this._x >= 100 && this._x <= 201)||(this._x+this._sizeX >= 100 && this._x+this._sizeX <= 201)) {
            if (frodo._y <= 70) {
                nivel.muerto = true;
                nivel.velocidad = 0;
                nube._vy = 0;
                nube2._vy = 0;
               
            }
        }
        if(nivel.muerto == true&& this._sale===true){
            ctx.font = 'bold 30px courier new';
            ctx.fillStyle = 'black';
            gameOver.dibuja();
            ctx.fillText(`${'SE TE ENFRIO LA FRODA!'}`, 210, 180);
        }
    }

}