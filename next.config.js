const path = require('path');

module.exports = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // Add file-loader for PDF files
    config.module.rules.push({
      test: /\.(pdf)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'static/pdf/', // Modify this path as needed
            publicPath: isServer ? '../static/pdf/' : '/_next/static/pdf/', // Modify this path as needed
          },
        },
      ],
    });

    return config;
  },
};
