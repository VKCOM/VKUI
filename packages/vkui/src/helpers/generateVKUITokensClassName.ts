export const generateVKUITokensClassName = (platform: string, appearance: string): string => {
  let tokensPlatform;
  switch (platform) {
    case 'android':
      tokensPlatform = 'vkBase';
      break;
    case 'ios':
      tokensPlatform = 'vkIOS';
      break;
    case 'vkcom':
      tokensPlatform = 'vkCom';
      break;
    default:
      tokensPlatform = platform;
  }

  return `vkui--${tokensPlatform}--${appearance}`;
};
