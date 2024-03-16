
let hrs = document.getElementById('hrs');
let min = document.getElementById('min');
let sec = document.getElementById('sec');


setInterval ( ()=>{
	let currentTime = new Date();

	let hours = currentTime.getHours() % 12; // Convert to 12-hour format
	hours = (hours === 0) ? 12 : hours; // Handle 0 as 12

	hrs.innerHTML = (hours < 10 ? '0' : '') + hours;


	
	min.innerHTML = (currentTime.getMinutes() < 10 ? '0' : '') + currentTime.getMinutes();
	
	sec.innerHTML = (currentTime.getSeconds() < 10 ? '0' : '') + currentTime.getSeconds();
}, 1000)

