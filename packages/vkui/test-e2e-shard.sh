#!/bin/bash

for n in $(echo 1 2 3 4 5 6 7 8 9 10)
do
  mkdir -p tmp
  touch tmp/.env
  echo "SHARD='$n/10'" >> tmp/.env
  yarn run -T cross-env SHARD=$n/10 docker compose --env-file tmp/.env up --abort-on-container-exit
  rm tmp/.env
done
yarn run test:e2e-merge-sharded-a11y-reports
