import { cleanup, render, screen, waitFor } from '@testing-library/react';
import { Flex } from '@vkontakte/vkui';
import { afterEach, expect, it } from 'vitest';
import { EditedPreview } from './EditedPreview';

afterEach(cleanup);

it.each([
  '<Button>First</Button><Button>Second</Button>',
  'return <><Button>First</Button><Button>Second</Button></>;',
])('keeps edited example elements as direct flex children: %s', async (code) => {
  const { container } = render(
    <Flex direction="column" gap="m">
      <EditedPreview code={code} />
    </Flex>,
  );

  await waitFor(() => {
    expect(screen.getByRole('button', { name: 'First' }).parentElement).toBe(
      container.firstElementChild,
    );
    expect(screen.getByRole('button', { name: 'Second' }).parentElement).toBe(
      container.firstElementChild,
    );
  });
});
