<docs>
# HomepageLayout
</docs>

<template>
  <div class="homepage-layout">
    <nuxt/>
  </div>
</template>

<script>
export default {
  name: 'HomepageLayout',

  head: {
    link: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
        crossorigin: true,
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: true,
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap",
      },
    ]
  },
}
</script>
