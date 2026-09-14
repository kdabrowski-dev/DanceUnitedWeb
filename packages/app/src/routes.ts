import { type RouteConfig, index, route } from '@react-router/dev/routes'

export default [
  index('routes/_index.tsx'),
  route('about', 'routes/about.tsx'),
  route('team', 'routes/team.tsx'),
  route('pricing', 'routes/pricing.tsx'),
  route('schedule', 'routes/schedule.tsx'),
  route('contact', 'routes/contact.tsx'),
  route('gallery', 'routes/gallery.tsx'),
  route('terms', 'routes/terms.tsx'),
  route('privacy', 'routes/privacy.tsx'),
] satisfies RouteConfig
