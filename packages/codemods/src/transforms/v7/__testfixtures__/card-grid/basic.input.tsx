import { Card, CardGrid } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      {/* spaced=false -> padding=false */}
      <CardGrid
        size="s"
        spaced={false}
      >
        <Card>
          <div style={{ paddingBottom: '66%' }} />
        </Card>
        <Card>
          <div style={{ paddingBottom: '66%' }} />
        </Card>
      </CardGrid>
      {/* spaced=true -> padding=true */}
      <CardGrid
        size="s"
        spaced={true}
      >
        <Card>
          <div style={{ paddingBottom: '66%' }} />
        </Card>
        <Card>
          <div style={{ paddingBottom: '66%' }} />
        </Card>
      </CardGrid>
      {/* spaced -> padding */}
      <CardGrid
        size="s"
        spaced
      >
        <Card>
          <div style={{ paddingBottom: '66%' }} />
        </Card>
        <Card>
          <div style={{ paddingBottom: '66%' }} />
        </Card>
      </CardGrid>
    </React.Fragment>
  );
};
