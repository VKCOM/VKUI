import { render } from '@testing-library/react';
import { baselineComponent } from '../../../testing/utils';
import { CustomSelectInput, type CustomSelectInputProps } from './CustomSelectInput';
import styles from './CustomSelectInput.module.css';

describe(CustomSelectInput, () => {
  baselineComponent((props) => <CustomSelectInput {...props} placeholder="Select label" />);

  it.each<{ props: Partial<CustomSelectInputProps>; className: string }>([
    {
      props: {
        align: 'right',
      },
      className: styles.alignRight,
    },
    {
      props: {
        align: 'center',
      },
      className: styles.alignCenter,
    },
    {
      props: {
        multiline: true,
      },
      className: styles.multiline,
    },
    {
      props: {
        before: 'before',
      },
      className: styles.hasBefore,
    },
    {
      props: {
        after: 'after',
      },
      className: styles.hasAfter,
    },
    {
      props: {},
      className: styles.empty,
    },
  ])(`should have className $className when props $props`, ({ props, className }) => {
    const ref = {
      current: null,
    };
    render(<CustomSelectInput getRootRef={ref} {...props} />);
    expect(ref.current!).toHaveClass(className);
  });
});
