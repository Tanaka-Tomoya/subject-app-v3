const path = require('path');
module.exports = ({ config }) => {
  config.devtool = 'source-map';
  config.module.rules.push({
    test: /\.tsx?$/,
    include: path.resolve(__dirname, '../src'),
    use: [
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      },
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [['react-app', { flow: false, typescript: true }]],
        },
      },
      {
        loader: require.resolve('@storybook/source-loader'),
        options: { parser: 'typescript' },
      },
    ],
  });
  config.module.rules.push({
    test: /\.css$/,
    include: path.resolve(__dirname, '../src'),
    use: [
      {
        loader: require.resolve('style-loader'),
      },
      {
        loader: require.resolve('css-loader'),
      },
    ],
  });
  config.resolve.extensions.push('.ts', '.tsx');
  // config.resolve.alias.push({
  //   '@': path.resolve(__dirname, '../src/components'),
  // });
  config.resolve.alias['@'] = path.resolve(__dirname, '../src/components');
  config.resolve.alias['utils'] = path.resolve(__dirname, '../src/utils');
  return config;
};
