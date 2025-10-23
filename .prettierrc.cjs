/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */

const config = {
	singleQuote: true,
	trailingComma: 'all',
	semi: false,
	tabWidth: 2,
	useTabs: true,
	printWidth: 100,
	bracketSpacing: true,

	plugins: [
		'@trivago/prettier-plugin-sort-imports',
		'prettier-plugin-tailwindcss',
	],
	importOrder: [
		'^react(.*)$',
		'<BUILTIN_MODULES>',
		'<THIRD_PARTY_MODULES>',
		'^@/(.*)$',
		'^[./]+',
		'^types$',
	],
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
	importOrderCaseInsensitive: true,
}

module.exports = config
