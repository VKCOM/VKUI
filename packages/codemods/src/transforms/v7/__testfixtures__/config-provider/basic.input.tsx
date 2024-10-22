import { ConfigProvider, ConfigProviderContext } from '@vkontakte/vkui';
import React, {createContext} from 'react';

const OtherContext = createContext({});


const App = () => {
  const contextValue = {}
  return (
    <>
      <ConfigProvider
        appearance={"dark"}
        {...contextValue}
      >
        <div></div>
      </ConfigProvider>

      <ConfigProviderContext.Provider value={{
        appearance: 'light',
        ...contextValue
      }}>
        <div></div>
      </ConfigProviderContext.Provider>

      <OtherContext.Provider value={{
        appearance: 'light',
        ...contextValue
      }}>
        <div></div>
      </OtherContext.Provider>
    </>
  );
};
