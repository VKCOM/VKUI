import type * as React from 'react';
import { expectTypeOf, it } from 'vitest';
import type { InputProps } from './components/Input/Input';
import type { TypographyProps } from './components/Typography/Typography';
// eslint-disable-next-line no-restricted-syntax -- проверяем публичный экспорт типа
import type { HasRootRef } from './index';

interface SvgProps extends React.ComponentProps<'svg'>, HasRootRef<SVGElement> {}

interface ButtonProps extends React.ComponentProps<'button'>, HasRootRef<HTMLElement> {}

it('allows HasRootRef to extend DOM props with their own ref type', () => {
  expectTypeOf<SvgProps['ref']>().toEqualTypeOf<React.ComponentProps<'svg'>['ref']>();
  expectTypeOf<ButtonProps['ref']>().toEqualTypeOf<React.ComponentProps<'button'>['ref']>();
  expectTypeOf<SvgProps['getRootRef']>().toEqualTypeOf<React.Ref<SVGElement> | undefined>();
  expectTypeOf<ButtonProps['getRootRef']>().toEqualTypeOf<React.Ref<HTMLElement> | undefined>();
});

it('supports ref in component props', () => {
  expectTypeOf<TypographyProps['ref']>().toEqualTypeOf<React.Ref<HTMLElement> | undefined>();
  expectTypeOf<InputProps['ref']>().toEqualTypeOf<React.Ref<HTMLDivElement> | undefined>();
});
