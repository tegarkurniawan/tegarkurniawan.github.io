window.addEventListener('DOMContentLoaded', function(){
	new QueryLoader2(document.querySelector("body"), {
		barColor: "#fff",
		backgroundColor: "#000",
		percentage: true,
		barHeight: 0,
		minimumTime: 300,
		fadeOutTime: 800
	});
});