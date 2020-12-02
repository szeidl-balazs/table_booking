window.onload = function () {
	
		document.getElementById("pizzaimg").addEventListener('mouseover', bgFunction)
		document.getElementById("pizzaimg").addEventListener("mouseout", bgOffFunction);

		function bgFunction() {
			
			document.getElementById("imgContainer").style.backgroundImage = "url(/img/xbg.png)";
			document.getElementById("imgContainer").style.backgroundSize = "contain";
			document.getElementById("imgContainer").style.backgroundRepeat = "no-repeat";
			document.getElementById("imgContainer").style.backgroundPosition = "center";
			document.getElementById("textContainer").style.color = "red";
		}

		function bgOffFunction() {
			document.getElementById("imgContainer").style.backgroundImage = "none";
			document.getElementById("textContainer").style.color = "black";
		}

};