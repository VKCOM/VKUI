export class VKUIGlobalTokensClassNameUsage {
  public window: VKUIPrivateGlobalInterface;
  public className: string;

  constructor(window: Window | undefined, className: string) {
    const windowObject = extendWindowByVKUI(window || {});
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
    this.window.__VKUI__.globalTokensClassNameUsage[this.className] = currentUsage + 1;
    if (currentUsage) {
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

function extendWindowByVKUI(
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
