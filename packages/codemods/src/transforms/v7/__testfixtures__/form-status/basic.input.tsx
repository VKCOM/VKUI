import { FormStatus } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <FormStatus header="Некорректный мобильный номер" mode="error">
        Необходимо корректно ввести номер в международном формате
      </FormStatus>
    </React.Fragment>
  );
};
