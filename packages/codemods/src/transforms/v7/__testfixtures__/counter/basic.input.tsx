import { Cell, Counter, VisuallyHidden } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      {/* primary → mode = "primary" appearance = "accent" */}
      <Counter mode="primary">
        2
      </Counter>
      {/* secondary → mode = "primary" appearance = "neutral" */}
      <Counter mode="secondary">
        2
      </Counter>
      {/* prominent → mode = "primary" appearance = "accent-red" */}
      <Counter mode="prominent">
        2
      </Counter>
      {/* contrast→ mode = "contrast" appearance = "accent" */}
      <Counter mode="contrast">
        2
      </Counter>
      {/* inherit → оставляем */}
      <Counter mode="inherit">
        2
      </Counter>
      {/* mode отсутствует -> ничего не делаем */}
      <Counter>
        2
      </Counter>
      {/* Проверяем обработку вложенных Counter */}
      <Cell
        indicator={
          <Counter mode="prominent">
            <VisuallyHidden>Новых:</VisuallyHidden> 224
          </Counter>
        }
      >
        Сообщения
      </Cell>
    </React.Fragment>
  );
};
