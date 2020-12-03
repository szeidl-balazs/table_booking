/*compare date*/

function checkDate() {
	var today = new Date();	
	var inputDate = new Date(document.getElementById("myDate").value);
	if (inputDate.getTime() < today.getTime()) {
		alert("A megadott dátum nem lehet régebbi a mai dátumnál!");
	}
}

function checkTime() {
	var currentTime = get.Time();
	var inputTime = get.time(document.getElementById("myTime").value);
	if (inputTime.getTime() < 3600000 + currentTime.getTime()) {
		alert("Legalább 1 órával korábban foglaljon asztalt!");
	}
}




