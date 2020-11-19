import { fail, message, warn } from "danger"
const dangerJest = require('danger-plugin-jest').default;
const fs = require('fs');
const path = require('path');

const readFileP = path => new Promise((ok, fail) => fs.readFile(path, (err, file) => err ? fail(err) : ok(file)))

const lintPath = path.join(__dirname, 'lint-results.json');
function lint() {
  return readFileP(lintPath).then(file => {
    const lintReport = JSON.parse(file)
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

function coverage() {
  return readFileP(path.join(__dirname, 'coverage', 'coverage-summary.json')).then(file => {
    const { total } = JSON.parse(file)
    const formatCoverage = (kind, { covered, total, pct }) => `${covered} / ${total} ${kind} (${pct}%)`
    message(`Code coverage: ${
      Object.entries(total).map(([kind, cov]) => formatCoverage(kind, cov)).join(', ')
    }`)
  })
}

Promise.all([
  dangerJest(),
  lint(),
  coverage()
]);
