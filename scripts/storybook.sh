#!/usr/bin/env bash
start-storybook -p 9001
# env NODE_OPTIONS=--max_old_space_size=4096 node node_modules/@storybook/react/bin/index.js -p 9001 -c .storybook