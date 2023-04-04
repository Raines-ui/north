import useUserStore from './modules/user'
import useThemeStore from './modules/theme'
export default function useStore() {
  return {
    userStore: useUserStore,
    themeStore: useThemeStore
  }
}