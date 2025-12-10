import { ChipsSelect } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  const colors = React.useMemo(
    () => [
      { value: 'red', label: 'Красный' },
      { value: 'blue', label: 'Синий' },
      { value: 'navarin', label: 'Наваринского пламени с дымом' },
    ],
    [],
  );
  const [selectedColors, setSelectedColors] = React.useState(() => colors.slice(0, 2));

  return (
    <React.Fragment>
      <ChipsSelect
        id="colors"
        value={selectedColors}
        onChange={setSelectedColors}
        options={colors}
        autoHideScrollbar
        autoHideScrollbarDelay={1500}
        placeholder="Не выбраны"
        creatable="Добавить цвет"
        allowClearButton={true}
        {...props}
      />
    </React.Fragment>
  );
};
