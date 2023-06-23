import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import path from 'path'
import dts from "rollup-plugin-dts";
import { terser } from "rollup-plugin-terser";
import atImport  from 'postcss-import'
const packageJson = require("./package.json");

export default [
{
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true
    },
   
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ tsconfig: "./tsconfig.json" }),
    postcss(),
    terser()
  ],
  external: ["react", "react-dom"],
},
{
    input: "styles/main.css",
    output: [{ file: "dist/styles/main.css", format: "esm" } ],
    plugins: [
    postcss({
            extract: true
          }),
      ],
},
{
    input: "dist/esm/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" } ],
    plugins: [dts.default()],
    external: [/\.css$/, /\.scss$/],
  },

];