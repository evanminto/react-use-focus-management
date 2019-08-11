import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';

console.log(Object.keys(pkg.dependencies));

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
  ],
  plugins: [
    resolve(),
    commonjs({
      include: 'node_modules/**/*',
    }),
  ],
};
