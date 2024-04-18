// noinspection NodeCoreCodingAssistance
import { dts } from 'rollup-plugin-dts';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { swc, defineRollupSwcOption } from 'rollup-plugin-swc3';
import babel from '@rollup/plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const plugins = [
  peerDepsExternal(),
  swc(defineRollupSwcOption({
    tsconfig: './tsconfig.json',
    jsc: {
      minify: {
        compress: {
          drop_console: true,
        },
        mangle: true,
      },
      parser: {
        syntax: "typescript",
        tsx: true,
        decorators: true
      },
      target: "es2015",
    }
  })),
  typescript({
    tsconfig: './tsconfig.json',
  }),
  resolve(),
  commonjs(),
  babel({
    babelHelpers: 'bundled',
    exclude: ['.yarn/**', 'dist'],
    presets: [
      '@babel/preset-env',
      '@babel/preset-react'
    ],
    plugins: [
      'babel-plugin-styled-components'
    ]
  }),
  // terser({
  //   compress:true,
  //   ecma: 2015
  // })
];

const external = ['react', 'react-dom', 'styled-components'];

const inputs = {
  'Badge': 'src/Badge/index.ts',
  'Button': 'src/Button/index.ts',
  'Check': 'src/Check/index.ts',
  'Chip': 'src/Chip/index.ts',
  'Input': 'src/Input/index.ts',
  'Modal': 'src/Modal/index.ts',
  'Progress': 'src/Progress/index.ts',
  'Radio': 'src/Radio/index.ts',
  'ScrollView': 'src/ScrollView/index.ts',
  'Select': 'src/Select/index.ts',
  'Skeleton': 'src/Skeleton/index.ts',
  'Textarea': 'src/Textarea/index.ts',
}

// noinspection JSUnusedGlobalSymbols,JSCheckFunctionSignatures
export default [
  {
    input: 'src/index.ts',
    output:  {
      file: 'dist/index.js',
      format: 'esm',
      // sourcemap: true,
    },
    plugins,
    external,
  },
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.d.ts',
      format: 'esm',
    },
    plugins: [dts()],
  },
  {
    input: inputs,
    output: [
      {
        dir: 'dist',
        format: 'esm',
        entryFileNames: '[name]/index.js',
      }
    ],
    plugins,
    external,
  },
  {
    input: inputs,
    output: [
      {
        dir: 'dist',
        format: 'esm',
        entryFileNames: '[name]/index.d.ts',
      }
    ],
    plugins: [dts()],
  },
];