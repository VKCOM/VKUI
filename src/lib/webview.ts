import connect from '@vkontakte/vkui-connect';

export const isWebView: boolean = connect.supports('VKWebAppInit');
