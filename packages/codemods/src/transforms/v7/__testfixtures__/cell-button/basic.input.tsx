import { CellButton } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      {/* mode="primary" -> appearance="accent" */}
      <CellButton mode="primary">
        Создать что-нибудь
      </CellButton>

      {/* mode="primary" -> appearance="accent" */}
      <CellButton mode={"primary"}>
        Создать что-нибудь
      </CellButton>

      {/* mode="danger" -> appearance="negative" */}
      <CellButton mode="danger">
        Создать что-нибудь
      </CellButton>

      {/* mode="danger" -> appearance="negative" */}
      <CellButton mode={"danger"}>
        Создать что-нибудь
      </CellButton>

      {/* do nothing 1 */}
      <CellButton>
        Создать что-нибудь
      </CellButton>

      {/* do nothing 2 */}
      <CellButton centered>
        Создать что-нибудь
      </CellButton>

      {/* rename subhead -> overtitle */}
      <CellButton centered subhead={"Subhead"}>
        Создать что-нибудь
      </CellButton>
    </React.Fragment>
  );
};
