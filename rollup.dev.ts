import { defineConfig } from 'rollup'
import { swc } from 'rollup-plugin-swc3'

import { node_lib, plugins, react_lib } from './rollup.common'

const common_config = defineConfig({
	plugins: [...plugins, swc()]
})

export default defineConfig([
	{ ...react_lib, ...common_config },
	{ ...node_lib, ...common_config }
])
