<docs>
# BlogPostLayout
</docs>

<template>
  <div class="blog-post-layout">
    <main class="inner">
      <nuxt-link to="/" class="paulstraw">
        <img src="/paulstraw.png" alt="Paul Straw">
      </nuxt-link>

      <nuxt/>
    </main>
  </div>
</template>

<script>
export default {
  name: 'BlogPostLayout',

  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Source+Serif+Pro',
        hid: 'google-fonts-source-serif',
      },
    ],
  },
}
</script>
