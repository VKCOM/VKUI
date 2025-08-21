import type * as React from 'react';
import { type ModalCardProps } from '../../components/ModalCard/types';
import { type ModalPageProps } from '../../components/ModalPage/types';
import { type ModalRootProps } from '../../components/ModalRoot/types';
import { type HasDataAttribute } from '../../types';

export type UseModalRootProps = Omit<ModalRootProps, 'activeModal' | 'children'>;

export type OpenModalPageProps = Omit<ModalPageProps, 'open' | 'keepMounted'> & HasDataAttribute;

export type OpenModalCardProps = Omit<ModalCardProps, 'open' | 'keepMounted'> & HasDataAttribute;

export type ModalPageItem = OpenModalPageProps & {
  type: 'page';
  component?: React.ComponentType<any>;
  [index: string]: any;
};

export type ModalCardItem = OpenModalCardProps & {
  type: 'card';
  component?: React.ComponentType<any>;
  [index: string]: any;
};

export type ModalRootItem = ModalPageItem | ModalCardItem;

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

export type OpenModalComponentsProps<
  BaseProps extends OpenModalCardProps | OpenModalPageProps,
  AdditionalProps extends object = object,
> = BaseProps & AdditionalProps & Pick<OpenModalReturn<Omit<BaseProps, 'id'>>, 'close' | 'update'>;

export type CustomModalProps<
  BaseProps extends OpenModalCardProps | OpenModalPageProps,
  AdditionalProps extends object,
> = {
  id?: string;
  component: React.ComponentType<OpenModalComponentsProps<BaseProps, AdditionalProps>>;
  props?: BaseProps & AdditionalProps;
};

type OpenCustomModal = {
  <AdditionalProps extends object>(
    type: 'card',
    props: CustomModalProps<OpenModalCardProps, AdditionalProps>,
  ): OpenCardReturn;

  <AdditionalProps extends object>(
    type: 'page',
    props: CustomModalProps<OpenModalPageProps, AdditionalProps>,
  ): OpenPageReturn;
};

// API предоставляемое хуком `useModalRoot`
export type ModalRootApi = {
  // Метод для открытия ModalCard, принимает свойства ModalCard.
  // Возращает  объект типа OpenModalReturn
  openCard: (props: OpenModalCardProps) => OpenCardReturn;
  // Метод для открытия ModalPage, принимает свойства ModalPage.
  // Возращает  объект типа OpenModalReturn
  openPage: (props: OpenModalPageProps) => OpenPageReturn;
  openCustomModal: OpenCustomModal;
  // Метод для изменения свойств уже созданных модалок. Принимает id и новые свойства, которые нужно переопределить.
  update: (...args: UpdateArgs) => void;
  // Метод для закрытия определенной модальных окон. Принимает id модального окна.
  close: (id: string) => void;
  closeAll: () => void;
};

export type UseModalRootReturn = [ModalRootApi, React.ReactElement | null];
