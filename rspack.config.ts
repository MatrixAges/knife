import { resolve } from 'path'

import { defineConfig } from '@rspack/cli'

const modules = ['node', 'react', 'storage', 'types']

module.exports = defineConfig({
	entry: modules.reduce((total, item) => {
		total[item] = `./src/${item}/index.ts`

		return total
	}, {}),
	output: {
		clean: false,
		path: process.cwd(),
		filename: '[name]/index.js',
		library: {
			type: 'commonjs'
		}
	},
	target: 'node',
	resolve: {
		alias: {
			'@': resolve(`${process.cwd()}/src`)
		}
	},
	devtool: false,
	externals: ['react', 'fast-equals'],
	watchOptions: {
		ignored: /node_modules/
	},
	experiments: {
		incrementalRebuild: true
	},
	builtins: {
		decorator: {}
	}
})
