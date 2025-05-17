import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'courses-mfe',
  exposes: {
    './CoursesComponent': '/src/app/remote-entry/entry.component.ts',
  },
};

export default config;