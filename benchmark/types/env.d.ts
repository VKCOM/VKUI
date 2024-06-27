declare module '*.module.css' {
  const styles: { [key: string]: string };
  // eslint-disable-next-line import/no-default-export
  export default styles;
}

declare module '*.svg';

interface Window {
  timing: {
    render: number;
  };
}

// Фиксируем process.env, так как vite передает только NODE_ENV
declare module 'process' {
  declare global {
    namespace NodeJS {
      interface Process {
        env: {
          NODE_ENV: 'development' | 'production' | 'test';
          WEB_SERVER_HOST: string;
          WEB_SERVER_PORT: number;
          STATIC_BUILD_DIR: string;
          CI?: boolean;
          PLAYWRIGHT_WORKERS?: number;
        };
      }
    }
  }
}
