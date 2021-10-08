$(document).ready(function () {
	//selector tag
	$("h1").css("color", "red");
	$("p").css("color", "blue");
	$("p").css("border", "5px solid green");
	//selector class
	$(".kelas").css("background-color", "red");
	//selector id
	$("#uid").css("background-color", "blue");
	//selector gabungan
	$("h1, p, .kelas, #uid").css("font-family", "Halvetica, sans-serif");
});
