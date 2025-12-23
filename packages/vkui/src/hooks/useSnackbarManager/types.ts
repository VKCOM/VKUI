import type * as React from 'react';
import { type SnackbarProps } from '../../components/Snackbar/Snackbar';
import { type HasDataAttribute, type PartialFields, type RequiredFields } from '../../types';

export type SnackbarsMap = Record<string, SnackbarItem[]>;

export type SnackbarData = RequiredFields<Omit<SnackbarProps, 'offsetY'>, 'id' | 'placement'>;

export namespace CustomSnackbar {
  export type Props<AdditionalProps extends object = object> = AdditionalProps &
    Pick<SnackbarApi.OpenReturn, 'close' | 'update'> & {
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
  export type OpenProps = PartialFields<Omit<SnackbarProps, 'open' | 'offsetY'>, 'onClosed'> &
    HasDataAttribute;

  export type UpdateProps = Omit<OpenProps, 'id' | 'placement'>;

  export type OpenReturn = {
    id: string;
    close: () => void;
    update: (props: UpdateProps) => void;
    onClose: <R>(resolve?: () => R, reject?: VoidFunction) => Promise<R>;
  };

  export type QueueStrategy = 'queue' | 'shift';

  export type OffsetY = number | string;

  export interface Api {
    /**
     * Метод для открытия снекбара. Принимает конфиг
     */
    open: (config: OpenProps) => OpenReturn;
    /**
     * Метод для открытия кастомного снекбара.
     */
    openCustom: <AdditionalProps extends object = object>(
      config:
        | CustomSnackbar.Payload<AdditionalProps>
        | React.ComponentType<CustomSnackbar.Props<AdditionalProps>>,
    ) => OpenReturn;
    /**
     * Метод для обновления свойств снекбара. Можно поменять любое свойство, кроме 'id' и 'placement'.
     */
    update: (id: string, config: UpdateProps) => void;
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
    setLimit: (count: number) => void;
    /**
     * Метод для изменения поведения переполнения очереди снекбаров.
     */
    setQueueStrategy: (behavior: QueueStrategy) => void;
    /**
     * Метод для изменения отступа контейнера снекбаров от верха.
     */
    setOffsetYStart: (offset: OffsetY) => void;
    /**
     * Метод для изменения отступа контейнера снекбаров от низа.
     */
    setOffsetYEnd: (offset: OffsetY) => void;
    /**
     * Метод для изменения z-index контейнера снекбаров.
     */
    setZIndex: (zIndex: number | string) => void;
  }
}

export namespace UseSnackbar {
  export interface Props {
    /**
     * Максимальное число открытых на одном `placement` снекбаров
     */
    limit?: number;
    /**
     * Поведение переполнения очереди снекбаров:
     * - `"queue"` - снекбары не откроются, пока для них не появится место.
     * - `"shift"` - снекбары форсируют закрытие более старых снекбаров, чтобы освободить место. Значение по умолчанию.
     */
    queueStrategy?: SnackbarApi.QueueStrategy;
    /**
     * Вертикальный отступ контейнера со снекбарами от верха. Полезно, когда на странице используется компонент `FixedLayout`.
     */
    offsetYStart?: SnackbarApi.OffsetY;
    /**
     * Вертикальный отступ контейнера со снекбарами от низа. Полезно, когда на странице используется компонент `FixedLayout`.
     */
    offsetYEnd?: SnackbarApi.OffsetY;
    /**
     * Свойство для установки стиля `z-index` на контейнере снекбаров.
     */
    zIndex?: number | string;
  }

  export type Return = [SnackbarApi.Api, React.ReactElement | null];
}

export type SnackbarItem = Pick<SnackbarApi.OpenReturn, 'close' | 'update'> & {
  id: string;
  component: React.ComponentType<any>;
  additionalProps?: any;
  snackbarProps: SnackbarData;
};

export type CommonOnOpenPayload = Pick<SnackbarApi.OpenReturn, 'close' | 'update'> & {
  id: string;
  component: React.ComponentType<CustomSnackbar.Props<any>>;
  snackbarProps?: SnackbarApi.OpenProps;
  additionalProps?: any;
};

export { type SnackbarPlacement } from '../../components/Snackbar/types';
export { SnackbarProps };
