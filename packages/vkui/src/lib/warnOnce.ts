type WarnOnceType = 'log' | 'warn' | 'error';
export type WarnOnceHandler = (message: string, type?: WarnOnceType) => void;

export function warnOnce(zone: string): WarnOnceHandler {
  const didWarn = new Set<string>();

  return (message: string, type: WarnOnceType = 'warn') => {
    if (!didWarn.has(message)) {
      didWarn.add(message);

      const formattedMessage = `%c[VKUI/${zone}] ${message}`;
      const styles = type === 'log' ? 'color: steelblue; font-style: italic' : undefined;

      console[type](formattedMessage, styles);
    }
  };
}

function getA11yRuleUrl(ruleName: string): string {
  // see jest-axe's axe-core dependency
  const AXE_CORE_MINOR_VERSION = '4.5';

  return `https://dequeuniversity.com/rules/axe/${AXE_CORE_MINOR_VERSION}/${ruleName}`;
}

export const COMMON_WARNINGS = {
  a11y: {
    'button-name': `a11y: Кнопка должна содержать текст, доступный для скринридеров. Чтобы исправить эту ошибку, передайте компоненту текст или свойство aria-label.
${getA11yRuleUrl('link-name')}`,
    'link-name': `a11y: Ссыдка должна содержать текст, доступный для скринридеров. Чтобы исправить эту ошибку, передайте компоненту текст или свойство aria-label.
${getA11yRuleUrl('link-name')}`,
    'image-alt': `a11y: Изображение должно содержать альтернативный текст, который его описывает. Чтобы исправить эту ошибку, передайте компоненту свойство alt.
${getA11yRuleUrl('image-alt')}`,
  },
};
