/* eslint-disable @typescript-eslint/no-require-imports */
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const svgTransformer = require.resolve('react-native-svg-transformer');
const {
  wrapWithReanimatedMetroConfig} = require('react-native-reanimated/metro-config');


const {
  withSentryConfig
} = require("@sentry/react-native/metro");


/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    babelTransformerPath: svgTransformer,
  },
  resolver: {
    assetExts: getDefaultConfig(__dirname).resolver.assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...getDefaultConfig(__dirname).resolver.sourceExts, 'svg'],
  },
};

module.exports = withSentryConfig(
  mergeConfig(getDefaultConfig(__dirname), wrapWithReanimatedMetroConfig(config))
);