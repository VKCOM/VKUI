import { existsSync } from 'fs';
import path from 'path';
import * as github from '@actions/github';
import { GitHubCommentBuilder } from './comment';

function hasFailedScreenshots() {
  const playwrightReportDirPath = path.join(process.cwd(), 'playwright-report');
  const playwrightReportDataDirPath = path.join(playwrightReportDirPath, 'data');
  const playwrightReportTracePathDir = path.join(playwrightReportDirPath, 'trace');
  const isDataDirExist = existsSync(playwrightReportDataDirPath);
  const isTraceDirExist = existsSync(playwrightReportTracePathDir);
  return isDataDirExist || isTraceDirExist;
}

export async function playwrightReport(url: string, token: string) {
  const gh = github.getOctokit(token);
  const comment = new GitHubCommentBuilder(gh);

  const message = ['## e2e tests\n\n'];

  if (hasFailedScreenshots()) {
    message.push('> ⚠️ Some screenshots were failed. See Playwright Report. \n\n');
  }

  message.push(`<a href="${url}" target="_blank">Playwright Report</a>`.replace(/(^|\n) +/g, ''));

  comment.add(message.join(' '));
  await comment.write();
}
