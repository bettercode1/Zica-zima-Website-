#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"

git pull --ff-only origin main
npm ci
npm run build
sudo /usr/local/bin/pm2 restart zicazimapcmc
