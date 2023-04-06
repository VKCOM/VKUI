function managerEntries(entry = []) {
  return [...entry, require.resolve('./src/preset/manager.tsx')];
}

module.exports = {
  managerEntries,
};
