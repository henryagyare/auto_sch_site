#!/usr/bin/env bash
set -euo pipefail

echo "Running security checks..."
npm audit --audit-level=high || true
echo "Security check completed."