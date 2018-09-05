<docs>
# BlogPostLayout
</docs>

<template>
  <div class="inner">
    <main>
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

<style>
body, input, select, textarea, button { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; text-rendering: optimizeLegibility; }

a { -webkit-tap-highlight-color: #fff; }

::-moz-selection { background: rgba(105, 155, 192, 0.7); color: #333; }
::selection { background: rgba(105, 155, 192, 0.7); color: #333; }

body {
  font-family: "Source Serif Pro", serif;
  background: #fff;
  color: #333;
  font-size: 21px;
  line-height: 1.6;
  padding-bottom: 10vh;
  padding-top: 2vw;
}

a {
  color: #699BC0;
}

.paulstraw img {
  display: inline-block;
  margin: 1.2rem auto 0;
  width: 32px;
}

hr {
  border: 0;
  border-top: 6px solid #699bc0;
  opacity: 0.18;
  margin: 3rem 0;
  border-radius: 1px;
  transform: skew(-21deg);
}

.inner {
  margin: 0 auto;
  padding: 0 2.5vw;
  max-width: 700px;
}

h1, h2, h3, h4, h5, h6 {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  line-height: 1.4;
}

img {
  max-width: 100%;
}

blockquote {
  position: relative;
}

blockquote:before {
  content: "";
  display: block;
  background: #699BC0;
  width: 0.3em;
  height: 100%;
  position: absolute;
  top: 0;
  left: -1.8em;
  opacity: 0.42;
}

pre {
  white-space: pre-wrap;
}
</style>
