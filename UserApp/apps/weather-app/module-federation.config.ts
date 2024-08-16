import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'weather-app',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;