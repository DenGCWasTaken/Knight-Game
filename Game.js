class Game{
    constructor(){
        this.counter = 0;
    }

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data){
            gameState = data.val();
        })
    }

    update(state){
        database.ref('/').update({
            gameState:state
        })
    }

    async start(){
        if (gameState == 0){
            player = new Player();
            var playerCountRef = await database.ref ('playerCount').once("value");
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
            }
            form = new Form();
            form.display();
        }
        car1 = createSprite(100,200);
        car1.addAnimation("idleRight", knightIdleRight);
        car1.addAnimation("idleLeft", knightIdleLeft);
        car1.addAnimation("jumpingRight", knightJumpingRight);
        car1.addAnimation("jumpingLeft", knightJumpingLeft);
        car1.addAnimation("walkingRight", knightWalkingRight);
        car1.addAnimation("walkingLeft", knightWalkingLeft);
        cars = [car1];
        car1.scale = 2;
        car1.setCollider("rectangle",0,2,30,65)

        groundx3 = createSprite(2000,16*height/17);
        groundx3.addImage(groundx3Image);
        groundx3.scale = 2.5;

        Igroundx3 = createSprite(2000,16*height/17-0.01);
        Igroundx3.addImage(groundx3Image);
        Igroundx3.visible = false;
        Igroundx3.scale = 2.5;

        groundx5 = createSprite(1250,16*height/17);
        groundx5.addImage(groundx5Image);
        groundx5.scale = 2.5;

        Igroundx5 = createSprite(1250,16*height/17-0.01);
        Igroundx5.addImage(groundx5Image);
        Igroundx5.visible = false;
        Igroundx5.scale = 2.5;

        Igroundx10 = createSprite(500,16*height/17-0.01);
        Igroundx10.addImage(groundx10Image);
        Igroundx10.visible = false;
        Igroundx10.scale = 2.5;

        groundx10 = createSprite(500,16*height/17);
        groundx10.addImage(groundx10Image);
        groundx10.scale = 2.5;

        groundx10Two = createSprite(3800,16*height/17);
        groundx10Two.addImage(groundx10Image);
        groundx10Two.scale = 2.5;

        Igroundx10Two = createSprite(3800,16*height/17-0.01);
        Igroundx10Two.addImage(groundx10Image);
        Igroundx10.visible = false;
        Igroundx10Two.scale = 2.5;

        groundx10Three = createSprite(5150,16*height/17);
        groundx10Three.addImage(groundx10Image);
        groundx10Three.scale = 2.5;

        Igroundx10Three = createSprite(5150,16*height/17-0.01);
        Igroundx10Three.addImage(groundx10Image);
        Igroundx10Three.visible = false;
        Igroundx10Three.scale = 2.5;

        groundx3Two = createSprite(5740, 0.65*height/1.65 + 9);
        groundx3Two.addImage(groundx3Image);
        groundx3Two.scale = 2.5;

        Igroundx3Two = createSprite(5740, 0.65*height/1.65 + 8.99);
        Igroundx3Two.addImage(groundx3Image);
        Igroundx3Two.visible = false;
        Igroundx3Two.scale = 2.5;

        groundx10Four = createSprite(6250,16*height/17);
        groundx10Four.addImage(groundx10Image);
        groundx10Four.scale = 2.5;

        Igroundx10Four = createSprite(6250,16*height/17-0.01);
        Igroundx10Four.addImage(groundx10Image);
        Igroundx10Four.visible = false;
        Igroundx10Four.scale = 2.5;

        groundTwo = createSprite(5700, 16*height/17);
        groundTwo.addImage(groundImage);
        groundTwo.scale = 2.5;

        platform = createSprite(1000, 1.5*height/2.5);
        platform.addImage(platformImage);
        platform.scale = 3;

        Iplatform = createSprite(1000, 1.5*height/2.5-0.01);
        Iplatform.addImage(platformImage);
        Iplatform.visible = false;
        Iplatform.scale = 3;

        platform2 = createSprite(2450,1.5*height/2.5);
        platform2.addImage(platformImage);
        platform2.scale = 3;

        Iplatform2 = createSprite(2450,1.5*height/2.5-0.01);
        Iplatform2.addImage(platformImage);
        Iplatform2.visible = false;
        Iplatform2.scale = 3;

        platform3 = createSprite(2800,0.5*height/1.5);
        platform3.addImage(platformImage);
        platform3.scale = 3;

        Iplatform3 = createSprite(2800,0.5*height/1.5-0.01);
        Iplatform3.addImage(platformImage);
        Iplatform2.visible = false;
        Iplatform3.scale = 3;

        platform4 = createSprite(5200, 1.5*height/2.5);
        platform4.addImage(platformImage);
        platform4.scale = 3;

        Iplatform4 = createSprite(5200, 1.5*height/2.5-0.01);
        Iplatform4.addImage(platformImage);
        Iplatform4.visible = false;
        Iplatform4.scale = 3;

        wallx5 = createSprite(5600, 2*height/3);
        wallx5.addImage(groundx5Image);
        wallx5.scale = 2.5;
        wallx5.rotation = 270;

        wallx5Two = createSprite(5880, 2*height/3);
        wallx5Two.addImage(groundx5Image);
        wallx5Two.scale = 2.5;
        wallx5Two.rotation = 90;

        wallx10 = createSprite(6200, 0.1*height/1.1);
        wallx10.addImage(groundx10Image);
        wallx10.scale = 2.5;
        wallx10.rotation = 270;

        wallx3 = createSprite(6750, 3.5*height/4.5);
        wallx3.addImage(groundx3Image);
        wallx3.scale = 2.5;
        wallx3.rotation = 270;

        ceilingx5 = createSprite(6430, 1.75*height/2.75);
        ceilingx5.addImage(groundx5Image);
        ceilingx5.scale = 2.5;
        ceilingx5.rotation = 180;

        ceiling = createSprite(6730, 1.75*height/2.75);
        ceiling.addImage(groundImage);
        ceiling.scale = 2.5;
        ceiling.rotation = 180;

        spike = createSprite(3800,6*height/7);
        spike.addImage(spikeImage);
        spike.setCollider("circle",0,20,35);

        spike2 = createSprite(5537, 6*height/7);
        spike2.addImage(spikeImage);
        spike2.setCollider("circle",0,20,35);

        spike3 = createSprite(6130, 3*height/5);
        spike3.addImage(spikeImage);
        spike3.rotation = 270;
        spike3.setCollider("circle",0,20,35);

        coin1 = createSprite(1000,0.25*height/1.25);
        coin1.addImage(coinImage);
        coin1.scale = 0.45;

        coin2 = createSprite(3250,0.1*height/1.1);
        coin2.addImage(coinImage);
        coin2.scale = 0.45;

        coin3 = createSprite(5537, 2*height/3);
        coin3.addImage(coinImage);
        coin3.scale = 0.45;

        goal = createSprite(6625,3.5*height/4.5+10);
        goal.addImage(goalImage);
        goal.scale = 1.2;
        goal.depth=car1.depth;
    }

    play(){
        form.hide();
        Player.getPlayerInfo();

        var theWordFrameRateWasTaken = frameCount;

        if(theWordFrameRateWasTaken%120 == 0){
            var cloud = createSprite(car1.x + width/2, random(height/2, 0));
            cloud.velocityX = -3;
            cloud.addImage(cloudImage);
            cloud.depth=car1.depth;
            car1.depth = car1.depth + 1;
            //cloud.setLifetime(600);
        }

        background("skyBlue");
        if(allPlayers !== undefined){
            var index = 0;
            //var x = width/7;
            var y;
            for(var plr in allPlayers){
            index = index+1;
            //x = x+width/7;
            //y = displayHeight-allPlayers[plr].distance;
            //cars[index-1].x = x;
            //cars[index-1].y = y;
                if(index == player.index && car1.position.x > width/2){
                    cars[index-1].shapeColor = "red";
                    camera.position.x = cars[index-1].x;
                    //camera.position.y = cars[index-1].y;
                }
            }
        }

        car1.collide(groundx3);
        car1.collide(groundx5);
        car1.collide(groundx10);
        car1.collide(platform);
        car1.collide(platform2);
        car1.collide(platform3);
        car1.collide(platform4)
        car1.collide(groundx10Two);
        car1.collide(groundx10Three);
        car1.collide(wallx5);
        car1.collide(groundx3Two);
        car1.collide(wallx5Two);
        car1.collide(groundx10Four);
        car1.collide(wallx10);
        car1.collide(ceilingx5);
        car1.collide(ceiling);
        car1.collide(wallx3);
        car1.collide(goal);

        if(keyIsDown(UP_ARROW)&&(car1.isTouching(Igroundx3)||car1.isTouching(Igroundx5)||car1.isTouching(Igroundx10)||car1.isTouching(Iplatform)||car1.isTouching(Iplatform2)||car1.isTouching(Iplatform3)||car1.isTouching(Iplatform4)||car1.isTouching(Igroundx10Two)||car1.isTouching(Igroundx10Three)||car1.isTouching(Igroundx3Two)||car1.isTouching(Igroundx10Four))){
        car1.velocityY = car1.velocityY-40;
        }

        if(keyIsDown(DOWN_ARROW)){
            car1.velocityY = car1.velocityY-15;
        }

        if(keyDown(RIGHT_ARROW)){
            car1.x = car1.x+100;
            car1.changeAnimation("walkingRight", knightWalkingRight);
        }else if(keyWentUp(RIGHT_ARROW))
        { car1.changeAnimation("idleRight", knightIdleRight);}
 
        if(keyDown(LEFT_ARROW)){
            car1.x = car1.x-15;
            car1.changeAnimation("walkingLeft", knightWalkingLeft);
        }else if(keyWentUp(LEFT_ARROW))
            { car1.changeAnimation("idleLeft", knightIdleLeft);}

        car1.velocityY = car1.velocityY+2;

        //if(keyDown(UP_ARROW) && player.index !== null){
            //player.distance += 10;
            //player.update();
        //}

        form.coinCount.html('x' + this.counter);
        if(car1.isTouching(coin1)){
            this.counter +=1;
            console.log(this.counter);
            coin1.destroy();
            form.coinCount.html('x' + this.counter);
        }else if(car1.isTouching(coin2)){
            this.counter+=1;
            console.log(this.counter);
            coin2.destroy();
            form.coinCount.html('x' + this.counter);
        }else if(car1.isTouching(coin3)){
            this.counter+=1;
            console.log(this.counter);
            coin3.destroy();
            form.coinCount.html('x' + this.counter);
        }


        if(spike.isTouching(car1)){
            gameState = 2;
            this.end();
        }

        if(spike2.isTouching(car1)){
            gameState = 2;
            this.end();
        }

        if(spike3.isTouching(car1)){
            gameState = 2;
            this.end();
        }

        if(car1.y>height+200){
            gameState = 2;
        }

        if(car1.isTouching(goal)&&gameState==1){
            gameState = 3;
            this.win();
        }

        drawSprites();
    }
    
    end(){
        console.log("GAME OVER!");
    }

    win(){
        console.log("YOU WIN!");
    }
}