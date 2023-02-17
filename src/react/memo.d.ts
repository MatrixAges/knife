/// <reference types="react" />
type Element = JSX.Element | null;
type Memo = <T>(el: (props: T) => Element) => React.MemoExoticComponent<(props: T) => Element>;
declare const Index: Memo;
export default Index;
