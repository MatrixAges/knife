import { resolve } from 'path'

import { defineConfig } from '@rspack/cli'

const modules = ['node', 'react', 'storage', 'types']

module.exports = defineConfig({
	entry: modules.reduce((total, item) => {
		total[item] = `./src/modules/${item}/index.tsx`

		return total
	}, {}),
	output: {
		clean: true,
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
	externals: ['electron', 'mica-electron'],
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
