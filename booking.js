function test() {

  var element = document.getElementById("myTime").value;
  
  if (element == "") {
  alert("Please Enter Time");
    return false;  
  }
  else {
  
  // get system local time
  var d = new Date();
  var m = d.getMinutes();
  var h = d.getHours();
  if(h == '0') {h = 24}
  
  var currentTime = h+"."+m;
  console.log(currentTime);
 
  // get input time
  var time = element.split(":");
  var hour = time[0];
  if(hour == '00') {hour = 24}
  var min = time[1];
  
  var inputTime = hour+"."+min;
  console.log(inputTime);
  
  var totalTime = currentTime - inputTime;
  console.log(totalTime);
  
  if ((Math.abs(totalTime)) < 1 || inputDate < today ) {
    alert("Legalább 1 órával korábban foglaljon asztalt!");
	} else {
		var today = new Date();	
		var inputDate = new Date(document.getElementById("myDate").value);
		if (inputDate.getTime() <= -86400000 + today.getTime() && inputTime < currentTime ) {
			alert("A megadott dátum nem lehet régebbi a mai dátumnál!");	
	}
	else {
		document.getElementById("checkoutText").innerHTML = "Köszönjük az asztal foglalását, szeretettel várjuk a lefoglalt időpontban.";
		
			let name = document.getElementById("myName").value;
			let email = document.getElementById("myEmail").value;
			let date = document.getElementById("myDate").value;
			let time = document.getElementById("myTime").value;
			let guest = document.getElementById("numberOfPeople").value;
		
			document.getElementById("checkoutName").innerHTML = "Név: " + name;
			document.getElementById("checkoutEmail").innerHTML = "Email cím: " + email;
			document.getElementById("checkoutDate").innerHTML = "Dátum: " + date;
			document.getElementById("checkoutTime").innerHTML = "Időpont: " + time;
			document.getElementById("checkoutGuest").innerHTML = "Vendégek száma: " + guest;
		
			console.log(name + "\n", email + "\n", date + "\n", time + "\n", guest)
	}
	}}}