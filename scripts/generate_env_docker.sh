#!/bin/bash

rm -f .env.docker
touch .env.docker

# Выдаёт версию зависимости в виде строки вида: '└─ @playwright/test@npm:1.44.1'
YARN_INFO_OUTPUT=$(yarn info @playwright/test --all --name-only);

# Делит строку по разделителю и берёт правую часть.
#
# В JavaScript это выглядило бы так:
#
# ```js
# const PLAYWRIGHT_VERSION = '└─ @playwright/test@npm:1.44.1'.split(':')[1];
# ```
PLAYWRIGHT_VERSION=$(echo $YARN_INFO_OUTPUT | cut -f 2 -d :);

# см. https://github.com/microsoft/playwright/blob/main/utils/docker/Dockerfile.noble
echo "IMAGE=mcr.microsoft.com/playwright:v${PLAYWRIGHT_VERSION}-noble" >> .env.docker;

while [[ $# -gt 0 ]]; do
  case "$1" in
      -u)
        echo "UPDATE_SNAPSHOTS_FLAG=-u" >> .env.docker
        ;;
  esac
  shift
done
