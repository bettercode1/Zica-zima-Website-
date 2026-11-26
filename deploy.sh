#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"

git pull --ff-only origin main
npm ci
STAMP=".next-builds/$(date +%s)"
mkdir -p "$STAMP"
NEXT_BUILD_DIR="$STAMP" npm run build
ln -sfn "$STAMP" .next-current.new
mv -Tf .next-current.new .next-current
sudo /usr/local/bin/pm2 restart zicazimapcmc
