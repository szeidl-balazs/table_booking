/*compare date*/

function checkDate() {
	var today = new Date();	
	var inputDate = new Date(document.getElementById("myDate").value);
	if (inputDate.getTime() <= -86400000 + today.getTime()) {
		alert("A megadott dátum nem lehet régebbi a mai dátumnál!");
	}
} 



function checkTime(){
	let timeNow = new Date();
	let tm = document.getElementById("myTime");
	let timeParts = tm.split(":");
	let inputTime = new Date(timeNow.getYear(), timeNow.getMonth(), timeNow.getDate(), parseInt(timeParts[0]), parseInt(timeParts[1]), 0, 0);

	let diff = Math.abs(inputTime.getTime() - timeNow.getTime());

	if (diff < 3600) {
		alert("Legalább 1 órával korábban foglaljon asztalt!");
	}
}

function orderSummary() {
	alert("Köszönjük az asztal foglalását, szeretettel várjuk a lefoglalt időpontban");
}