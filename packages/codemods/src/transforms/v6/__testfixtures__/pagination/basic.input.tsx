import { Pagination } from '@vkontakte/vkui';
import React from 'react';

export const App = () => {
  return (
    <React.Fragment>
      <Pagination
        currentPage={currentPage}
        onChange={handleChange}
        prevButtonAriaLabel="prevButtonLabel"
        nextButtonAriaLabel="nextButtonLabel"
      />
    </React.Fragment>
  );
};
