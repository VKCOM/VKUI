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
      <Header multiline size="large">
        Кто может писать мне личные сообщения
      </Header>
      <Header multiline size="regular">
        Кто может писать мне личные сообщения
      </Header>

      {/* Проверка замены aside на after */}
      <Header
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
        subtitle="SOHN — Conrad"
        subtitleComponent="h3"
        aside={aside}
      />

      {/* Проверка удаления mode */}
      {/* замена Large Primary на xl */}
      <Header
        mode="primary"
        size="large"
        subtitle="SOHN — Conrad"
      />

      {/* замена Large tertiary на m */}
      <Header
        mode="tertiary"
        size="large"
        subtitle="SOHN — Conrad"
      />
      {/* замена Regular tertiary на m */}
      <Header
        mode="tertiary"
        size="regular"
        subtitle="SOHN — Conrad"
      />
      {/* замена Regular primary на m */}
      <Header
        mode="primary"
        size="regular"
        subtitle="SOHN — Conrad"
      />
      {/* замена Large secondary на m */}
      <Header
        mode="secondary"
        size="large"
        subtitle="SOHN — Conrad"
      />
      {/* замена Regular secondary на s */}
      <Header
        mode="secondary"
        size="regular"
        subtitle="SOHN — Conrad"
      />
    </React.Fragment>
  );
};
