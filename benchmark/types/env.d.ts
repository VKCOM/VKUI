declare module '*.svg';

declare module 'process' {
  declare global {
    namespace NodeJS {
      interface Process {
        env: {
          NODE_ENV: 'development' | 'production' | 'test';
          WEB_SERVER_HOST: string;
          PLAYWRIGHT_BLOB_OUTPUT_DIR: string;
          WEB_SERVER_PORT: number;
          STATIC_BUILD_DIR: string;
          CI?: boolean;
          PLAYWRIGHT_WORKERS?: number;
        };
      }
    }
  }
}
