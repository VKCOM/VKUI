// eslint-disable-next-line space-infix-ops
export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
