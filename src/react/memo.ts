import { deepEqual } from 'fast-equals'
import { memo } from 'react'

type Element = JSX.Element | null

type Memo = <T>(el: (props: T) => Element) => React.MemoExoticComponent<(props: T) => Element>

const Index: Memo = (el) => memo(el, (prev, next) => deepEqual(prev, next))

export default Index
