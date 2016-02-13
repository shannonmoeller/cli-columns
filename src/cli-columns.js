var assign = require('object-assign');
var stringWidth = require('string-width');
var stripAnsi = require('strip-ansi');
var concat = Array.prototype.concat;

var defaults = {
	character: ' ',
	newline: '\n',
	padding: 2,
	width: 0
};

function byPlainText(a, b) {
	return stripAnsi(a) > stripAnsi(b) ? 1 : -1;
}

function makeArray() {
	return [];
}

function makeList(count) {
	return Array.apply(null, Array(count));
}

function padCell(fullWidth, character, value) {
	var valueWidth = stringWidth(value);
	var filler = makeList(fullWidth - valueWidth + 1);

	return value + filler.join(character);
}

function toRows(rows, cell, i) {
	rows[i % rows.length].push(cell);

	return rows;
}

function toString(arr) {
	return arr.join('');
}

function columns(values, options) {
	values = concat.apply([], values);
	options = assign({}, defaults, options);

	var cells = values
		.filter(Boolean)
		.map(String)
		.sort(byPlainText);

	var termWidth = options.width || process.stdout.columns;
	var cellWidth = Math.max.apply(null, cells.map(stringWidth)) + options.padding;
	var columnCount = Math.floor(termWidth / cellWidth) || 1;
	var rowCount = Math.ceil(cells.length / columnCount) || 1;

	if (columnCount === 1) {
		return cells.join(options.newline);
	}

	return cells
		.map(padCell.bind(null, cellWidth, options.character))
		.reduce(toRows, makeList(rowCount).map(makeArray))
		.map(toString)
		.join(options.newline);
}

module.exports = columns;
