import { Placeholder } from '@vkontakte/vkui';

interface SearchPlaceholderProps {
  children: React.ReactNode;
}

export function SearchPlaceholder({ children }: SearchPlaceholderProps) {
  return <Placeholder>{children}</Placeholder>;
}
