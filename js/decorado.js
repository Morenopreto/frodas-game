class nubesObj{
    
        constructor(y, vy, x, sizeX,sizeY) {
            this._y = y;
            this._vy = vy;
            this._x = x;
            this._src = 'assets/nube.png';
            this._sizeX = sizeX;
            this._sizey = sizeY;
        }
        dibuja() {
            ctx.drawImage(imgNube, 0, 0, 165, 77, this._x,this._y, this._sizeX,this._sizey);
        }        
        movimiento() {
            if (this._x < -100) {
                this._x = ancho + 100;
            } else {
                this._x -= this._vy;
            }
        
        }
}
class pisoObj{
    
    constructor() {
        this._y = piso+30;
        this._x = 100;
        this._src = 'assets/piso.png';
        this._sizeX = 700;
        this._sizey = 30;
        // this._sizeX = document.getElementById('canvas').getContext('2d').canvas.clientWidth;
        // this._sizey = (document.getElementById('canvas').getContext('2d').canvas.clientWidth*0.4286)*0.1;
    }
    dibuja() {
        
        ctx.drawImage(imgPiso, this._x, 0, 700, 30, 0, this._y, this._sizeX,this._sizey)
        // muestra numero de version
        ctx.font = '10px courier new';
    ctx.fillStyle = "black";
    ctx.fillText(`V.${nivel.version}`, 650,295);  

    ctx.font = ' bold 10px courier new';
    ctx.fillStyle = "#555555";
    ctx.fillText(`Coding:@MorePreto Ilustrations:@conBirome `, 20, 295);

    }
    movimiento() {
        if (this._x > 700) {
            this._x = -10;
    
        } else {
            this._x += nivel.velocidad;
        }
    
    }
}


class gameOverObj{
    constructor(){
        this._x = 250;
        this._y =  10;
        this._src = 'assets/piso.png';
        this._sizeX = 200;
        this._sizeY = 200;
    }
    dibuja() {
        ctx.drawImage(imgGameOver, 0, 0, 1200, 1200, this._x, this._y, this._sizeX,this._sizeY);
    }
    
}
