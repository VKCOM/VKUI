import { PROPS_HANDLERS, PROPS_OBSERVER } from './constants';

export type TargetProps = Record<PropertyKey, any>;

export type HandlerFn<T extends TargetProps = TargetProps, K extends PropertyKey = PropertyKey> = (
  property: K,
  value: T[K],
) => void;

export type DisposeFn = () => void;

export type ObservableProps<T extends TargetProps> = T & {
  [PROPS_HANDLERS]: Array<HandlerFn<T>>;
  [PROPS_OBSERVER]: (handler: HandlerFn<T>) => DisposeFn;
};
