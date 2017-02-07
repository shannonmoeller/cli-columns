var chalk = require('chalk');
var columns = require('../src/cli-columns.js');

var cols = columns(
	[
		'foo', 'bar', 'baz',
		chalk.cyan('嶜憃撊') + ' 噾噿嚁',
		'blue' + chalk.bgBlue('berry'),
		chalk.red('apple'), 'pomegranate',
		'durian', chalk.green('star fruit'),
		'apricot', 'banana pineapple'
	],
	{
		width: 80
	}
);

// Visual test
console.log(chalk.yellow(cols) + '\n');
