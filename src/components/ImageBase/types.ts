export type ImageBaseSize =
  | 16
  | 20
  | 24
  | 28
  | 32
  | 36
  | 40
  | 44
  | 48
  | 56
  | 64
  | 72
  | 80
  | 88
  | 96;

export type ImageBaseExpectedIconProps = {
  width?: number;
  height?: number;
  className?: string;
};

export interface ImageBaseContextProps {
  size: ImageBaseSize | number;
}
