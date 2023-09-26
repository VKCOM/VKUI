import * as React from 'react';
import { noop } from '@vkontakte/vkjs';
import { baselineComponent } from '../../testing/utils';
import { Clickable } from './Clickable';

describe('Clickable', () => {
  baselineComponent(Clickable);

  baselineComponent((props) => (
    <Clickable onClick={noop} {...props}>
      content
    </Clickable>
  ));

  baselineComponent((props) => (
    <Clickable href="" {...props}>
      content
    </Clickable>
  ));
  baselineComponent((props) => (
    <Clickable onClick={noop} disabled {...props}>
      content
    </Clickable>
  ));

  baselineComponent((props) => (
    <Clickable href="" disabled {...props}>
      content
    </Clickable>
  ));

  baselineComponent((props) => (
    <Clickable Component="span" {...props}>
      content
    </Clickable>
  ));
});
