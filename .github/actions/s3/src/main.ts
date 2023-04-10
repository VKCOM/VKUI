import fs from 'fs';
import path from 'path';

import * as core from '@actions/core';
import { S3, S3ClientConfig } from '@aws-sdk/client-s3';
import { lookup } from 'mime-types';

const req = {
  required: true,
};

const notReq = {
  required: false,
};

function getFilesFromFolder(folderPath: string) {
  const fileList: string[] = [];

  const files = fs.readdirSync(folderPath, { withFileTypes: true });
  files.forEach((file) => {
    if (file.isDirectory()) {
      fileList.push(...getFilesFromFolder(path.join(folderPath, file.name)));
    } else {
      fileList.push(path.join(folderPath, file.name));
    }
  });

  return fileList;
}

function configuration(): S3ClientConfig {
  const accessKeyId = core.getInput('awsAccessKeyId', req);
  const secretAccessKey = core.getInput('awsSecretAccessKey', req);
  const region = core.getInput('awsRegion', notReq) || 'us-east-1';
  const endpoint = core.getInput('awsEndpoint', notReq) || undefined;

  return {
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
    region,
    endpoint,
  };
}

class Action {
  s3: S3;
  bucket: string;

  constructor() {
    core.info('Initial S3');
    this.s3 = new S3(configuration());
    this.bucket = core.getInput('awsBucket', req);
  }

  async upload(src: string, dist: string) {
    core.info('Command upload');

    const sourceDir = path.join(process.cwd(), src);
    const files = getFilesFromFolder(sourceDir);

    core.debug(`length ${files.length}`);
    await Promise.all(
      files.map((file) => {
        core.debug(`file: ${file}`);
        const fileStream = fs.createReadStream(file);
        const bucketPath = path.join(dist, path.relative(sourceDir, file));

        core.debug(`put ${files.length}`);
        return this.s3.putObject({
          Bucket: this.bucket,
          ACL: 'public-read',
          Body: fileStream,
          Key: bucketPath,
          ContentType: lookup(file) || 'text/plain',
        });
      }),
    );
  }

  async delete(prefix: string) {
    core.info('Command delete');

    core.debug('listObjectsV2');
    const data = await this.s3.listObjectsV2({
      Bucket: this.bucket,
      Prefix: prefix,
    });

    if (!data.Contents) {
      core.info('Nothing to delete');
      return;
    }

    const objects = data.Contents.map((content) => {
      return { Key: content.Key };
    });

    core.debug('deleteObjects');
    core.debug(`length ${objects.length}`);
    await this.s3.deleteObjects({
      Bucket: this.bucket,
      Delete: {
        Objects: objects,
      },
    });
  }

  async run() {
    const command = core.getInput('command', req);

    switch (command) {
      case 'upload':
        const src = core.getInput('commandUploadSrc', req);
        const dist = core.getInput('commandUploadDist', req);

        await this.upload(src, dist);
        break;

      case 'delete':
        const prefix = core.getInput('commandDeletePrefix', req);

        await this.delete(prefix);
        break;

      default:
        core.setFailed(`Invalid command: ${command}`);
        break;
    }
  }
}

const action = new Action();

action
  .run()
  .then()
  .catch((err) => {
    core.error(err.stack);
    core.setFailed(err.message);
  });
