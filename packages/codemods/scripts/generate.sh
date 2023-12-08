#!/bin/zsh

for param in "$@" 
do
    npx hygen codemod-test new "${param}"
done