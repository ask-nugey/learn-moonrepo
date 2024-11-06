// @ts-check
import promisePlugin from 'eslint-plugin-promise';

export default {
	plugins: {
		promise: promisePlugin,
	},

	rules: {
		...promisePlugin.configs.recommended.rules,

		// Require returning inside each `then()` to create readable and reusable Promise chains.
		// https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/always-return.md
		// `React.Suspense`, which is a use case that does not assume a return value, can be rather confusing.
		'promise/always-return': ['off', { ignoreLastCallback: true }],

		// Disallow nested `then()` or `catch()` statements.
		// https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-nesting.md
		// Disallowing nesting may actually increase complexity.
		'promise/no-nesting': ['off'],
	},
};
