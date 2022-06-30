class Form{
    constructor(){
        this.coinCount = createElement('h1');
        this.title = createElement('h1');
        this.input = createInput("Player");
        this.button = createButton('PLAY');
        this.greeting = createElement('h3');
        this.reset = createButton('reset');
        this.img = createImg('sprites/Coin.png');
    }

    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
        this.img.show();
    }

    display(){

        var theWordFrameRateWasTaken = frameCount;

        if(theWordFrameRateWasTaken%120 == 0){
            var cloud = createSprite(car1.x + width/2, random(height/2, 0));
            cloud.velocityX = -3;
            cloud.addImage(cloudImage);
            //cloud.setLifetime(600);
        }

        this.title.html("Knight Game");
        this.title.position(width/2-310,height/5);
        this.title.class("Title");
        this.button.position(width/2-75,height/2);
        this.button.class("Button");
        this.reset.position(76.5*width/80, height/40);
        this.img.position(25, height/40);
        this.img.size(30,30);
        this.img.hide();
        //this.coinCount.html('x' + game.counter);
        this.coinCount.position(55,0);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount+=1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html('Hello ' + player.name + '!');
            this.greeting.position(130,30);
            //gameState = 1;
        })
        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
        })
    }
}