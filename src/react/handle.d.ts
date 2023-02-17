/// <reference types="react" />
type Element = JSX.Element | null;
export default class Index<T> {
    private el;
    constructor(el: (props: T) => Element);
    by(fn: Function): this;
    get(): (props: T) => Element;
}
export {};
