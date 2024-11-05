// module.exports = {
//   module: {
//     rules: [
//       {
//         test: /\.(woff|woff2|eot|ttf|otf)$/,
//         use: {
//           loader: 'file-loader',
//           options: {
//             name: '[name].[ext]',
//             outputPath: 'fonts/',
//           },
//         },
//       },
//     ],
//   },
// };

const path = require('path');

module.exports = {
  resolve: {
    fallback: {
      path: require.resolve('path-browserify')
    }
  },
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
          },
        },
      },
    ],
  },
};