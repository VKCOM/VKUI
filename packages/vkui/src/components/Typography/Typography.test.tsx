import { render, screen } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { Typography, type TypographyProps } from './Typography';
import styles from './Typography.module.css';
import rootComponentStyles from '../RootComponent/RootComponent.module.css';

describe('Typography', () => {
  baselineComponent(Typography);

  it.each<{
    props: Partial<TypographyProps>;
    hasClassName: string;
  }>([
    {
      props: {},
      hasClassName: '', // по умолчанию Typography
    },
    {
      props: { weight: '1' },
      hasClassName: `${styles.weight1}`,
    },
    {
      props: { weight: '2' },
      hasClassName: `${styles.weight2}`,
    },
    {
      props: { weight: '3' },
      hasClassName: `${styles.weight3}`,
    },
    {
      props: { weight: '1', useAccentWeight: true },
      hasClassName: `${styles.weight1} ${styles.accent}`,
    },
    {
      props: { weight: '2', useAccentWeight: true },
      hasClassName: `${styles.weight2} ${styles.accent}`,
    },
    {
      props: { weight: '3', useAccentWeight: true },
      hasClassName: `${styles.weight3} ${styles.accent}`,
    },
    {
      props: { weight: '1', useAccentWeight: false },
      hasClassName: `${styles.weight1}`,
    },
    {
      props: { weight: '2', useAccentWeight: false },
      hasClassName: `${styles.weight2}`,
    },
    {
      props: { weight: '3', useAccentWeight: false },
      hasClassName: `${styles.weight3}`,
    },
    {
      props: { normalize: true, inline: true },
      hasClassName: `${styles.normalize} ${styles.inline}`,
    },
  ])('it should have className $hasClassName with props $props', ({ props, hasClassName }) => {
    render(<Typography {...props}>Test</Typography>);

    expect(screen.getByText('Test')).toHaveClass(
      `${styles.host} ${hasClassName} ${rootComponentStyles.host}`,
      {
        exact: true,
      },
    );
  });
});
