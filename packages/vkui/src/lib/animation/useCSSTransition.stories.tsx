/* eslint-disable no-console, import/no-default-export */
'use client';

import { type Meta, type StoryObj } from '@storybook/react';
import { classNames } from '@vkontakte/vkjs';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import type { CSSCustomProperties } from '../../types';
import {
  useCSSTransition,
  type UseCSSTransitionOptions,
  type UseCSSTransitionState,
} from './useCSSTransition';
import styles from './useCSSTransition.stories.module.css';

interface DemoProps extends UseCSSTransitionOptions {
  in: boolean;
  duration: number;
}

const story: Meta<DemoProps> = {
  title: 'DevTools/useCSSTransition',
  tags: ['test'], // скрываем из публичной документации, т.к. хук внутренний
  component: () => <div />,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
  argTypes: {
    in: { control: { type: 'boolean' } },
    enableAppear: { control: { type: 'boolean' } },
    enableEnter: { control: { type: 'boolean' } },
    enableExit: { control: { type: 'boolean' } },
    duration: {
      control: {
        type: 'number',
      },
      table: {
        defaultValue: {
          summary: '⚠️ Это параметр данного Story',
        },
      },
    },
  },
  args: {
    duration: 1,
    in: true,
    enableAppear: true,
    enableEnter: true,
    enableExit: true,
    onEnter(appear) {
      console.log('onEnter', appear);
    },
    onEntering(appear) {
      console.log('onEntering', appear);
    },
    onEntered(propertyName, appear) {
      console.log('onEntered', propertyName, appear);
    },
    onExit() {
      console.log('onExit');
    },
    onExiting() {
      console.log('onExiting');
    },
    onExited(propertyName) {
      console.log('onExited', propertyName);
    },
  },
};

export default story;

const transitionClassNames = {
  appear: styles.appear,
  appearing: styles.appearing,
  appeared: styles.appeared,
  enter: styles.enter,
  entering: styles.entering,
  entered: styles.entered,
  exit: styles.exit,
  exiting: styles.exiting,
  exited: styles.exited,
};

export const WithClassNameAttribute: StoryObj<DemoProps> = {
  render: function Render({ in: inProp, duration, ...restProps }) {
    const [state, { ref, onTransitionEnd }] = useCSSTransition<HTMLDivElement>(inProp, restProps);

    if (state === 'exited') {
      return <div />;
    }

    return (
      <div
        ref={ref}
        className={classNames(styles.host, transitionClassNames[state])}
        style={
          duration
            ? ({ '--css-transition-duration': `${duration}s` } as unknown as CSSCustomProperties)
            : undefined
        }
        onTransitionEnd={onTransitionEnd}
      />
    );
  },
};

const getTransition = (state: UseCSSTransitionState, duration = 1) =>
  ({
    appear: {
      opacity: 0,
    },

    appearing: {
      opacity: 1,
      transition: `opacity ${duration}s ease-in-out`,
    },

    appeared: {
      opacity: 1,
    },

    enter: {
      opacity: 0,
      transform: 'translateY(-25%) rotate(25deg)',
      transformOrigin: 'center center',
    },

    entering: {
      opacity: 1,
      transform: 'translateY(0) rotate(0deg)',
      transformOrigin: 'center center',
      transition: `transform ${duration}s ease-in-out, opacity ${duration}s ease-in-out`,
    },

    entered: {
      opacity: 1,
    },

    exit: {
      opacity: 1,
      transform: 'translateY(0) rotate(0deg)',
    },

    exiting: {
      opacity: 0,
      transform: 'translateY(-25%) rotate(25deg)',
      transformOrigin: 'center center',
      transition: `transform ${duration}s ease-in-out, opacity ${duration}s ease-in-out`,
    },

    exited: {
      opacity: 0,
      transform: 'translateY(-25%) rotate(25deg)',
    },
  })[state];

export const WithStyleAttribute: StoryObj<DemoProps> = {
  render: function Render({ in: inProp, duration, ...restProps }) {
    const [state, { ref, onTransitionEnd }] = useCSSTransition<HTMLDivElement>(inProp, restProps);

    if (state === 'exited') {
      return <div />;
    }

    return (
      <div
        ref={ref}
        className={styles.host}
        style={getTransition(state, duration)}
        onTransitionEnd={onTransitionEnd}
      />
    );
  },
};
