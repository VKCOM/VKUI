import type * as React from 'react';
import { type SnackbarProps } from '../../components/Snackbar/Snackbar';
import { type HasDataAttribute, type PartialFields, type RequiredFields } from '../../types';

export type SnackbarsMap = Record<string, SnackbarItem[]>;

export type SnackbarData = RequiredFields<Omit<SnackbarProps, 'offsetY'>, 'id' | 'placement'>;

export namespace CustomSnackbar {
  export type Props<AdditionalProps extends object = object> = AdditionalProps &
    Pick<SnackbarApi.OpenSnackbarReturn, 'close' | 'update'> & {
      id: string;
      snackbarProps: SnackbarData;
    };

  export type Payload<AdditionalProps extends object = object> = {
    id?: string;
    component: React.ComponentType<Props<AdditionalProps>>;
    baseProps?: SnackbarApi.OpenProps;
    additionalProps?: AdditionalProps;
  };
}

export namespace SnackbarApi {
  export type OpenProps = PartialFields<Omit<SnackbarProps, 'open' | 'offsetY'>, 'onClose'> &
    HasDataAttribute;

  export type UpdateSnackbarProps = Omit<OpenProps, 'id' | 'placement'>;

  export type OpenSnackbarReturn = {
    id: string;
    close: () => void;
    update: (props: UpdateSnackbarProps) => void;
    onClose: <R>(resolve?: () => R, reject?: VoidFunction) => Promise<R>;
  };

  export type QueueStrategy = 'queue' | 'shift';

  export type VerticalOffset = number | string;

  export interface Api {
    /**
     * Метод для открытия снекбара. Принимает конфиг
     */
    open: (config: OpenProps) => OpenSnackbarReturn;
    /**
     * Метод для открытия кастомного снекбара.
     */
    openCustom: <AdditionalProps extends object = object>(
      config:
        | CustomSnackbar.Payload<AdditionalProps>
        | React.ComponentType<CustomSnackbar.Props<AdditionalProps>>,
    ) => OpenSnackbarReturn;
    /**
     * Метод для обновления свойств снекбара. Можно поменять любое свойство, кроме 'id' и 'placement'.
     */
    update: (id: string, config: UpdateSnackbarProps) => void;
    /**
     * Метод для закрытия снекбара по id.
     */
    close: (id: string) => void;
    /**
     * Метод для закрытия всех снекбаров.
     */
    closeAll: () => void;
    /**
     * Метод для изменения максимального числа открытых снекбаров в один момент.
     */
    setMaxSnackbarsCount: (count: number) => void;
    /**
     * Метод для изменения поведения переполнения очереди снекбаров.
     */
    setQueueStrategy: (behavior: QueueStrategy) => void;
    /**
     * Метод для изменения отступа контейнера снекбаров от верха.
     */
    setVerticalOffsetTop: (offset: VerticalOffset) => void;
    /**
     * Метод для изменения отступа контейнера снекбаров от низа.
     */
    setVerticalOffsetBottom: (offset: VerticalOffset) => void;
  }
}

export namespace UseSnackbar {
  export interface Parameters {
    /**
     * Максимальное число открытых на одном `placement` снекбаров
     */
    maxSnackbarsCount?: number;
    /**
     * Поведение переполнения очереди снекбаров:
     * - `"queue"` - снекбары не откроются, пока для них не появится место. Значение по умолчанию.
     * - `"shift"` - снекбары форсируют закрытие более старых снекбаров, чтобы освободить место.
     */
    queueStrategy?: SnackbarApi.QueueStrategy;
    /**
     * Вертикальный отступ контейнера со снекбарами от верха. Полезно, когда на странице используется компонент `FixedLayout`.
     */
    verticalOffsetTop?: SnackbarApi.VerticalOffset;
    /**
     * Вертикальный отступ контейнера со снекбарами от низа. Полезно, когда на странице используется компонент `FixedLayout`.
     */
    verticalOffsetBottom?: SnackbarApi.VerticalOffset;
  }

  export type Return = [SnackbarApi.Api, React.ReactElement | null];
}

type SimpleSnackbarItem = {
  type: 'simple';
  id: string;
  snackbarProps: SnackbarData;
};

type CustomSnackbarItem = Pick<SnackbarApi.OpenSnackbarReturn, 'close' | 'update'> & {
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
      snackbarProps: SnackbarApi.OpenProps;
    }
  | ({
      type: 'custom';
      id?: string;
      component: React.ComponentType<CustomSnackbar.Props<any>>;
      snackbarProps?: SnackbarApi.OpenProps;
      additionalProps?: any;
    } & Pick<SnackbarApi.OpenSnackbarReturn, 'close' | 'update'>);

export { type SnackbarPlacement } from '../../components/Snackbar/types';
export { SnackbarProps };
