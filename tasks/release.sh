#!/bin/bash

if [ ! $1 ]; then
  echo "Error: you should pass version number"
else
  echo "release: creating build"
  yarn clear && yarn build || exit 1

  echo "release: creating version"
  yarn version --new-version $1

  if [ ! $2 ]; then
    echo "release: building styleguide"
    yarn styleguide:build

    echo "release: updating styleguide submodule"
    git submodule foreach 'git add -A && git commit -m '"v$1"''

    echo "release: commiting submodule updates"
    git add -A && git commit -m "docs update: v$1"

    echo "release: pushing styleguide submodule changes"
    git submodule foreach 'git push origin master'
  fi

  echo "release: pushing updates to github"
  git push origin HEAD

  echo "release: pushing new tag to github"
  git push origin --tags

  echo "release: publishing to npm"
  if [ $2 ]; then
    yarn publish --access-public --non-interactive --tag $2
  else
    yarn publish --access-public --non-interactive
  fi
fi
