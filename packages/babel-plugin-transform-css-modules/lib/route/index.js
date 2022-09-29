const path = require("path");

const resolveResourceRelativePathBySourcePath = (source, filename) => {
  const targetFileDirectoryPath = path.dirname(filename);

  if (source.startsWith(".")) {
    return path.resolve(targetFileDirectoryPath, source);
  }

  return require.resolve(source);
};

module.exports = { resolveResourceRelativePathBySourcePath };
