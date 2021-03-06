const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

const { ANALYZE } = process.env;

module.exports = {
  exportPathMap() {
    return {
      '/': { page: '/' },
    };
  },
  webpack(config) {
    if (ANALYZE) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: 8888,
          openAnalyzer: true,
        })
      );
    } else {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'disabled',
          // For all options see https://github.com/th0r/webpack-bundle-analyzer#as-plugin
          generateStatsFile: true,
          // Will be available at `.next/stats.json`
          statsFilename: 'stats.json',
        })
      );
    }
    config.plugins.push(
      new SWPrecacheWebpackPlugin({
        verbose: true,
        staticFileGlobsIgnorePatterns: [/\.next\//],
        runtimeCaching: [
          {
            handler: 'networkFirst',
            urlPattern: /^https?.*/,
          },
        ],
      })
    );

    return config;
  },
};
