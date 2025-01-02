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
      path: require.resolve('path-browserify'),
    },
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
      {
        test: /\.(mp4|webm|ogg)$/, // Add a rule for video files
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'videos/', // Specify the output directory for videos
          },
        },
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};
