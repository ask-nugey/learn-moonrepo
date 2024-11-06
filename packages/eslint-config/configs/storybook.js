// @ts-check
import storybookRuleSet from '../rules/storybook.js';

export default [
	{
		files: ['**/*.@(stories|story).@(ts|tsx|js|jsx|mjs|cjs)'],
		...storybookRuleSet.stories,
	},

	{
		files: ['**/.storybook/**/*.@(ts|tsx|js|jsx|mjs|cjs)'],
		...storybookRuleSet.config,
	},
];
