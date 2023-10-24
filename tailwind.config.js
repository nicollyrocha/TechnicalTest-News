/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
	content: ['./src/**/*.{html,js,tsx,jsx}'],
	corePlugins: {
		preflight: false,
		divideStyle: true,
	},
	important: true,
	theme: {
		extend: {
			fontFamily: {
				montaguSlab: ['"Montagu Slab"', ...defaultTheme.fontFamily.sans],
			},
			fontSize: {
				xxs: ['10px', '14px'],
				lg: ['18px', '22px'],
				xl: ['20px', '24px'],
			},
			colors: {
				white: '#ffffff',

				'blue-000': '#01EBFA',
				'blue-100': '#0B07D2',

				'green-000': '#0CC508',

				'neutral-000': '#F8FAFC',
				'neutral-100': '#F1F5F9',
				'neutral-200': '#E2E8F0',
				'neutral-300': '#CBD5E1',
				'neutral-400': '#94A3B8',
				'neutral-500': '#64748B',
				'neutral-600': '#475569',
				'neutral-700': '#334155',
				'neutral-800': '#1E293B',
				'neutral-900': '#0F172A',

				'red-000': '#9F1515',

				'yellow-000': '#BF9B1A',

				'purple-000': '#652990',
				'purple-100': '#8F0479',
				'purple-200': '#820475',
				'purple-300': '#500E7F',
				'purple-400': '#360B54',

				'grey-000': '#F5F5F5',
				'grey-100': '#ADADAD',
				'grey-200': '#D7D7D7',
			},
		},
	},
	plugins: [require('tailwindcss')],
};
