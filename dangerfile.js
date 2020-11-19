import { fail, warn } from "danger"
const dangerJest = require('danger-plugin-jest').default;
const fs = require('fs')
const path = require('path')

const lintPath = path.join(__dirname, 'lint-results.json')

function lint() {
  return new Promise((ok, fail) => {
    return fs.readFile(lintPath, (err, file) => err ? fail(err) : ok(JSON.parse(file)));
  }).then(lintReport => {
    for (const { messages, filePath } of lintReport) {
      const relPath = path.relative(__dirname, filePath)
      for (const message of messages) {
        const text = `${message.message} \`${message.ruleId}\``
        if (message.severity === 2) {
          fail(text, relPath, message.line);
        } else if (message.severity === 1) {
          warn(text, relPath, message.line);
        }
      }
    }
  });
}

Promise.all([
  dangerJest(),
  lint(),
]);
