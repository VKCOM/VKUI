import { warnOnce } from '../../lib/warnOnce';
import {
  getBadgeIconSizeByImageBaseSize,
  getFallbackIconSizeByImageBaseSize,
  getOverlayIconSizeByImageBaseSize,
} from './helpers';
import { imageBaseSizes } from './types';

/**
 * Пример,
 *
 * Icon28User -> 28
 * Icon12Circle1 -> 12
 * Icon12Circle2 -> 12
 * Icon20TextHeading1Outline -> 20
 */
function parseIconSizeByDisplayName(displayName: unknown): number | null {
  if (typeof displayName !== 'string') {
    return null;
  }

  const match = /Icon(\d+)/.exec(displayName);

  return match ? Number(match[1]) : null;
}

function parseIconSizeByWidthProp(width: unknown): number | null {
  if (typeof width !== 'string' && typeof width !== 'number') {
    return null;
  }
  const size = Number(width);
  return size > 0 ? size : null;
}

function getElementDisplayName(element: JSX.Element): string | null {
  return element.type.displayName ?? null;
}

function getElementWidthProp(element: JSX.Element): number | string | null {
  return element.props.width ?? null;
}

function getIconSizeByElement(element: JSX.Element): number | null {
  const sizeByDisplayName = parseIconSizeByDisplayName(getElementDisplayName(element));
  const sizeByWidth = parseIconSizeByWidthProp(getElementWidthProp(element));
  return sizeByWidth ? sizeByWidth : sizeByDisplayName;
}

interface IconProp {
  name: string;
  value: JSX.Element;
}

interface SelectorFn {
  (imageSize: number): number;
  MAX_SIZE: number;
}

function validateIconComponentSizeByImageSize(
  imageSize: number,
  iconProp: IconProp,
  selectorFn: SelectorFn,
  logger: ReturnType<typeof warnOnce>,
) {
  const iconSize = getIconSizeByElement(iconProp.value);

  if (iconSize === null) {
    return;
  }

  const result = selectorFn(imageSize);

  if (result === iconSize || (result === selectorFn.MAX_SIZE && iconSize >= result)) {
    return;
  }

  const iconName = getElementDisplayName(iconProp.value);
  const propMessage = iconName ? `${iconProp.name}={<${iconName} />}` : iconProp.name;

  logger(
    `Размер \`${propMessage}\` не соответствует дизайн-системе. Для \`size={${imageSize}}\` размер иконки для \`${iconProp.name}\` должен соответствовать <Icon${result}<name> />. Если такого размера нет, то используйте <${iconName} width={${result}} height={${result}} />`,
    'log',
  );
}

const warnImageBase = warnOnce('ImageBase');

export function validateFallbackIcon(imageSize: number, iconProp: IconProp) {
  return validateIconComponentSizeByImageSize(
    imageSize,
    iconProp,
    getFallbackIconSizeByImageBaseSize,
    warnImageBase,
  );
}

const mapOfExpectedSize = new Set<number>(imageBaseSizes);

const arrayOfSizes = Object.keys(mapOfExpectedSize).map((str) => Number(str));
const maxSize = arrayOfSizes.reduce((maxSize, size) => (size > maxSize ? size : maxSize), 0);

export function validateSize(imageSize: number): void {
  if (imageSize > maxSize || mapOfExpectedSize.has(imageSize)) {
    return;
  }
  warnImageBase(
    `\`size={${imageSize}}\` не соответствует дизайн-системе. Пожалуйста, используйте один из следующих вариантов: ${arrayOfSizes.join(
      ' | ',
    )}`,
    'log',
  );
}

const warnImageBaseBadge = warnOnce('ImageBase.Badge');

export function validateBadgeIcon(imageSize: number, iconProp: IconProp): void {
  if (imageSize < 24 && iconProp) {
    return warnImageBaseBadge('Не используйте бейдж при `size < 24`.', 'log');
  }
  validateIconComponentSizeByImageSize(
    imageSize,
    iconProp,
    getBadgeIconSizeByImageBaseSize,
    warnImageBaseBadge,
  );
}

const warnImageBaseOverlay = warnOnce('ImageBase.Overlay');

export function validateOverlayIcon(imageSize: number, iconProp: IconProp): void {
  validateIconComponentSizeByImageSize(
    imageSize,
    iconProp,
    getOverlayIconSizeByImageBaseSize,
    warnImageBaseOverlay,
  );
}
