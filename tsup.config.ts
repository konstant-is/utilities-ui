import { defineConfig } from 'tsup'

export default defineConfig(() => ({
  entry: ['src/index.ts', 'src/date/index.ts'], // Include all necessary entry points
  outDir: 'dist', // Output directory
  format: ['cjs', 'esm'], // Build both CommonJS and ESM
  sourcemap: true, // Generate sourcemaps
  dts: true, // Generate declaration files
  clean: true, // Clean the output directory before building
  external: ['react', 'next', 'react-dom', 'date-fns'], // Mark React as external
}))
