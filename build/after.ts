import { moveSync } from 'fs-extra'
import { resolve } from 'path'

const arr_dist = ['node', 'react', 'storage']

arr_dist.map((item) => moveSync(`dist/${item}`, resolve(`${process.cwd()}/${item}`)))

