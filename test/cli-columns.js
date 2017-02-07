import test from 'ava';
import chalk from 'chalk';
import stripAnsi from 'strip-ansi';
import columns from '../src/cli-columns';

test('should print one column list', async t => {
	var cols = columns(['foo', ['bar', 'baz'], ['bat', 'qux']], {
		width: 1
	});

	var expected =
		'bar\n' +
		'bat\n' +
		'baz\n' +
		'foo\n' +
		'qux';

	t.is(cols, expected);
});

test('should print three column list', async t => {
	var cols = columns(['foo', ['bar', 'baz'], ['bat', 'qux']], {
		width: 16
	});

	var expected =
		'bar  baz  qux  \n' +
		'bat  foo  ';

	t.is(cols, expected);
});

test('should print complex list', async t => {
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

	var expected =
		'apple             bar               durian            star fruit        \n' +
		'apricot           baz               foo               嶜憃撊 噾噿嚁     \n' +
		'banana pineapple  blueberry         pomegranate       ';

	t.is(stripAnsi(cols), expected);
});

test('should optionally not sort', async t => {
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
			sort: false,
			width: 80
		}
	);

	var expected =
		'foo               嶜憃撊 噾噿嚁     pomegranate       apricot           \n' +
		'bar               blueberry         durian            banana pineapple  \n' +
		'baz               apple             star fruit        ';

	t.is(stripAnsi(cols), expected);
});
