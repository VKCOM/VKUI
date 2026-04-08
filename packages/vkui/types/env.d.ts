// Фиксируем process.env, так как vite передает только NODE_ENV
declare const process: {
  readonly env: {
    readonly NODE_ENV: 'development' | 'production' | 'test';
  };
};
