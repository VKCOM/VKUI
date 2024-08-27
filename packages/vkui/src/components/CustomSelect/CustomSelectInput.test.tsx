import { render } from '@testing-library/react';
import { baselineComponent } from '../../testing/utils';
import { CustomSelectInput, type CustomSelectInputProps } from './CustomSelectInput';
import styles from './CustomSelectInput.module.css';

describe(CustomSelectInput, () => {
  baselineComponent(CustomSelectInput, {
    a11y: false,
  });

  it.each<{ props: Partial<CustomSelectInputProps>; className: string }>([
    {
      props: {
        align: 'right',
      },
      className: styles['CustomSelectInput--align-right'],
    },
    {
      props: {
        align: 'center',
      },
      className: styles['CustomSelectInput--align-center'],
    },
    {
      props: {
        multiline: true,
      },
      className: styles['CustomSelectInput--multiline'],
    },
    {
      props: {
        before: 'before',
      },
      className: styles['CustomSelectInput--hasBefore'],
    },
    {
      props: {
        after: 'after',
      },
      className: styles['CustomSelectInput--hasAfter'],
    },
    {
      props: {},
      className: styles['CustomSelectInput--empty'],
    },
  ])(`should have className $className when props $props`, ({ props, className }) => {
    const ref = {
      current: null,
    };
    render(<CustomSelectInput getRootRef={ref} {...props} />);
    expect(ref.current!).toHaveClass(className);
  });
});
