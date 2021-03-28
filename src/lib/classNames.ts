export interface ObjectClassNames {
  [index: string]: boolean | undefined | null;
}

export type ClassName = number | string | ObjectClassNames | false | null | undefined;

export {
  classNames,
  classNames as classNamesString
} from '@mntm/classnames';
