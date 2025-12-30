import { adminClient } from 'better-auth/client/plugins'
import { createAuthClient } from 'better-auth/vue'
import { useRequestHeaders } from 'nuxt/app'
import { useSiteConfig } from '#site-config/app/composables/useSiteConfig'
import { avatarPluginClient } from '~~/shared/plugins/better-auth/avatar/client'

export const plugins = [
  adminClient(),
  avatarPluginClient(),
]

export const useAuthClient = () => {
  const cookieString = useRequestHeaders(['cookie']).cookie
  const { url } = useSiteConfig()

  const authClient = createAuthClient({
    baseURL: url,
    fetchOptions: {
      credentials: 'include',
      headers: cookieString ? { cookie: cookieString } : undefined,
    },
    plugins,
  })

  return authClient
}
