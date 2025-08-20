import type * as React from 'react';
import { type SnackbarProps } from '../../components/Snackbar/Snackbar';
import { type HasDataAttribute, type PartialFields, type RequiredFields } from '../../types';

type SnackbarConfig = PartialFields<Omit<SnackbarProps, 'open' | 'offsetY'>, 'onClose'> &
  HasDataAttribute;

export type SnackbarsMap = Record<string, SnackbarData[]>;

export interface SnackbarApi {
  // Метод для открытия снекбара. Принимает конфиг
  // Возвращает `id` снекбара(если передан в конфиг, то вернет его, если нет, то сгенерирует uuid)
  open: (config: SnackbarConfig) => string;
  // Метод для обновления свойств снекбара. Можно поменять любое свойство, кроме 'id' и 'placement'
  update: (id: string, config: Omit<SnackbarConfig, 'id' | 'placement'>) => void;
  // Метод для закрытия снекбара по id
  close: (id: string) => void;
  // Метод для закрытия всех снекбаров
  closeAll: () => void;
  // Метод для получения списка всех открытых снекбаров
  getSnackbars: () => SnackbarData[];
  // Метод для изменения максимального числа открытых снекбаров в один момент
  setMaxSnackbarsCount: (count: number) => void;
  // Метод для изменения поведения переполнения очереди снекбаров
  setQueueStrategy: (behavior: SnackbarsQueueStrategy) => void;
}

export type SnackbarsQueueStrategy = 'queue' | 'shift';

export interface UseSnackbarParameters {
  // Максимальное число открытых на одном `placement` снекбаров
  maxSnackbarsCount?: number;
  // Поведение переполнения очереди снекбаров:
  // - `"queue"` - снекбары не откроются, пока для них не появится место. Значение по умолчанию.
  // - `"shift"` - снекбары форсируют закрытие более старых снекбаров, чтобы освободить место.
  queueStrategy?: SnackbarsQueueStrategy;
}

export type UseSnackbarResult = [SnackbarApi, React.ReactElement | null];

export type SnackbarData = RequiredFields<Omit<SnackbarProps, 'offsetY'>, 'id' | 'placement'>;

export { type SnackbarPlacement } from '../../components/Snackbar/types';
export { SnackbarProps };
