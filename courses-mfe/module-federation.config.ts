import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'courses-mfe',
  exposes: {
    './Routes': './courses-mfe/src/app/remote-entry/entry.routes',
  },
};

export default config;
