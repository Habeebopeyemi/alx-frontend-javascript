#!/bin/bash

# Check if a task number is provided
if [ -z "$1" ]; then
  echo "Insert the task number to create required files: $0 <task_number>"
  exit 1
fi

TASK_NUM="$1"
NEW_DIR="./task_$TASK_NUM"

#mkdir -p "$NEW_DIR"
# Create a new directory for the next TypeScript tasks
mkdir -p "$NEW_DIR/js" && touch "$NEW_DIR/js/main.ts"

# Return to the root TypeScript directory
#cd "$NEW_DIR/../.." || exit 1

# Create the configuration files in the root (or adjust path if needed)
touch "$NEW_DIR/.eslintrc.js" \
      "$NEW_DIR/package.json" \
      "$NEW_DIR/tsconfig.json" \
      "$NEW_DIR/webpack.config.js"

echo "task_$TASK_NUM directory and files created successfully."
