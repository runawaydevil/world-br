#!/usr/bin/env node
/**
 * Sets VITE_VARIANT and runs vite (dev) or tsc + vite build (build).
 * Works on Windows without cross-env; uses node to run binaries directly (no shell).
 * Usage:
 *   node scripts/run-with-variant.mjs <variant> dev
 *   node scripts/run-with-variant.mjs <variant> build
 */
const variant = process.argv[2] || 'full';
const mode = process.argv[3] || 'dev';
process.env.VITE_VARIANT = variant;

const { spawnSync } = await import('child_process');
const { fileURLToPath } = await import('url');
const path = await import('path');
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const viteBin = path.join(root, 'node_modules', 'vite', 'bin', 'vite.js');
const tscBin = path.join(root, 'node_modules', 'typescript', 'bin', 'tsc');
const env = { ...process.env };
const run = (cmd, args, opts = {}) =>
  spawnSync(cmd, args, { stdio: 'inherit', cwd: root, env, ...opts });

if (mode === 'build') {
  const tsc = run(process.execPath, [tscBin]);
  if (tsc.status !== 0) process.exit(tsc.status ?? 1);
  const vite = run(process.execPath, [viteBin, 'build']);
  process.exit(vite.status ?? 1);
} else {
  const vite = run(process.execPath, [viteBin]);
  process.exit(vite.status ?? 1);
}
