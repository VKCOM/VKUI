/* eslint no-console: 0 */
const fs = require('fs');
const path = require('path');
const { createHtmlReport } = require('axe-html-reporter');

(function main() {
  let count = 0;
  let violations = [];
  let violationIds = [];

  const pathsList = fs.readdirSync(path.resolve(__dirname, '../')).filter((fileName) =>
    fileName.startsWith('a11y-results-'),
  );

  console.log('🔄 Merging sharded axe core reports...', pathsList);

  if (pathsList.length) {
    for (reportPath of pathsList) {
      const parsedReport = JSON.parse(fs.readFileSync(reportPath));

      for (let i = 0; i < parsedReport.violations.length; i++) {
        const currentViolation = parsedReport.violations[i];

        if (!currentViolation) {
          break;
        }

        count += currentViolation.nodes?.length;

        if (!violationIds.includes(currentViolation.id)) {
          violationIds.push(currentViolation.id);
          violations.push(currentViolation);

          break;
        }

        const existingViolationIdx = violations.findIndex(({ id }) => id === currentViolation.id);
        const existingViolation = violations[existingViolationIdx];

        const updatedExistingViolation = Object.assign({}, existingViolation, {
          nodes: existingViolation.nodes.concat(currentViolation.nodes),
        });

        violations.splice(existingViolationIdx, 1, updatedExistingViolation);
      }

      fs.unlinkSync(reportPath);
    }
  }

  createHtmlReport({
    results: {
      violations,
    },
    options: {
      outputDir: 'axe-report',
      reportFileName: 'index.html',
    },
  });


  fs.writeFileSync(`a11y-results.json`, JSON.stringify({
    count,
    violations
  }, null, 2), 'utf8');
  console.info(`✅ sharded axe core reports merged`);
})();
