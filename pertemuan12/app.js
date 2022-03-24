const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.question("Masukkan nama anda : ", (nama) => {
	rl.question("Masukkan hobi anda : ", (hobi) => {
		const data = {nama, hobi};
		const file = fs.readFileSync("data/file.json", "utf-8");
		const datas = JSON.parse(file);
		// console.log(datas);
		datas.push(data);
		// console.log(datas);
		fs.writeFileSync("data/file.json", JSON.stringify(datas));
		console.log(`Halo ${nama}, selamat ${hobi}`);
		rl.close();
	});
});
