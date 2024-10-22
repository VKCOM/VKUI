import { Header, Icon12ChevronOutline, Link } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  const aside = (
    <Link>
      Показать все
      {<Icon12ChevronOutline />}
    </Link>
  )

  return (
    <React.Fragment>
      {/* Проверка изменения size */}
      <Header mode="primary" multiline size="large">
        Кто может писать мне личные сообщения
      </Header>
      <Header mode="secondary" multiline size="regular">
        Кто может писать мне личные сообщения
      </Header>

      {/* Проверка замены aside на after */}
      <Header
        mode="primary"
        subtitle="SOHN — Conrad"
        subtitleComponent="h3"
        aside={
          <Link>
            Показать все
            {<Icon12ChevronOutline />}
          </Link>
        }
      />
      <Header
        mode="primary"
        subtitle="SOHN — Conrad"
        subtitleComponent="h3"
        aside={aside}
      />
    </React.Fragment>
  );
};
