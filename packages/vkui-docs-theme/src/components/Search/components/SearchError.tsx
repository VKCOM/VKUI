import { Div, FormStatus } from '@vkontakte/vkui';

interface SearchErrorProps {
  message: string;
}

export function SearchError({ message }: SearchErrorProps) {
  return (
    <Div>
      <FormStatus title="Произошла ошибка" mode="error">
        {message}
      </FormStatus>
    </Div>
  );
}
