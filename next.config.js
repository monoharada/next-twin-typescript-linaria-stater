// const withPreact = require("next-plugin-preact");
// const withPlugins = require("next-compose-plugins");
// const withTM = require("next-transpile-modules")([]);

// const LINARIA_EXTENSION = ".linaria.module.css";

// function traverse(rules) {
//   for (let rule of rules) {
//     if (typeof rule.loader === "string" && rule.loader.includes("css-loader")) {
//       if (
//         rule.options &&
//         rule.options.modules &&
//         typeof rule.options.modules.getLocalIdent === "function"
//       ) {
//         let nextGetLocalIdent = rule.options.modules.getLocalIdent;
//         rule.options.modules.getLocalIdent = (
//           context,
//           _,
//           exportName,
//           options
//         ) => {
//           if (context.resourcePath.includes(LINARIA_EXTENSION)) {
//             return exportName;
//           }
//           return nextGetLocalIdent(context, _, exportName, options);
//         };
//       }
//     }

//     if (typeof rule.use === "object") {
//       traverse(Array.isArray(rule.use) ? rule.use : [rule.use]);
//     }

//     if (Array.isArray(rule.oneOf)) {
//       traverse(rule.oneOf);
//     }
//   }
// }

// const nextConfig = {
//   experimental: {
//     modern: true,
//     polyfillsOptimization: true
//   },

//   webpack5: false,

//   webpack: (config, options) => {
//     traverse(config.module.rules);

//     const linariaConfig = {
//       displayName: process.env.NODE_ENV !== "production"
//     };

//     config.module.rules.push({
//       test: /\.(tsx|ts|js|mjs|jsx)$/,
//       exclude: /node_modules/,
//       use: [
//         {
//           loader: require.resolve("@linaria/webpack-loader"),
//           options: {
//             sourceMap: process.env.NODE_ENV !== "production",
//             ...linariaConfig,
//             extension: LINARIA_EXTENSION
//           }
//         }
//       ]
//     });

//     return config;
//   }
// };

// const plugins = [withTM, withPreact];

// module.exports = withPlugins(plugins, nextConfig);




const withLinaria = require('next-linaria')

module.exports = withLinaria({
  linaria: {
    /* linaria options here */
    classNameSlug: '[title]',
  },
})
