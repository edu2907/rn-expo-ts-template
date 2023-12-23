import { useContext } from 'react'
import { NavigationContext } from 'navigation-react'

const useNavigator = () => {
  const { stateNavigator } = useContext(NavigationContext)

  return stateNavigator
}

export default useNavigator
