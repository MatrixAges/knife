import { defineConfig } from 'rollup'

import { nodeResolve } from '@rollup/plugin-node-resolve'

export const plugins = [nodeResolve()]

const getConfig = (name: string) => {
      return defineConfig({
		output: {
			format: 'esm',
			file: `dist/${name}/index.js`
		}
	})
}
	

export const react_lib = defineConfig({
	input: 'src/react/index.ts',
	output: getConfig('react').output,
	external: ['react']
})

export const node_lib = defineConfig({
	input: 'src/node/index.ts',
	output: getConfig('node').output
})
