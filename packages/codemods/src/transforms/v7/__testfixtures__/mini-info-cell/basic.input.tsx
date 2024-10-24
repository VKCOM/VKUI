import { Icon20WorkOutline, MiniInfoCell } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <MiniInfoCell
        before={<Icon20WorkOutline />}
        mode="add"
        onClick={() => console.log('Указать место учёбы')}
        textWrap="short"
        expandable
      >
        Укажите место учёбы
      </MiniInfoCell>

      <MiniInfoCell
        before={<Icon20WorkOutline />}
        mode="add"
        onClick={() => console.log('Указать место учёбы')}
        textWrap="short"
        expandable={false}
      >
        Укажите место учёбы
      </MiniInfoCell>
    </React.Fragment>
  );
};
