export const isWebView = !!(window && (window.AndroidBridge || (window.webkit && window.webkit.messageHandlers)));
