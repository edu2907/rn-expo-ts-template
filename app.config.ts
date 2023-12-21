import type { ConfigContext, ExpoConfig } from '@expo/config'

import { ClientEnv, Env } from './env'

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'rn-template',
  slug: 'rn-template',
  extra: {
    ...ClientEnv,
  },
  // .. sentry config and other stuff here
})
