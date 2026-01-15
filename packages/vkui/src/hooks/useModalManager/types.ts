import type * as React from 'react';
import { type ModalCardProps } from '../../components/ModalCard/types';
import { type ModalPageProps } from '../../components/ModalPage/types';
import { type ModalRootProps } from '../../components/ModalRoot/types';
import { type HasDataAttribute } from '../../types';

export type UseModalManagerProps = Omit<ModalRootProps, 'activeModal' | 'children'> & {
  saveHistory?: boolean;
};

export type OpenModalPageProps = Omit<ModalPageProps, 'open' | 'keepMounted'> & HasDataAttribute;

export type OpenModalCardProps = Omit<ModalCardProps, 'open' | 'keepMounted'> & HasDataAttribute;

export type CustomModalPageItem = Pick<OpenPageReturn, 'update' | 'close'> & {
  type: 'page';
  id: string;
  component: React.ComponentType<any>;
  additionalProps?: any;
  modalProps?: OpenModalPageProps;
};

export type CustomModalCardItem = Pick<OpenCardReturn, 'update' | 'close'> & {
  type: 'card';
  id: string;
  component: React.ComponentType<any>;
  additionalProps?: any;
  modalProps?: OpenModalCardProps;
};

export type ModalManagerItem = CustomModalPageItem | CustomModalCardItem;

export type OpenModalReturn<T> = {
  id: string;
  close: () => void;
  update: (props: T) => void;
  onClose: <R>(resolve?: () => R, reject?: VoidFunction) => Promise<R>;
};

type UpdateArgs =
  | [id: string, type: 'card', props: Omit<OpenModalCardProps, 'id'>]
  | [id: string, type: 'page', props: Omit<OpenModalPageProps, 'id'>];

export type OpenCardReturn = OpenModalReturn<Omit<OpenModalCardProps, 'id'>>;

export type OpenPageReturn = OpenModalReturn<Omit<OpenModalPageProps, 'id'>>;

export type CustomModalProps<
  BaseProps extends OpenModalCardProps | OpenModalPageProps,
  AdditionalProps extends object = object,
> = AdditionalProps &
  Pick<OpenModalReturn<Omit<BaseProps, 'id'>>, 'close' | 'update'> & {
    modalProps: BaseProps;
  };

export type CustomModalPayload<
  BaseProps extends OpenModalCardProps | OpenModalPageProps,
  AdditionalProps extends object = object,
> = {
  id?: string;
  component: React.ComponentType<CustomModalProps<BaseProps, AdditionalProps>>;
  baseProps?: BaseProps;
  additionalProps?: AdditionalProps;
};

/**
 * API предоставляемое хуком `useModalManager`
 */
export type ModalManagerApi = {
  /**
   * Метод для открытия `ModalCard`, принимает свойства `ModalCard`.
   * Возвращает объект типа `OpenModalReturn`.
   */
  openModalCard: (props: OpenModalCardProps) => OpenCardReturn;
  /**
   * Метод для открытия `ModalPage`, принимает свойства `ModalPage`.
   * Возвращает объект типа `OpenModalReturn`.
   */
  openModalPage: (props: OpenModalPageProps) => OpenPageReturn;
  /**
   * Метод для открытия кастомного модального окна на базе `ModalCard`.
   */
  openCustomModalCard: <AdditionalProps extends object>(
    props:
      | CustomModalPayload<OpenModalCardProps, AdditionalProps>
      | React.ComponentType<CustomModalProps<OpenModalCardProps, AdditionalProps>>,
  ) => OpenCardReturn;
  /**
   * Метод для открытия кастомного модального окна на базе `ModalPage`.
   */
  openCustomModalPage: <AdditionalProps extends object>(
    props:
      | CustomModalPayload<OpenModalPageProps, AdditionalProps>
      | React.ComponentType<CustomModalProps<OpenModalPageProps, AdditionalProps>>,
  ) => OpenPageReturn;
  /**
   * Метод для изменения свойств уже созданных модалок. Принимает `id` и новые свойства, которые нужно переопределить.
   */
  update: (...args: UpdateArgs) => void;
  /**
   * Метод для закрытия определенного модального окна. Принимает `id` модального окна.
   */
  close: (id: string) => void;
  /**
   * Метод для закрытия всех модальных окон.
   */
  closeAll: () => void;
  /**
   * Метод для изменения флага `saveHistory`
   */
  setSaveHistory: (saveHistory: boolean) => void;
};

export type UseModalManagerReturn = [ModalManagerApi, React.ReactElement | null];
