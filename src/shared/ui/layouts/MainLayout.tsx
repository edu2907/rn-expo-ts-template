import { View, StyleSheet } from 'react-native'
import React from 'react'
import colors from '@ui/theme/colors'

const MainLayout: React.FC<{ children: JSX.Element }> = function ({
  children,
}) {
  return <View style={styles.container}>{children}</View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default MainLayout
