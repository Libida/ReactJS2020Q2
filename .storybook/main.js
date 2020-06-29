const custom = require('../webpack/webpack.config.client');
const merge = require('webpack-merge');

module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: async config => {
    return merge(custom, config);
  },
};
