#!/usr/bin/env bash

NODE_VERSION=$(node -p -e "require('./package.json').version")

if [ "$1" = "stdout" ]; then
    npx git-cliff --include-path "packages/ui/**/*"
else
    npx git-cliff --include-path "packages/ui/**/*" > CHANGELOG.md
fi