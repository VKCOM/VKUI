import { PopoutWrapper } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      {/* fixed без значения - просто удаляем */}
      <PopoutWrapper fixed>
        <div>Content 1</div>
      </PopoutWrapper>

      {/* fixed={true} - просто удаляем */}
      <PopoutWrapper fixed={true}>
        <div>Content 2</div>
      </PopoutWrapper>

      {/* fixed={false} - удаляем и добавляем strategy="none" */}
      <PopoutWrapper fixed={false}>
        <div>Content 3</div>
      </PopoutWrapper>

      {/* fixed={false} с другими пропами - удаляем и добавляем strategy="none" */}
      <PopoutWrapper fixed={false} alignX="left" alignY="top">
        <div>Content 4</div>
      </PopoutWrapper>

      {/* без fixed - ничего не меняем */}
      <PopoutWrapper alignX="center">
        <div>Content 5</div>
      </PopoutWrapper>

      {/* fixed={false} но уже есть strategy - только удаляем fixed */}
      <PopoutWrapper fixed={false} strategy="absolute">
        <div>Content 6</div>
      </PopoutWrapper>
    </React.Fragment>
  );
};

