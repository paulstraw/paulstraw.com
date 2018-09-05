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
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Montserrat:400,400i,800',
        hid: 'google-fonts-montserrat',
      },
    ],
  },
}
</script>
