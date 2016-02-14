import columns from '../src/cli-columns';
import chalk from 'chalk';
import stripAnsi from 'strip-ansi';
import test from 'ava';

test('should print one column list', async assert => {
	var cols = columns(['foo', ['bar', 'baz'], ['bat', 'qux']], {
		width: 1
	});

	var expected =
		'bar\n' +
		'bat\n' +
		'baz\n' +
		'foo\n' +
		'qux';

	assert.is(cols, expected);
});

test('should print three column list', async assert => {
	var cols = columns(['foo', ['bar', 'baz'], ['bat', 'qux']], {
		width: 16
	});

	var expected =
		'bar  baz  qux  \n' +
		'bat  foo  ';

	assert.is(cols, expected);
});

test('should print complex list', async assert => {
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

	var expected =
		'apple             bar               durian            star fruit        \n' +
		'apricot           baz               foo               嶜憃撊 噾噿嚁     \n' +
		'banana pineapple  blueberry         pomegranate       ';

	assert.is(stripAnsi(cols), expected);
});
