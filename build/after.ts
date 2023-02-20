import { moveSync } from 'fs-extra'
import { resolve } from 'path'

import { libs } from './common'

libs.map((item) => moveSync(`dist/${item}`, resolve(`${process.cwd()}/${item}`)))

