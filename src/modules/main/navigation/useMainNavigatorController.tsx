import navigatorKeys from '@navigation/helpers/NavigatorKeys'
import { useNavigator } from '@shared/hooks'
import { GestureResponderEvent } from 'react-native'

const useMainNavigatorController = () => {
  const navigator = useNavigator()

  const navigate = (e: GestureResponderEvent) => {
    e.preventDefault()
    navigator.navigate(navigatorKeys.Second.key)
  }

  const href = navigator.historyManager.getHref(
    navigator.getNavigationLink(navigatorKeys.Second.key),
  )

  return { secondScreen: { navigate, href } }
}

export default useMainNavigatorController
