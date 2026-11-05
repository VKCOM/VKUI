'use client';
import { Flex } from '@vkontakte/vkui';

type DoGridProps = {
  children?: React.ReactNode | undefined;
};

export function DoGrid(props: DoGridProps) {
  return <Flex gap="m" {...props} />;
}
