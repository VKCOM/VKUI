import { ModalPageHeader, Search } from '@vkontakte/vkui';

interface SearchHeaderProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function SearchHeader({ value, onChange }: SearchHeaderProps) {
  return (
    <ModalPageHeader>
      <Search value={value} onChange={onChange} placeholder="Начните искать..." noPadding />
    </ModalPageHeader>
  );
}
