

// get coords of top, buttom, left, right with getBoundingClientRect() function

function get_coords() {
			var obj = document.getElementById("coords_id");
			
			var top = obj.getBoundingClientRect().top; 
			var bottom = obj.getBoundingClientRect().bottom;
			
			var left = obj.getBoundingClientRect().left;
			var right = obj.getBoundingClientRect().right;
			
			// alert(top + left + right + buttom);
			
			document.getElementById("demo").innerHTML = left + " " + top + " " + right + " " + bottom; // set coords
}
