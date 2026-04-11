#!/usr/bin/env bash
set -euo pipefail

echo "Args passed to script: $@"
echo "Running lint..."
npm run lint --