import { Card, CardScroll } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      {/* noSpaces by default -> padding=true */}
      <CardScroll
        size="s"
      >
        <Card>
          <div style={{ paddingBottom: '66%' }} />
        </Card>
        <Card>
          <div style={{ paddingBottom: '66%' }} />
        </Card>
      </CardScroll>

      {/* noSpaces="false" -> padding="true" */}
      <CardScroll
        size="s"
        noSpaces={false}
      >
        <Card>
          <div style={{ paddingBottom: '66%' }} />
        </Card>
        <Card>
          <div style={{ paddingBottom: '66%' }} />
        </Card>
      </CardScroll>

      {/* noSpaces="true" -> padding="false" */}
      <CardScroll
        size="s"
        noSpaces={true}
      >
        <Card>
          <div style={{ paddingBottom: '66%' }} />
        </Card>
        <Card>
          <div style={{ paddingBottom: '66%' }} />
        </Card>
      </CardScroll>

      {/* noSpaces="true" -> padding="false" */}
      <CardScroll
        size="s"
        noSpaces
      >
        <Card>
          <div style={{ paddingBottom: '66%' }} />
        </Card>
        <Card>
          <div style={{ paddingBottom: '66%' }} />
        </Card>
      </CardScroll>
    </React.Fragment>
  );
};
