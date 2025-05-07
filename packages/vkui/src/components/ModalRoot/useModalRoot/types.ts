import { type ModalCardProps } from '../../ModalCard/types';
import { type ModalPageProps } from '../../ModalPage/types';
import { type ModalRootProps } from '../types';

/* eslint-disable jsdoc/require-jsdoc */
export type UseModalRootProps = Omit<ModalRootProps, 'activeModal' | 'children'>;

export type ModalPageItem = ModalPageProps & {
  type: 'page';
};

export type ModalCardItem = ModalCardProps & {
  type: 'card';
};

export type ModalRootItem = ModalPageItem | ModalCardItem;

export type ModalRootApi = {
  openCard: (props: ModalCardProps) => string;
  openPage: (props: ModalPageProps) => string;
  close: (id: string) => void;
  closeAll: () => void;
};

export type UseModalRootReturn = [ModalRootApi, React.ReactElement | null];
