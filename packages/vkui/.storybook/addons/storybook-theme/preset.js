function managerEntries(entry = []) {
  return [...entry, require.resolve('./register.ts')];
}

module.exports = {
  managerEntries,
};
