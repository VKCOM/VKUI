import * as github from '@actions/github';

import { getPullRequestNumber } from './shared';

/**
 * Префикс комментария, для его обнаружения
 */
const commentPrefix = '<!--GitHub Comment Builder-->\n';

/**
 * Сборщик комментария для PR-а. Создает или редактирует комментарий.
 */
export class GitHubCommentBuilder {
  message = commentPrefix;
  gh: ReturnType<typeof github.getOctokit>;

  constructor(gh: ReturnType<typeof github.getOctokit>) {
    this.gh = gh;
  }

  /**
   * Добавляет текст к комментарию.
   */
  add(text: string) {
    this.message += text + '\n\n';
  }

  /**
   * Пытаемся найти уже существующий комментарий
   */
  private async getCommentId() {
    const issue_number = getPullRequestNumber();

    const comments = await this.gh.rest.issues.listComments({
      ...github.context.repo,
      issue_number,
    });

    const comment = comments.data.find((comment) => comment.body?.startsWith(commentPrefix));

    return comment?.id;
  }

  /**
   * Создает или редактирует комментарий
   */
  async write() {
    const comment_id = await this.getCommentId();
    const issue_number = getPullRequestNumber();

    const params = {
      ...github.context.repo,
      body: this.message,
    };

    if (comment_id) {
      await this.gh.rest.issues.updateComment({
        ...params,
        comment_id,
      });
      return;
    }

    this.gh.rest.issues.createComment({
      ...params,
      issue_number,
    });
  }
}
