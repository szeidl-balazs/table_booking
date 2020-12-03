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
	let tm = document.getElementById("myTime").value;
	let timeParts = tm.split(":");
	let inputTime = new Date(timeNow.getYear(), timeNow.getMonth(), timeNow.getDate(), parseInt(timeParts[0]), parseInt(timeParts[1]), 0, 0);

	let diff = Math.abs(inputTime.getTime() - timeNow.getTime());

	if (diff < 3600000) {
		alert("Legalább 1 órával korábban foglaljon asztalt!");
	}
}

function orderSummary() {
let name = document.getElementById("myName").value;
let email = document.getElementById("myEmail").value;
let date = document.getElementById("myDate").value;
let time = document.getElementById("myTime").value;
let guest = document.getElementById("numberOfPeople").value;

document.getElementById("checkoutText").innerHTML = "Köszönjük az asztal foglalását, szeretettel várjuk a lefoglalt időpontban.";
document.getElementById("checkoutName").innerHTML = name;
document.getElementById("checkoutEmail").innerHTML = email;
document.getElementById("checkoutDate").innerHTML = date;
document.getElementById("checkoutTime").innerHTML = time;
document.getElementById("checkoutGuest").innerHTML = guest;
}