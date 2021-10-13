//belajar manipulasi dengan javascript biasa dulu
let harus = document.getElementById("coba1");
harus.style.backgroundColor = "lightskyblue";
harus.style.fontFamily = "Halvetica, sans-serif";
harus.innerHTML = "Sistem Periodik Unsur memuat semua unsur yang telah didokumentasikan oleh para peneliti. ";
let saat = document.getElementById("waktu");
saat.innerHTML = new Date();
let tekan = document.getElementById("tombol");
// tidak bisa, harus panggil fungsi
//tekan.onclick = Date();
function tampil_tanggal() {
	let tanggal = new Date().toDateString();
	tekan.innerHTML = tanggal;
	console.log(typeof tekan);
}
