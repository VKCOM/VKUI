function managerEntries(entry = []) {
  return [...entry, require.resolve('./src/preset/manager.ts')];
}

module.exports = {
  managerEntries,
};
