declare module '*.module.css' {
  const styles: { [key: string]: string };
  // eslint-disable-next-line import/no-default-export
  export default styles;
}

declare module '*.svg';

// Фиксируем process.env, так как vite передает только NODE_ENV
declare module 'process' {
  declare global {
    namespace NodeJS {
      interface Process {
        env: {
          readonly NODE_ENV: 'development' | 'production' | 'test';
          TZ: string;
        };
      }
    }
  }
}
