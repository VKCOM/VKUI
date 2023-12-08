import { Pagination } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <Pagination
        currentPage={currentPage}
        onChange={handleChange}
        prevButtonLabel="prevButtonLabel"
        nextButtonLabel="nextButtonLabel"
      />
    </React.Fragment>
  );
};

