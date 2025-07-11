#!/bin/bash

# Define base source and destination directories
SRC_DIR="./task_1"
DEST_DIR="./task_2"

# List of individual files to copy
FILES=("js/main.ts" ".eslintrc.js" "package.json" "tsconfig.json" "webpack.config.js")

# Copy each file silently
for FILE in "${FILES[@]}"; do
  cat "$SRC_DIR/$FILE" | tee "$DEST_DIR/$FILE" > /dev/null
done

# Copy node_modules silently
mkdir -p "$DEST_DIR/node_modules"
cp -r "$SRC_DIR/node_modules/" "$DEST_DIR/node_modules" > /dev/null 2>&1
