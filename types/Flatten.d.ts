type IsFunction<T, R, Fallback = T> = T extends (...args: any[]) => any ? R : Fallback;
type IsObject<T, R, Fallback = T> = IsFunction<T, Fallback, T extends object ? R : Fallback>;
type Tail<S> = S extends `${string}.${infer T}` ? Tail<T> : S;
type Value<T> = T[keyof T];
type FlattenStepOne<T> = {
    [K in keyof T as K extends string ? IsObject<T[K], `${K}.${keyof T[K] & string}`, K> : K]: IsObject<T[K], {
        [key in keyof T[K]]: T[K][key];
    }>;
};
type FlattenStepTwo<T> = {
    [a in keyof T]: IsObject<T[a], Value<{
        [M in keyof T[a] as M extends Tail<a> ? M : never]: T[a][M];
    }>>;
};
type FlattenOneLevel<T> = FlattenStepTwo<FlattenStepOne<T>>;
export type Flatten<T> = T extends FlattenOneLevel<T> ? T : Flatten<FlattenOneLevel<T>>;
export {};
