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
      hasClassName: `${styles['Typography--weight-1']}`,
    },
    {
      props: { weight: '2' },
      hasClassName: `${styles['Typography--weight-2']}`,
    },
    {
      props: { weight: '3' },
      hasClassName: `${styles['Typography--weight-3']}`,
    },
    {
      props: { weight: '1', useAccentWeight: true },
      hasClassName: `${styles['Typography--weight-1']} ${styles['Typography--accent']}`,
    },
    {
      props: { weight: '2', useAccentWeight: true },
      hasClassName: `${styles['Typography--weight-2']} ${styles['Typography--accent']}`,
    },
    {
      props: { weight: '3', useAccentWeight: true },
      hasClassName: `${styles['Typography--weight-3']} ${styles['Typography--accent']}`,
    },
    {
      props: { weight: '1', useAccentWeight: false },
      hasClassName: `${styles['Typography--weight-1']}`,
    },
    {
      props: { weight: '2', useAccentWeight: false },
      hasClassName: `${styles['Typography--weight-2']}`,
    },
    {
      props: { weight: '3', useAccentWeight: false },
      hasClassName: `${styles['Typography--weight-3']}`,
    },
    {
      props: { normalize: true, inline: true },
      hasClassName: `${styles['Typography--normalize']} ${styles['Typography--inline']}`,
    },
  ])('it should have className $hasClassName with props $props', ({ props, hasClassName }) => {
    render(<Typography {...props}>Test</Typography>);

    expect(screen.getByText('Test')).toHaveClass(
      `${styles['Typography']} ${hasClassName} ${rootComponentStyles['RootComponent']}`,
      {
        exact: true,
      },
    );
  });
});
