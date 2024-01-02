import type { ConfigContext, ExpoConfig } from '@expo/config'

import { ClientEnv, Env } from './env'

const appName =
  ClientEnv.APP_ENV === 'development' ? 'rntemplate (Dev)' : 'rntemplate'

const appAndroidPackage =
  ClientEnv.APP_ENV === 'development' ? 'com.rntemplate.dev' : 'com.rntemplate'

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: appName,
  slug: 'rntemplate',
  android: {
    ...config.android,
    package: appAndroidPackage,
  },
  extra: {
    ...ClientEnv,
  },
})
