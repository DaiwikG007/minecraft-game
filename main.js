var canvas = new fabric.Canvas("my_canvas");
player_x = 10;
player_y=10;
block_width_image=30;
block_height_image=30;
player_object="";
block_image_object="";

function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(130);
        player_object.set({
     top:player_y,
     left:player_x
        });
canvas.add(player_object);
    });

    
}




function new_image(get_image)
{
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(block_width_image);
        block_image_object.scaleToHeight(block_height_image);
        block_image_object.set({
     top:player_y,
     left:player_x
        });
canvas.add(block_image_object);
    });

    
}




window.addEventListener("keydown",keydown1);

function keydown1(e){
   keyPressed = e.keyCode;
   console.log(keyPressed);
   if (e.shiftKey == true  &&   keyPressed == '80'){
       console.log("shift and p key clickd together");
       block_height_image = block_height_image + 10;
       block_width_image = block_width_image + 10;
       document.getElementById("current_width").innerHTML=block_width_image;
       document.getElementById("current_height").innerHTML=block_height_image;
   }

   if (e.shiftKey == true  &&  keyPressed == '77'){
       console.log("shift key and 'm' clicked together");
       block_height_image = block_height_image - 10;
       block_width_image = block_width_image - 10;
       document.getElementById("current_height").innerHTML=block_height_image;
       document.getElementById("current_width").innerHTML=block_width_image;
   }


   if (keyPressed == '37'){
       left();
       console.log("left");
   }
   
   if (keyPressed == '39'){
       right();
       console.log("right");

   }


   if (keyPressed=='38'){
       up();
       console.log("up");

   }

   if (keyPressed == '40'){
       down();
       console.log("down");
   }

  if (keyPressed == '87'){
      new_image("wall.jpg");
      console.log("w key has been pressed");

  }

  if (keyPressed == '71'){
      new_image("ground.png");
      console.log("g key has been pressed");
  }


  if (keyPressed == '76'){
    new_image("light_green.png");
    console.log("l key has been pressed");
}


if (keyPressed == '84'){
    new_image("trunk.jpg");
    console.log("t key has been pressed");
}

if (keyPressed == '68'){
    new_image("dark_green.png");
    console.log("d key has been pressed");
}


if (keyPressed == '67'){
    new_image("cloud.jpg");
    console.log("c key has been pressed");
}

if (keyPressed == '82'){
    new_image("roof.jpg");
    console.log("r key has been pressed");

}

if (keyPressed == '89'){
    new_image("yellow_wall.png");
    console.log("y key has been pressed");

}

if (keyPressed == '85'){
    new_image("unique.png");
    console.log("u key has been pressed");

}
}


function up(){
    if (player_y >= 0 ){
        player_y = player_y - block_height_image;
        console.log("block_height_image =" + block_height_image)
        console.log("when up arrow is clicked   x=" + player_x  +  "y=" + player_y);
        canvas.remove(player_object);
        player_update();
    }
}


function down(){
    if (player_y <= 500){
        player_y = player_y + block_height_image;
        console.log("block_image_height =" + block_height_image)
        console.log("when down arrow is clicked   x="  +  player_x  + "y=" + player_y);
        canvas.remove(player_object);
        player_update();
    }
   
}


function right(){
    if (player_x  <=900){
     player_x = player_x + block_width_image;
     console.log("block image width = " + block_width_image);
     console.log("when right arrow is clicked    x="  + player_x   + "y=" + player_y);
     canvas.remove(player_object);
     player_update();
    }
}



function left(){
    if (player_x >=0){
     player_x = player_x - block_width_image;
     console.log("block image width = " + block_width_image);
     console.log("when right arrow is clicked    x="  + player_x   + "y=" + player_y);
     canvas.remove(player_object);
     player_update();
    }
}