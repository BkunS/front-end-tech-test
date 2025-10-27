const config = {
	root: true,
	env: {
		es6: true,
		browser: true,
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	settings: {
		react: {
			version: 'detect',
		},
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true,
			},
		},
	},
	rules: {
		'no-unused-vars': 1,
		'no-console': 1,
		'react/prop-types': [1, { ignore: ['children', 'className'] }],
		'react/react-in-jsx-scope': 'off',
		'react/jsx-uses-react': 'off',
	},
}

export default config
