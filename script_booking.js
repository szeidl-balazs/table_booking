/*compare date*/

function checkDate() {
	var today = new Date();	
	var inputDate = new Date(document.getElementById("myDate").value);
	if (inputDate.getTime() <= -86400000 + today.getTime()) {
		alert("A megadott dátum nem lehet régebbi a mai dátumnál!");
	}
}


 function checkTime() {
	var currentTime = get.Time();
	var inputTime = get.time(document.getElementById("myTime").value);
	if (inputTime.getTime() < currentTime.getTime()) {
		alert("Legalább 1 órával korábban foglaljon asztalt!");
	}
}


