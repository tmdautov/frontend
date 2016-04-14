
<!DOCTYPE HTML>
<html>
<head>

<style>
    .droptarget {
        float: left; 
        width: 100px; 
        height: 35px;
        margin: 15px;
        padding: 10px;
        border: 1px solid #aaaaaa;
    }
</style>
</head>



<body>

    <p>Drag the p element back and forth between the two rectangles:</p>

    <div class="droptarget">
      <p draggable="true" id="dragtarget">Drag me!</p>
    </div>

    <div class="droptarget">
		1
    </div>
	
	<div class="droptarget">
		2 
    </div>
	
	<div id="coords_id" class="droptarget">
		3
    </div>
	
	<button onclick="get_coords()">Try it</button>
	
	
    <p style="clear:both;">
        <strong>Note:</strong> 
        drag events are not supported in Internet Explorer 8 and earlier versions or Safari 5.1 and earlier versions.
    </p>

    <p id="demo">
    </p>   

</body>


<script> 
    
    // get coords of element
    function get_coords() {
        var obj = document.getElementById("coords_id");
        
        var top = obj.getBoundingClientRect().top; 
        var bottom = obj.getBoundingClientRect().bottom;
        
        var left = obj.getBoundingClientRect().left;
        var right = obj.getBoundingClientRect().right;
        
        // alert(top + left + right + buttom);
        
        document.getElementById("demo").innerHTML = left + " " + top + " " + right + " " + bottom; // set coords
    }



    // dragstart
    document.addEventListener("dragstart" , drag_start);
    document.addEventListener("dragend"   , drag_end);
    
    document.addEventListener("dragenter" , drag_enter);
    document.addEventListener("dragover"  , drag_over);
    document.addEventListener("dragleave" , drag_leave);
    
    document.addEventListener("drag"      , drag);
    document.addEventListener("drop"      , drop);


    function drag_start(event) {
        event.dataTransfer.setData("Text", event.target.id);
        document.getElementById("demo").innerHTML = "Started to drag the p element.";
        event.target.style.opacity = "0.4";
    }
    function drag_end(event) {
        document.getElementById("demo").innerHTML = "Finished dragging the p element.";
        event.target.style.opacity = "1";
    }



    
    function drag(event) {
            document.getElementById("demo").style.color = "red";
    }
    function drop(event) {
        event.preventDefault();
        
        if ( event.target.className == "droptarget" ) {
            document.getElementById("demo").style.color = "";
            event.target.style.border = "";
            var data = event.dataTransfer.getData("Text");
            event.target.appendChild(document.getElementById(data));
        }
    }

    
    


    
    function drag_enter(event) {
        if ( event.target.className == "droptarget" ) {
            event.target.style.border = "3px dotted red";
        }
    }    
    function drag_over(event) {
        event.preventDefault();
    }    
    function drag_leave(event) {
        if ( event.target.className == "droptarget" ) {
         event.target.style.border = "";
        }
    }

    
    


</script>


</html>
