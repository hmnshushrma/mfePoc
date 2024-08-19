const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('./package.json');

module.exports = {
  output: {
    uniqueName: 'my-angular-app',
    publicPath: 'auto',
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'myAngularApp',
      filename: 'remoteEntry.js',
      exposes: {
        './AngularApp': './src/app/app.component.ts',
      },
      shared: {
        ...packageJson.dependencies,
        '@angular/core': { singleton: true, strictVersion: true },
        '@angular/common': { singleton: true, strictVersion: true },
        '@angular/router': { singleton: true, strictVersion: true },
      },
    }),
  ],
};
