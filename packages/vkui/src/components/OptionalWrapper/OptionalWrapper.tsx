import React from 'react';
import { hasReactNode } from '@vkontakte/vkjs';
import { HasChildren } from '../../types';
import { Footnote, FootnoteProps } from '../Typography/Footnote/Footnote';
import { Subhead, SubheadProps } from '../Typography/Subhead/Subhead';

const optionalComponent = <T extends HasChildren>(Component: React.ElementType, props: T) =>
  hasReactNode(props.children) ? <Component {...props} /> : null;

/**
 * div обертка для опциональных свойств
 */
export const OptionalDiv = (props: React.ComponentProps<'div'>) => optionalComponent('div', props);

/**
 * span обертка для опциональных свойств
 */
export const OptionalSpan = (props: React.ComponentProps<'span'>) =>
  optionalComponent('span', props);

/**
 * Footnote обертка для опциональных свойств
 */
export const OptionalFootnote = (props: FootnoteProps) => optionalComponent(Footnote, props);

/**
 * Subhead обертка для опциональных свойств
 */
export const OptionalSubhead = (props: SubheadProps) => optionalComponent(Subhead, props);
