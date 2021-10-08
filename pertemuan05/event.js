$(document).ready(function () {
	//event click
	$("p").click(function () {
		//selector button
		$(this).hide();
		//selector judul class
	});
	$("input").focus(function () {
		$(this).css("background-color", "yellow");
	});
	$("input").blur(function () {
		$(this).css("background-color", "transparent");
	});
	// $(".coba_mouseenter").mouseenter(function () {
	// 	alert("MouseEnter nih boss, sengggol dong");
	// }); //bahaya cuy
	$(".mouse").on({
		mouseenter: function () {
			$(this).css("background-color", "salmon");
		},
		mouseleave: function () {
			$(this).css("background-color", "lightskyblue");
		},
		click: function () {
			$(this).css("background-color", "yellow");
		},
		mousedown: function () {
			$(this).css("background-color", "silver");
		},
		// mouseup: function () {
		// 	alert("lepas");
		// },
		// mousemove: function () {
		// 	$(this).css("background-color", "pink");
		// },
	});
});
