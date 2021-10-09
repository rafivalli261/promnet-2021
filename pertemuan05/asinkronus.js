$(document).ready(function () {
	setTimeout(() => {
		$(".warna").css("background-color", "orange");
	}, 2000);

	function komedi() {
		const gacha = Math.random() * 10;
		console.log(gacha);
		if (gacha > 0 && gacha < 1) {
			$(".warna").css("background-color", "pink");
		} else if (gacha >= 1 && gacha < 2) {
			$(".warna").css("background-color", "blue");
		} else if (gacha >= 2 && gacha < 3) {
			$(".warna").css("background-color", "azure");
		} else if (gacha >= 3 && gacha < 4) {
			$(".warna").css("background-color", "yellow");
		} else if (gacha >= 4 && gacha < 5) {
			$(".warna").css("background-color", "green");
		} else if (gacha >= 5 && gacha < 6) {
			$(".warna").css("background-color", "silver");
		} else {
			$(".warna").css("background-color", "salmon");
		}
	}
	$("#mulai").click(function () {
		let putar = setInterval(komedi, 500);
		$("#berhenti").click(function () {
			clearInterval(putar);
		});
	});
});
