// @ts-check
import jsdocRuleSet from '../rules/jsdoc.js';

export default [
	jsdocRuleSet.ts,

	{
		files: ['**/*.@(js|cjs|mjs)'],
		...jsdocRuleSet.js,
	},
];
