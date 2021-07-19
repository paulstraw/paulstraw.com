<docs>
# ProjectCard
</docs>

<template>
  <article
    @mouseenter="waveHello"
    @touchstart="waveHello"
  >
    <a
      :href="project.url"
    >
      <div
        class="mini-project-card-logo-wrapper"
        :style="{
          background: project.logoBackground,
          backgroundSize: 'cover'
        }"
      >
        <div
          :style="{
            height: project.logoHeight
          }"
          class="col-16 mini-project-card-logo-wrapper-inner"
          :class="project.extraClasses"
          v-html="require(`~/assets/svg/project-logos/${project.logoName}.svg`)"
        />
      </div>

      <div class="info mt-1 mt-lg-2">
        <h1>
          {{ project.title }}
        </h1>

        <p>{{ project.description }}</p>
      </div>
    </a>
  </article>
</template>

<script>
import waveHello from "~/mixins/waveHello"

export default {
  name: 'MiniProjectCard',

  mixins: [
    waveHello
  ],

  props: {
    project: {
      type: Object,
      required: true,
    }
  },
}
</script>

<style scoped>
  a {
    text-decoration: none;
  }

  a:hover h1 {
    text-decoration: underline;
  }

  .mini-project-card-logo-wrapper {
    width: 150px;
    max-width: 35vw;
    aspect-ratio: 1 / 1;
    position: relative;
    border-radius: 40px;
    margin: 0 auto;
  }

  .mini-project-card-logo-wrapper-inner {
    position: absolute;
    top: 50%;
    width: 100%;
    transform: translateY(-50%);
    overflow: visible;
  }

  .info {
    text-align: center;
  }

  h1 {
    font-size: 1em;
    color: #222;
  }

  p {
    font-size: 0.75em;
    color: #444;
  }

  >>> svg {
    overflow: visible;
    max-width: 100%;
  }

  >>> .hover {
    transform-box: fill-box;
    transform-origin: center center;
  }

  @media(min-width: 768px) {
    .mini-project-card-logo-wrapper {
      border-radius: 60px;
    }
  }
</style>

<style>
.mini-project-card-logo-wrapper svg {
  height: 100%;
  width: 100%;
}
</style>
