// @ts-check
import react from 'eslint-plugin-react';

import jsxA11yRuleSet from '../rules/jsx-a11y.js';
import reactHooksRuleSet from '../rules/react-hooks.js';
import reactRuleSet from '../rules/react.js';

export default [
	{
		languageOptions: {
			...react.configs.flat?.recommended.languageOptions,
		},

		settings: {
			react: {
				version: 'detect',
			},
		},
	},

	reactRuleSet,
	reactHooksRuleSet,
	jsxA11yRuleSet,
];
