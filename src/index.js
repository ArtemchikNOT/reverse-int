module.exports = function reverse(n) {
	if (n<0) {
		x=n*(-1);
		x = x + "";
		return x.split("").reverse().join("");
} else {
	n = n + "";
	return n.split("").reverse().join(""); 
}
}
