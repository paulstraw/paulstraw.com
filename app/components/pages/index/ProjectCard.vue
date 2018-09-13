<docs>
# ProjectCard
</docs>

<template>
  <article
    @mouseenter="waveHello"
    @touchstart="waveHello"
    class="project-card group"
  >
    <a
      :href="project.url"
      class="flex-xs items-stretch"
    >
      <div
        class="logo-wrapper flex items-center py-4 px-3 p-sm-3 col-16 col-xs-8 col-sm-6"
        :style="{
          background: project.logoBackground
        }"
      >
        <div
          :style="{
            height: `${project.logoHeight}px`
          }"
          class="col-16"
          v-html="require(`~/assets/svg/project-logos/${project.logoName}.svg`)"
        />
      </div>

      <div class="info col-16 col-xs-8 col-sm-10 p-2 px-md-3 py-xl-3 flex items-center">
        <div>
          <h1 class="mb-1">
            {{ project.title }}
            <template v-if="project.subtitle"> – <em>{{ project.subtitle }}</em></template>
          </h1>

          <p>{{ project.description }}</p>
        </div>
      </div>
    </a>
  </article>
</template>

<script>
export default {
  name: 'ProjectCard',

  props: {
    project: {
      type: Object,
      required: true,
    }
  },

  data() {
    return {
      waving: false
    }
  },

  methods: {
    waveHello() {
      if (this.waving) {
        return
      }

      this.waving = true
      let that = this
      this.$velocity(this.$el.querySelectorAll('.hover'), 'hello', {
        stagger: 30,
        complete() {
          that.waving = false
        }
      })
    }
  }
}
</script>

<style scoped>
.project-card {
  font-size: 16px;
  border-radius: 3px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

h1 {
  font-size: 18px;
  font-weight: 600;
}

@media (min-width: 800px) {
  .project-card {
    font-size: 18px;
  }

  h1 {
    font-size: 21px;
  }
}

.info {
  background: #fff;
  border-radius: 0 0 3px 3px;
}

a {
  color: #333;
  text-decoration: none;
}

.logo-wrapper {
  text-align: center;
  border-radius: 3px 3px 0 0;
}

@media (min-width: 640px) {
  .info {
    border-radius: 0 3px 3px 0;
  }

  .logo-wrapper {
    border-radius: 3px 0 0 3px;
  }
}


>>> svg {
  overflow: visible;
}

>>> .hover {
  transform-box: fill-box;
  transform-origin: center center;
}
</style>

<style>
.logo-wrapper svg {
  height: 100%;
}
</style>
