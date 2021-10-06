function input(num) {
	if (num === "/" || num === "+" || num === "-" || num === "*") {
		document.form.hasil.value = document.form.hasil.value + " " + num + " ";
	} else {
		document.form.hasil.value = document.form.hasil.value + num;
	}
}

function samadengan() {
	const exp = document.form.hasil.value;
	if (exp) {
		document.form.hasil.value = eval(exp);
	}
}
function clean() {
	document.form.hasil.value = null;
}

function back() {
	const exp = document.form.hasil.value;
	document.form.hasil.value = exp.substring(0, exp.length - 1);
}
