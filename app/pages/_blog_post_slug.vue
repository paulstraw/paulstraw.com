<template>
  <div>
    <h1 class="post-title">{{ title }}</h1>
    <p class="post-date">{{ date | prettyDate }}</p>

    <div v-html="htmlContent" class="post-content" />
  </div>
</template>

<script>
import MarkdownIt from 'markdown-it'
import MarkdownItFrontMatter from 'markdown-it-front-matter'
import yaml from 'js-yaml'

export default {
  title: 'BlogPostSlug',

  layout: 'blog-post',

  async asyncData({ app, route, payload }) {
    let slug = route.params.blog_post_slug
    let rawContent = payload
      ? payload
      : await app.$axios.$get(`/blog-posts/${slug}.md`)

    return await new Promise((resolve, reject) => {
      let data = {}
      let md = new MarkdownIt({
        breaks: true,
      }).use(MarkdownItFrontMatter, frontMatter => {
        frontMatter = yaml.safeLoad(frontMatter)

        data.title = frontMatter.title
        data.date = frontMatter.date

        resolve(data)
      })

      data.htmlContent = md.render(rawContent)
    })
  },

  head() {
    return {
      title: this.title,
    }
  },
}
</script>
