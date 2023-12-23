import navigatorKeys from '@navigation/helpers/NavigatorKeys'
import { useNavigator } from '@shared/hooks'

const useMainNavigatorController = () => {
  const navigator = useNavigator()

  const navigateToSecondScreen = () => {
    navigator.navigate(navigatorKeys.Second.key)
  }

  return { navigateToSecondScreen }
}

export default useMainNavigatorController
