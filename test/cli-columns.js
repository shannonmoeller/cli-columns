import columns from '../src/cli-columns';
import chalk from 'chalk';
import stripAnsi from 'strip-ansi';
import test from 'ava';

test('should print one column list', async assert => {
	var cols = columns(['foo', ['bar', 'baz'], ['bat', 'qux']], {
		width: 2
	});

	console.log(cols);

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

	console.log(cols);

	var expected =
		'bar  baz  qux  \n' +
		'bat  foo  ';

	assert.is(cols, expected);
});

test('should print complex list', async assert => {
	var cols = columns(
		[
			'foo', 'bar', 'baz', 'pear',
			'blue' + chalk.bgBlue('berry'),
			chalk.red('apple'), 'pomegranate',
			'durian', chalk.green('star fruit'),
			'apricot', 'banana pinapple'
		],
		{
			width: 80
		}
	);

	console.log(cols);

	var expected =
		'apple            bar              durian           pomegranate      \n' +
		'apricot          baz              foo              star fruit       \n' +
		'banana pinapple  blueberry        pear             ';

	assert.is(stripAnsi(cols), expected);
});
