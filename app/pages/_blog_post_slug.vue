<template>
  <div>
    <h1 class="post-title">{{ title }}</h1>
    <p class="post-date">{{ date | prettyDate }}</p>

    <div
      v-html="htmlContent"
      class="post-content"
    />
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
      }).use(MarkdownItFrontMatter, (frontMatter) => {
        frontMatter = yaml.safeLoad(frontMatter)

        data.title = frontMatter.title
        data.date = frontMatter.date

        resolve(data)
      })

      data.htmlContent = md.render(rawContent)
    })
  },
}
</script>

<style>
.post-title {
  margin-bottom: 0;
  margin-top: 0.3em;
}

.post-date {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-size: 0.72em;
  margin-top: 0.18em;
  margin-bottom: 3em;
}

.post-content {
  font-size: 0.9em;
  line-height: 1.75;
}
</style>
