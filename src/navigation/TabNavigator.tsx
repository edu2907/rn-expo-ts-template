import React from 'react'
import { NavigationBar, TabBar, TabBarItem } from 'navigation-react-native'
import { FirstTabStack } from './FirstTabStack'
import SecondTabPage from '@modules/main/ui/pages/SecondTabPage'
import { Platform } from 'react-native'

const TabNavigator = () => {
  return (
    <>
      <NavigationBar hidden={true} />
      <TabBar
        primary={true}
        barTintColor={Platform.OS === 'android' ? null : 'rgb(247,247,247)'}
        selectedTintColor={Platform.OS === 'android' ? '#1da1f2' : null}
      >
        <TabBarItem title="Home">
          <FirstTabStack />
        </TabBarItem>

        <TabBarItem title="Settings">
          <SecondTabPage />
        </TabBarItem>
      </TabBar>
    </>
  )
}

export default TabNavigator
