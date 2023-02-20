import { emit } from './extends/watch'
import { createProxyStorage } from './proxy/storage'
import { decode, encode } from './proxy/transform'
import { createExpiredFunc, prefix, proxyMap, StorageValue } from './shared'
import { isObject } from './utils'

export { setPrefix } from './shared'
export { encode, decode }

export const local: any = createProxyStorage(localStorage)
export const session: any = createProxyStorage(sessionStorage)

if (typeof window !== 'undefined') {
	window.addEventListener('storage', (e: StorageEvent) => {
		if (e.key && e.key.startsWith(prefix)) {
			let newValue: StorageValue = e.newValue,
				oldValue: StorageValue = e.oldValue

			if (e.newValue) {
				newValue = decode(e.newValue, createExpiredFunc(localStorage, e.key))

				if (isObject(newValue)) {
					newValue = proxyMap.get(newValue) || newValue
				}
			}

			if (e.oldValue) {
				oldValue = decode(e.oldValue, createExpiredFunc(localStorage, e.key))

				if (isObject(oldValue)) {
					oldValue = proxyMap.get(oldValue) || oldValue
				}
			}

			emit(localStorage, e.key.slice(prefix.length), newValue, oldValue)
		}
	})
}
