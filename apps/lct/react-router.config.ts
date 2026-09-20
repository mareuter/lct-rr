import type { Config } from '@react-router/dev/config'

export default {
  // Config options...
  buildDirectory: 'dist',
  // SPA mode
  ssr: false,
  prerender: ['/about'],
} satisfies Config
