/* eslint-disable no-console */
import { promises as fs } from 'fs';
import { FullConfig } from '@playwright/test';
import { type AxeJSONReportConfig, createAxeReport, mergeAxeJSONReports } from './a11yReportUtils';
// import { generateA11yTargetFromSubDirName } from './utils';

// eslint-disable-next-line import/no-default-export
export default async function globalTeardown(config: FullConfig) {
  try {
    let FILE_LIST = [];

    const OUTPUT_DIR = '__diff_output__';
    const OUTPUT_DIR_LIST = await fs.readdir(OUTPUT_DIR);

    for (const SUB_DIR of OUTPUT_DIR_LIST) {
      try {
        const fileName = `${OUTPUT_DIR}/${SUB_DIR}/a11y-results.json`;

        const stat = await fs.stat(fileName);
        if (stat.isFile()) {
          const file: AxeJSONReportConfig = {
            fileName,
            enhanceViolationNodeWith: {
              target: [SUB_DIR],
            },
          };
          FILE_LIST.push(file);
        }
      } catch {}
    }

    const a11yResults = await mergeAxeJSONReports(FILE_LIST);

    if (config.shard?.current) {
      const { current, total } = config.shard;

      await createAxeReport(a11yResults, {
        generateHTMLReport: false,
        fileNameJSON: `a11y-results-${current}-${total}`,
        message: `shard ${current} of ${total}: axe core found ${a11yResults.count} accessibility violations`,
      });
    } else {
      await createAxeReport(a11yResults, {
        generateHTMLReport: true,
      });
    }
  } catch (error) {
    console.error(error);
  }
}
