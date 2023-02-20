declare module '*.module.css' {
  const styles: { [key: string]: string };
  // eslint-disable-next-line import/no-default-export
  export default styles;
}

declare module '*.svg';
