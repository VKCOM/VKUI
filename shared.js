const path = require("path");

module.exports = {
  generateScopedName: (name) => {
    return name.startsWith("vkui") || name === "mount" ? name : `vkui${name}`;
  },
  cssCustomPropertiesPaths: [
    path.join(__dirname, "src/styles/bright_light.css"),
    path.join(__dirname, "src/styles/constants.css"),
  ],
};
