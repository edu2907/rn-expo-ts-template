import React from 'react'
import { NavigationBar, TabBar, TabBarItem } from 'navigation-react-native'
import { FirstTabStack } from './FirstTabStack'
import SecondTabPage from '@modules/main/ui/pages/SecondTabPage'
import { Platform } from 'react-native'
import { StatusBar } from 'expo-status-bar'

const TabNavigator = () => {
  return (
    <>
      <NavigationBar hidden={true} />
      <TabBar
        primary={true}
        barTintColor={Platform.OS === 'android' ? '' : 'rgb(247,247,247)'}
        selectedTintColor={Platform.OS === 'android' ? '#1da1f2' : ''}
      >
        <TabBarItem title="Home">
          <FirstTabStack />
        </TabBarItem>

        <TabBarItem title="Settings">
          <SecondTabPage />
        </TabBarItem>
      </TabBar>
      <StatusBar style="auto" />
    </>
  )
}

export default TabNavigator
