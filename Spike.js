class Spike{
    constructor(x,y){
        this.x = x
        this.y = y
    }
    display(){
        createSprite(this.x, this.y);
    }
}