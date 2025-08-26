import type * as React from 'react';
import { type SnackbarProps } from '../../components/Snackbar/Snackbar';
import { type HasDataAttribute, type PartialFields, type RequiredFields } from '../../types';

type SnackbarConfig = PartialFields<Omit<SnackbarProps, 'open' | 'offsetY'>, 'onClose'> &
  HasDataAttribute;

export type SnackbarsMap = Record<string, SnackbarItem[]>;

export type SnackbarData = RequiredFields<Omit<SnackbarProps, 'offsetY'>, 'id' | 'placement'>;

type UpdateSnackbarProps = Omit<SnackbarConfig, 'id' | 'placement'>;

export type OpenSnackbarReturn = {
  id: string;
  close: () => void;
  update: (props: UpdateSnackbarProps) => void;
  onClose: <R>(resolve?: () => R, reject?: VoidFunction) => Promise<R>;
};

export type CustomSnackbarProps<AdditionalProps extends object = object> = AdditionalProps &
  Pick<OpenSnackbarReturn, 'close' | 'update'> & {
    id: string;
    snackbarProps: SnackbarData;
  };

export type OpenCustomPayload<AdditionalProps extends object = object> = {
  id?: string;
  component: React.ComponentType<CustomSnackbarProps<AdditionalProps>>;
  baseProps?: SnackbarConfig;
  additionalProps?: AdditionalProps;
};

export interface SnackbarApi {
  // Метод для открытия снекбара. Принимает конфиг
  open: (config: SnackbarConfig) => OpenSnackbarReturn;
  // Метод для открытия кастомного снекбара.
  openCustom: <AdditionalProps extends object = object>(
    config:
      | OpenCustomPayload<AdditionalProps>
      | React.ComponentType<CustomSnackbarProps<AdditionalProps>>,
  ) => OpenSnackbarReturn;
  // Метод для обновления свойств снекбара. Можно поменять любое свойство, кроме 'id' и 'placement'
  update: (id: string, config: UpdateSnackbarProps) => void;
  // Метод для закрытия снекбара по id
  close: (id: string) => void;
  // Метод для закрытия всех снекбаров
  closeAll: () => void;
  // Метод для изменения максимального числа открытых снекбаров в один момент
  setMaxSnackbarsCount: (count: number) => void;
  // Метод для изменения поведения переполнения очереди снекбаров
  setQueueStrategy: (behavior: SnackbarsQueueStrategy) => void;
  // Метод для изменения отступа контейнера снекбаров от верха
  setVerticalOffsetTop: (offset: SnackbarsVerticalOffset) => void;
  // Метод для изменения отступа контейнера снекбаров от низа
  setVerticalOffsetBottom: (offset: SnackbarsVerticalOffset) => void;
}

export type SnackbarsQueueStrategy = 'queue' | 'shift';

export type SnackbarsVerticalOffset = number | string;

export interface UseSnackbarParameters {
  // Максимальное число открытых на одном `placement` снекбаров
  maxSnackbarsCount?: number;
  // Поведение переполнения очереди снекбаров:
  // - `"queue"` - снекбары не откроются, пока для них не появится место. Значение по умолчанию.
  // - `"shift"` - снекбары форсируют закрытие более старых снекбаров, чтобы освободить место.
  queueStrategy?: SnackbarsQueueStrategy;
  // Вертикальный отступ контейнера со снекбарами от верха. Полезно, когда на странице используется компонент `FixedLayout`
  verticalOffsetTop?: SnackbarsVerticalOffset;
  // Вертикальный отступ контейнера со снекбарами от низа. Полезно, когда на странице используется компонент `FixedLayout`
  verticalOffsetBottom?: SnackbarsVerticalOffset;
}

export type UseSnackbarResult = [SnackbarApi, React.ReactElement | null];

export type SimpleSnackbarItem = {
  type: 'simple';
  id: string;
  snackbarProps: SnackbarData;
};

export type CustomSnackbarItem = Pick<OpenSnackbarReturn, 'close' | 'update'> & {
  type: 'custom';
  id: string;
  component: React.ComponentType<any>;
  additionalProps?: any;
  snackbarProps: SnackbarData;
};

export type SnackbarItem = SimpleSnackbarItem | CustomSnackbarItem;

export type CommonOnOpenPayload =
  | {
      type: 'simple';
      id?: string;
      snackbarProps: SnackbarConfig;
    }
  | ({
      type: 'custom';
      id?: string;
      component: React.ComponentType<CustomSnackbarProps<any>>;
      snackbarProps?: SnackbarConfig;
      additionalProps?: any;
    } & Pick<OpenSnackbarReturn, 'close' | 'update'>);

export { type SnackbarPlacement } from '../../components/Snackbar/types';
export { SnackbarProps };
