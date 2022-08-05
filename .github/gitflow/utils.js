const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

module.exports.stableBranchName = (semVer) => {
  return `${semVer.major}.${semVer.minor}-stable`;
};

module.exports.remoteRepository = `https://${process.env.GITHUB_ACTOR}:${process.env.INPUT_GITHUB_TOKEN}@github.com/${process.env.GITHUB_REPOSITORY}`;

module.exports.GhApi = class GhApi {
  constructor() {}
  /**
   * @param  {string} endpoint
   */
  request(endpoint, headers = { Accept: "application/vnd.github.v3+json" }) {
    const headerFlags = Object.keys(headers)
      .map((header) => "-H " + JSON.stringify(`${header}: ${headers[header]}`))
      .join(" ");

    const command = `gh api ${headerFlags} ${endpoint}`;

    return JSON.parse(execSync(command, { encoding: "utf-8" }));
  }

  /**
   * https://docs.github.com/en/rest/pulls/pulls#list-commits-on-a-pull-request
   * @param  {string} owner
   * @param  {string} repo
   * @param  {string|number} pull_number
   * @return {{sha:string;commit:{message:string}}[]}
   */
  listCommitsOnPullRequest(owner, repo, pull_number) {
    return this.request(`/repos/${owner}/${repo}/pulls/${pull_number}/commits`);
  }

  prComment(pr, body) {
    const command = `gh pr comment ${pr} -F -`;
    execSync(command, {
      input: body,
    });
  }
};
