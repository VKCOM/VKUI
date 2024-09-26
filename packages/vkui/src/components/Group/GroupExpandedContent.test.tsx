import { render, screen } from '@testing-library/react';
import { GroupExpandedContent, type GroupExpandedContentProps } from './GroupExpandedContent';
import styles from './Group.module.css';

describe('GroupExpandedContent', () => {
  it.each<{ direction: GroupExpandedContentProps['direction']; className: string }>([
    {
      direction: undefined,
      className: styles.expandedContentInline,
    },
    {
      direction: 'inline',
      className: styles.expandedContentInline,
    },
    {
      direction: 'block',
      className: styles.expandedContentBlock,
    },
  ])(
    'should have className "$className" with direction "$direction"',
    async ({ direction, className }) => {
      render(<GroupExpandedContent direction={direction}>Content</GroupExpandedContent>);
      expect(screen.getByText('Content')).toHaveClass(className);
    },
  );
});
