import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { AdaptivityProvider, ConfigProvider } from '@vkontakte/vkui';
import App from './App';
import '@vkontakte/vkui/dist/cssm/styles/themes.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider>
      <AdaptivityProvider>
        <App />
      </AdaptivityProvider>
    </ConfigProvider>
  </React.StrictMode>,
);
