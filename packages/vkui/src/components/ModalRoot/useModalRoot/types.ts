import { type ModalCardProps } from '../../ModalCard/types';
import { type ModalPageProps } from '../../ModalPage/types';
import { type ModalRootProps } from '../types';

/* eslint-disable jsdoc/require-jsdoc */
export type UseModalRootProps = Omit<
  ModalRootProps,
  'activeModal' | 'children' | 'onOverlayClosed'
>;

type OpenModalPageProps = Omit<ModalPageProps, 'open' | 'keepMounted'>;

type OpenModalCardProps = Omit<ModalCardProps, 'open' | 'keepMounted'>;

export type ModalPageItem = OpenModalPageProps & {
  type: 'page';
};

export type ModalCardItem = OpenModalCardProps & {
  type: 'card';
};

export type ModalRootItem = ModalPageItem | ModalCardItem;

export type OpenModalReturn<T> = {
  id: string;
  close: () => void;
  update: (props: T) => void;
  then: <R>(resolve: () => R, reject: VoidFunction) => Promise<R>;
};

export type ModalRootApi = {
  openCard: (props: OpenModalCardProps) => OpenModalReturn<Omit<OpenModalCardProps, 'id'>>;
  openPage: (props: OpenModalPageProps) => OpenModalReturn<Omit<OpenModalPageProps, 'id'>>;
  close: (id: string) => void;
  closeAll: () => void;
};

export type UseModalRootReturn = [ModalRootApi, React.ReactElement | null];
