/*
 * Специальная обертка для работы с window и глобальной переменной __VKUI__.
 *
 * Необходима для подсчёта колличества VKUI приложений
 * которые используют одинаковый className на body.
 * Необходима для того, чтобы приложения,
 * при размотировании не удаляли класс, небходимый для токенов, с body,
 * если этот класс ещё используется другими приложениями.
 *
 * см. https://github.com/VKCOM/VKUI/issues/5518
 * */
export class VKUIGlobalTokensClassNameUsage {
  private readonly window: VKUIPrivateGlobalInterface;
  private className: string;

  constructor(window: Window | undefined, className: string) {
    const windowObject = extendWindowWithVKUIVariable(window || {});
    if (!windowObject.__VKUI__.globalTokensClassNameUsage[className]) {
      windowObject.__VKUI__.globalTokensClassNameUsage[className] = 0;
    }

    this.window = windowObject;
    this.className = className;
  }

  incrementUsageNumber(): void {
    const currentUsage = this.window.__VKUI__.globalTokensClassNameUsage[this.className] ?? 0;
    this.window.__VKUI__.globalTokensClassNameUsage[this.className] = currentUsage + 1;
  }

  decrementUsageNumber(): void {
    const currentUsage = this.window.__VKUI__.globalTokensClassNameUsage[this.className] ?? 0;
    if (currentUsage > 0) {
      this.window.__VKUI__.globalTokensClassNameUsage[this.className] = currentUsage - 1;
    }
  }

  isInUse(): boolean {
    return Boolean(this.window.__VKUI__.globalTokensClassNameUsage[this.className]);
  }
}

function isExtendedByVKUI(
  windowInput: Partial<VKUIPrivateGlobalInterface>,
): windowInput is VKUIPrivateGlobalInterface {
  return Boolean(
    windowInput && windowInput.__VKUI__ && windowInput.__VKUI__.globalTokensClassNameUsage,
  );
}

function extendWindowWithVKUIVariable(
  windowInput: Partial<VKUIPrivateGlobalInterface>,
): VKUIPrivateGlobalInterface {
  const windowObject: Partial<VKUIPrivateGlobalInterface> = windowInput || {
    __VKUI__: { globalTokensClassNameUsage: {} },
  };
  if (!windowObject.__VKUI__) {
    windowObject.__VKUI__ = {
      globalTokensClassNameUsage: {},
    };
  }

  if (!windowObject.__VKUI__.globalTokensClassNameUsage) {
    windowObject.__VKUI__.globalTokensClassNameUsage = {};
  }

  if (!isExtendedByVKUI(windowObject)) {
    throw new Error('Can not extend window with VKUI private variable');
  }

  return windowObject;
}
