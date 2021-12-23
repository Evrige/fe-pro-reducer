function reducer(input, action) {
	switch (action) {
		case "upperCase": input = input.toUpperCase();
			break;
		case "lowerCase": input = input.toLowerCase();
			break;
		case "capitalize": input = capitalize(input);
			break;
		default: input = "error";
	}
	return input;
}
function capitalize(string) {
	let word = string.split(" ");
	word = word.map(item => {
		return item = (`${item[0].toUpperCase()}${item.slice(1)}`);
	});
	return string = word.join(" ");
}
module.exports = reducer;
