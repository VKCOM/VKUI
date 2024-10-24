import { CustomScrollView, Div, Flex } from '@vkontakte/vkui';
import React, {useRef} from 'react';

const App = () => {
  const ref = useRef();
  return (
    <React.Fragment>
      {/* Проверяем удаление старый пропов */}
      <CustomScrollView
        className={"className"}
        windowResize
        autoHideScrollbar
        autoHideScrollbarDelay={1000}
        enableHorizontalScroll
      >
        <Flex>
          <Div/>
        </Flex>
      </CustomScrollView>
      {/* Заменяем boxRef на getRootRef */}
      <CustomScrollView
        boxRef={ref}
      >
        <Flex>
          <Div/>
        </Flex>
      </CustomScrollView>
    </React.Fragment>
  );
};
