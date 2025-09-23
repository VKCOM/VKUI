(function () {
  function getUwuFromStorage() {
    return localStorage.getItem('uwu') === 'true';
  }

  function setUwuToStorage(enabled) {
    if (enabled) {
      localStorage.setItem('uwu', 'true');
    } else {
      localStorage.removeItem('uwu');
    }
  }

  try {
    const params = new URLSearchParams(window.location.search);
    const value = params.get('uwu');
    const enableFromUrl = ['', 'true', '1'].includes(value);
    const disableFromUrl = value !== null && !enableFromUrl;
    const enableFromStorage = getUwuFromStorage();

    let enabled;

    if (enableFromUrl || enableFromStorage) {
      enabled = true;
    }
    if (disableFromUrl) {
      enabled = false;
    }

    if (enabled !== undefined) {
      setUwuToStorage(enabled);
    }

    const rootElement = document.documentElement;

    if (enabled) {
      rootElement.classList.add('uwu');
    }

    const mutationObserver = new MutationObserver(() => {
      setUwuToStorage(rootElement.classList.contains('uwu'));
    });
    mutationObserver.observe(rootElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
  } catch (err) {}
})();
