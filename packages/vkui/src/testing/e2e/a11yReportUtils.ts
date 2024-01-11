/* eslint-disable no-console */
import { promises as fs } from 'fs';
import type { NodeResult as AxeNodeResult, Result as AxeResult, AxeResults } from 'axe-core';
import { createHtmlReport } from 'axe-html-reporter';
import { AxeResultsPartial } from './types';

export interface AxeJSONReportConfig {
  fileName: string;
  enhanceViolationNodeWith?: Partial<AxeNodeResult>;
}

export interface AxeJSONReport {
  count: number;
  violations: AxeResults['violations'];
}

export async function mergeAxeJSONReports(fileList: AxeJSONReportConfig[]) {
  let violations: AxeResult[] = [];
  let violationIds: string[] = [];
  let violationsCount = 0;

  try {
    for (const FILE of fileList) {
      const a11yReport: AxeResultsPartial = await (async () => {
        try {
          let raw = await fs.readFile(FILE.fileName);
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

        const currentViolationNodes = currentViolation.nodes?.map((violationNode) =>
          Object.assign(
            {},
            violationNode,
            !!FILE.enhanceViolationNodeWith ? FILE.enhanceViolationNodeWith : {},
          ),
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
  } catch (error) {
    console.error(error);
  }

  return {
    count: violationsCount,
    violations,
  };
}

interface CreateAxeReportProps {
  fileNameJSON?: string;
  message?: string;
  generateHTMLReport: boolean;
}

export async function createAxeReport(
  results: AxeJSONReport,
  { fileNameJSON = 'a11y-results', message, generateHTMLReport }: CreateAxeReportProps,
) {
  try {
    if (generateHTMLReport) {
      createHtmlReport({
        results: {
          violations: results.violations,
        },
        options: {
          outputDir: 'axe-report',
          reportFileName: 'index.html',
        },
      });
    }

    await fs.writeFile(`${fileNameJSON}.json`, JSON.stringify(results, null, 2), 'utf8');
    console.info(message ?? `axe core found ${results.count} accessibility violations`);
  } catch (error) {
    console.error(error);
  }
}
