import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function get(context) {
  const posts = await getCollection('tips')
  return rss({
    title: "AstroBuild.tips",
    description: "FirsPage",
    site: context.site,
    items: posts.map(p => ({
      ...p.data,
      link: `/posts/${p.slug}/`
    }))
  })
}
