
<html>
<style>
	canvas {
	    border: 1px solid black;
	}
</style>

<body>
	<canvas id="mycanvas"></canvas>
</body>	

<script>
	var canvas = document.getElementById("mycanvas");
	var ctx = canvas.getContext('2d');
	// Gravity, how fast it goes down
	var gravity = 0.1;

	canvas.width = 500;
	canvas.height = 500;

	// Whether or not the up key is pressed
	var keypressed = false;

	var img = new Image();
	img.src = "http://s2.postimg.org/5xr35kj45/grass.jpg";
	function Grass(x, y) {
	    this.x = x;
	    this.y = y;	    
	    this.velocity = 0; // speed
	    this.image = img;
	}

	Grass.prototype.draw = draw_image;
	function draw_image() {
	    ctx.drawImage(this.image, this.x, this.y);
	}

	Grass.prototype.update = my_update;
	function my_update() {
	    // Check if we are underground
	    if (this.y + this.velocity + 36 > 500) {
	        // If so, move us back to ground level and set velocity to zero
	        this.velocity = 0;
	        this.y = 500 - 36;
	    } else {
	        // Otherwise, move what is indicated by velocity
	        this.velocity += gravity;
	        this.y += this.velocity;
	    } 
	}


	var grass1 = new Grass(30, 450);


	var requestAnim = window.requestAnimationFrame       ||
	                  window.webkitRequestAnimationFrame ||
	                  window.mozRequestAnimationFrame    ||
	                  setInterval;	
	requestAnim(loop);
	function loop() {
	    
	    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the screen
	    
	    grass1.draw(); // Redraw the grass where it is supposed to be
	    
	    if (keypressed) { // If the key is pressed, set velocity to -5
	        grass1.velocity = -5;
	        keypressed = false;
	    }
	    grass1.update();
	    
	    requestAnim(loop); // Do again
	}
	
	
	

	document.addEventListener('keydown', key_down, false);
	function key_down(e) {
	    if (e.keyCode == '38') {
	        keypressed = true;
	    }
	}



</script>

</html>
