const { execSync } = require('child_process');

module.exports.stableBranchName = (semVer) => {
  return `${semVer.major}.${semVer.minor}-stable`;
};

module.exports.majorBranchName = (semVer) => {
  return `v${semVer.major}`;
};

module.exports.remoteRepository = `https://${process.env.GITHUB_ACTOR}:${process.env.INPUT_GITHUB_TOKEN}@github.com/${process.env.GITHUB_REPOSITORY}`;

module.exports.GhApi = class GhApi {
  constructor() {}
  /**
   * @param  {string} endpoint
   */
  request(endpoint, headers = { Accept: 'application/vnd.github.v3+json' }) {
    const headerFlags = Object.keys(headers)
      .map((header) => '-H ' + JSON.stringify(`${header}: ${headers[header]}`))
      .join(' ');

    const command = `gh api ${headerFlags} ${endpoint}`;

    return JSON.parse(execSync(command, { encoding: 'utf-8' }));
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

const semVerRegex =
  /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;

module.exports.SemVer = class SemVer {
  /**
   *
   * @param {string} version
   */
  constructor(version) {
    const regexpExecArray = semVerRegex.exec(version.trim());
    if (!regexpExecArray) {
      throw new Error(`Invalid Version: ${version}`);
    }

    this.major = Number(regexpExecArray[1]);
    this.minor = Number(regexpExecArray[2]);
    this.patch = Number(regexpExecArray[3]);
    this.prerelease = regexpExecArray[4];
    this.buildMetadata = regexpExecArray[5];
  }
};
