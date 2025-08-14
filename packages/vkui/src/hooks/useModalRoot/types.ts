import { type ModalCardProps } from '../../components/ModalCard/types';
import { type ModalPageProps } from '../../components/ModalPage/types';
import { type ModalRootProps } from '../../components/ModalRoot/types';
import { type HasDataAttribute } from '../../types';

export type UseModalRootProps = Omit<ModalRootProps, 'activeModal' | 'children'>;

type OpenModalPageProps = Omit<ModalPageProps, 'open' | 'keepMounted'> & HasDataAttribute;

type OpenModalCardProps = Omit<ModalCardProps, 'open' | 'keepMounted'> & HasDataAttribute;

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
  onClose: <R>(resolve?: () => R, reject?: VoidFunction) => Promise<R>;
};

type UpdateArgs =
  | [id: string, type: 'card', props: Omit<OpenModalCardProps, 'id'>]
  | [id: string, type: 'page', props: Omit<OpenModalPageProps, 'id'>];

export type ModalRootApi = {
  openCard: (props: OpenModalCardProps) => OpenModalReturn<Omit<OpenModalCardProps, 'id'>>;
  openPage: (props: OpenModalPageProps) => OpenModalReturn<Omit<OpenModalPageProps, 'id'>>;
  update: (...args: UpdateArgs) => void;
  close: (id: string) => void;
  closeAll: () => void;
};

export type UseModalRootReturn = [ModalRootApi, React.ReactElement | null];
