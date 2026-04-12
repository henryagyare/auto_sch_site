#!/usr/bin/env bash
set -euo pipefail

./scripts/lint.sh
./scripts/typecheck.sh
./scripts/test.sh
./scripts/build.sh
./scripts/security.sh

echo "PR validation complete."