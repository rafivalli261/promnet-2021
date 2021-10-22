$(document).ready(function () {
	$("h1").css("background-color", "salmon");
	$("h2, p").css("font-family", "'Source Code Pro', sans-serif");
	$("#p2").hide();
	$("#btn1").click(function () {
		//$("p").hide("slow"); //menyembunyikan elemen, parameter berfungsi sebagai waktu untuk melakukan aksi, dalam milisekon, bisa juga string slow , fast

		//$("p").toggle(2000); //menyembunyikan dan menampilkan elemen, mirip dengan hide
		// $("p").hide("slow", function () {

		// 	//dalam event, kita bisa menambahkan parameter callback, yakni parameter yang memungkinkan kita untuk memanggil fungsi lain setelah event selesai dilakukan
		// 	alert("Konten telah diamankan");
		// });

		// $("#p1").hide("slow", function () {
		// 	$("#p2").show("slow");
		// });
		$("#p1").slideDown(2000).hide();
		$("#p2").show(2000);
	});
	//$("p").css("background-color", "lightskyblue").slideUp(2000).slideDown(2000);
});
