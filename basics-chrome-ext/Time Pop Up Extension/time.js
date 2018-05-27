
// get Time and format it
function getTime(){

	var paraTime = document.getElementById('p_time');
	var currentTime = new Date();
	var hours = currentTime.getHours();
	var mins = currentTime.getMinutes();
	var seconds =  currentTime.getSeconds();

	paraTime.innerHTML =  hours + ' : ' + mins+ ' : ' + seconds

}

// set interval to chage the time after each second
setInterval(getTime,1000)
