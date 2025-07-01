(function () {
  try {
    const params = new URLSearchParams(window.location.search);
    const value = params.get('uwu');
    if (['', 'true', '1'].includes(value)) {
      document.documentElement.classList.add('uwu');
    }
  } catch (err) {}
})();
