// @ts-check
import { essentials, node, typescript } from './configs/index.js';

export default [
	{
		files: ['**/*.@(js|ts)'],
	},

	...essentials,
	{
		files: ['**/*.@(js|ts)'],
		rules: {
			'import/no-default-export': ['off'],
			'unicorn/filename-case': ['off'],
		},
	},

	...node,

	...typescript,
];
