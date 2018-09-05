<docs>
# HomepageLayout
</docs>

<template>
  <div>
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

<style>
  * {
    margin: 0;
    padding: 0;
    border: 0;
  }

  body {
    font-family: "Montserrat", sans-serif;
    background: #2c2e36;
    color: #e3e7ef;
    font-size: 21px;
    line-height: 1.6;
    padding-bottom: 10vh;
    padding-top: 2vw;
  }

  a {
    position: relative;
    color: #e3e7ef;
    text-decoration: none;
  }

  a:before {
    content: "";
    background: #666d7f;
    height: 4px;
    bottom: 2px;
    z-index: -1;
    left: 0;
    right: 0;
    display: block;
    position: absolute;
    transition: height 180ms ease-out;
  }

  a:hover:before {
    height: 12px;
  }
</style>
