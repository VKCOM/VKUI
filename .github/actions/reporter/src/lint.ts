import path from 'path';
import { readFile } from 'fs/promises';

import * as core from '@actions/core';

type LintResults = LintResult[];

interface LintResult {
  filePath: string;
  messages: Message[];
  errorCount: number;
  fatalErrorCount: number;
  warningCount: number;
  fixableErrorCount: number;
  fixableWarningCount: number;
  usedDeprecatedRules: UsedDeprecatedRule[];
}

export interface Message {
  ruleId: string;
  severity: number;
  message: string;
  line: number;
  column: number;
  nodeType: string;
  endLine: number;
  endColumn: number;
  suggestions?: Suggestion[];
  messageId?: string;
}

export interface Suggestion {
  desc: string;
  fix: Fix;
}

export interface Fix {
  range: number[];
  text: string;
}

interface UsedDeprecatedRule {
  ruleId: string;
  replacedBy: any[];
}

async function parseFile(lintPath: string) {
  const file = await readFile(lintPath, 'utf-8');
  return JSON.parse(file) as LintResults;
}

function report(message: Message, relPath: string) {
  const text = `${message.message} \`${message.ruleId}\``;

  const annotation: core.AnnotationProperties = {
    title: 'Lint',
    file: relPath,
    startLine: message.line,
    endLine: message.endLine,
    startColumn: message.column,
    endColumn: message.endColumn,
  };

  if (message.severity === 2) {
    core.error(text, annotation);
  } else if (message.severity === 1) {
    core.warning(text, annotation);
  }
}

export async function lint(lintPath: string) {
  try {
    const lintReport = await parseFile(lintPath);

    for (const { messages, filePath } of lintReport) {
      const relPath = path.relative(process.cwd(), filePath);

      for (const message of messages) {
        report(message, relPath);
      }
    }
  } catch (err) {
    if (err instanceof Error) core.error(`Could not read lint results: ${err.message}`);
  }
}
