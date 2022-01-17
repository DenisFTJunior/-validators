import babel from "rollup-plugin-babel";

const config = {
  input: "build/index.js",
  output: [
    {
      file: "bundle.js",
      format: "esm",

      globals: {
        "@babel/runtime/regenerator": "regeneratorRuntime",
      },
    },
  ],

  plugins: [
    babel({
      babelrc: false,
      runtimeHelpers: true,
      plugins: [
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-proposal-export-default-from",
        "@babel/plugin-transform-arrow-functions",
        "@babel/plugin-transform-parameters",
        "@babel/plugin-transform-spread",
        "@babel/plugin-transform-shorthand-properties",
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/plugin-transform-react-constant-elements",
        "@babel/plugin-transform-async-to-generator",
        [
          "@babel/plugin-transform-runtime",
          {
            helpers: true,
            regenerator: true,
          },
        ],
      ],
      presets: ["@babel/preset-typescript", "@babel/preset-env"],
      exclude: "**/node_modules/**",
    }),
  ],
};

export default config;
