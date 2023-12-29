import type { ConfigContext, ExpoConfig } from '@expo/config'

import { ClientEnv, Env } from './env'

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'rntemplate',
  slug: 'rntemplate',
  extra: {
    ...ClientEnv,
  },
  // .. sentry config and other stuff here
})
