#!/bin/bash

npm version $1
npm run styleguide:build
git submodule foreach 'git add -A && git commit -m '"v$1"''
git add -A && git commit -m "docs update: v$1"
npm publish --access-public
git push origin master
git push origin --tags
git submodule foreach 'git push origin master'
