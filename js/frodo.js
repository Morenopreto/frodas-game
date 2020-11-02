
class frodoObj{

    constructor() {
        this._x =  100;
        this._y = piso - 75;
        this._vy = 0;
        this._gravedad = 2;
        this._salto = 28;
        this._vymax = 9;
        this._saltando = false;
        this._src = 'assets/frodo.png';
        this._sizeX =  101;
        this._sizeY = 141;
    };
    saltar() {
        frodo._vy = frodo._salto;
        frodo._saltando = true;
    }
    dibuja() {
        ctx.drawImage(imgFrodo, 0, 0, 101, 141, this._x, this._y, this._sizeX, this._sizeY);     
    }
  
    corre() {
        if(nivel.inicia == false){
        this._src = 'assets/frodoR.png';
        imgFrodo.src = this._src;
        
    }else{
        
        if (nivel.muerto == false) {
    
            if (this._src == 'assets/frodo.png') {
                this._src = 'assets/frodoR.png';
                imgFrodo.src = this._src;
    
            }
            else {
                this._src = 'assets/frodo.png';
                imgFrodo.src = this._src;
    
            }
        }
        else {
            if(fuego._sale == true){
            this._src = 'assets/frodoQuemado.png';
            imgFrodo.src = this._src;}else{
                this._src = 'assets/frodoCongelado.png';
            imgFrodo.src = this._src;
            }
        }}}
    
    gravedad() {
        if (this._saltando == true) {    
            let pisoCorrecion = this._y - this._gravedad - this._vy;
    
            if (pisoCorrecion > piso - 75) {
                this._saltando = false;
                this._vy = 0;
                this._y = piso - 75;
            } else {
                this._vy -= this._gravedad;
                this._y -= this._vy;
            }
        }
    }
}
