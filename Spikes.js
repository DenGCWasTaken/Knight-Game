class Spikes {
    //Bob VVV
    constructor(x,y,spikeImage){
        this.image = spikeImage;
        this.x = x
        this.y = y
    }

    isToching(knight){
        if(spike1.isTouching(knight)){
            gameState = 2;
        }
    }

    display(){
        spike1 = createSprite(this.x,this.y);
        spike1.addImage(spikeImage);
    }
}