import { ModuleFederationConfig } from '@nx/webpack';
const deps = require('../../package.json').dependencies;
const config: ModuleFederationConfig = {
  name: 'user-list',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
  shared: {
    ...deps,
    react: { singleton: true, eager: true, requiredVersion: deps.react },
    'react-dom': { singleton: true, eager: true, requiredVersion: deps['react-dom'] },
  },
};

export default config;
