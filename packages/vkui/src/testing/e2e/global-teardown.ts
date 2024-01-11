/* eslint-disable no-console */
import { promises as fs } from 'fs';
import { FullConfig } from '@playwright/test';
import axe from 'axe-core';
import { createHtmlReport } from 'axe-html-reporter';
import { AxeResultsPartial } from './types';
// import { generateA11yTargetFromSubDirName } from './utils';

// eslint-disable-next-line import/no-default-export
export default async function globalTeardown(config: FullConfig) {
  try {
    let violations: axe.Result[] = [];
    let violationIds: string[] = [];
    let violationsCount = 0;

    const OUTPUT_DIR = '__diff_output__';

    const OUTPUT_DIR_LIST = await fs.readdir(OUTPUT_DIR);
    for (const SUB_DIR of OUTPUT_DIR_LIST) {
      const a11yReport: AxeResultsPartial = await (async () => {
        try {
          let raw = await fs.readFile(`${OUTPUT_DIR}/${SUB_DIR}/a11y-results.json`);
          return raw ? JSON.parse(raw?.toString()) : { violations: [] };
        } catch (error) {
          return { violations: [] };
        }
      })();

      for (let i = 0; i < a11yReport.violations.length; i++) {
        const currentViolation = a11yReport.violations[i];

        if (!currentViolation) {
          break;
        }

        violationsCount += currentViolation.nodes?.length;

        const currentViolationNodes = currentViolation.nodes?.map((node) =>
          Object.assign({}, node, {
            target: [SUB_DIR],
          }),
        );

        if (!violationIds.includes(currentViolation.id)) {
          violationIds.push(currentViolation.id);
          violations.push(
            Object.assign({}, currentViolation, {
              nodes: currentViolationNodes,
            }),
          );

          break;
        }

        const existingViolationIdx = violations.findIndex(({ id }) => id === currentViolation.id);
        const existingViolation = violations[existingViolationIdx];

        const updatedExistingViolation = Object.assign({}, existingViolation, {
          nodes: existingViolation.nodes.concat(currentViolationNodes),
        });

        violations.splice(existingViolationIdx, 1, updatedExistingViolation);
      }
    }

    const a11yResults = {
      count: violationsCount,
      violations,
    };

    const resultsFileName = 'a11y-results';
    const violationsMessage = `axe core found ${violationsCount} accessibility violations`;

    if (config.shard?.current) {
      const { current, total } = config.shard;

      await fs.writeFile(
        `${resultsFileName}-${current}-${total}.json`,
        JSON.stringify(a11yResults, null, 2),
        'utf8',
      );

      console.info(`shard ${current}/${total}: ${violationsMessage}`);
    } else {
      createHtmlReport({
        results: { violations },
        options: {
          outputDir: 'axe-report',
          reportFileName: 'index.html',
        },
      });

      await fs.writeFile(`${resultsFileName}.json`, JSON.stringify(a11yResults, null, 2), 'utf8');

      console.info(violationsMessage);
    }
  } catch (error) {
    console.error(error);
  }
}
