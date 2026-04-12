#!/usr/bin/env bash
set -euo pipefail

echo "Installing dependencies..."
npm install

if [ ! -f ".env.local" ]; then
  echo "Warning: .env.local not found."
  echo "Create .env.local from .env.example before running full app features."
fi

echo "Setup complete."