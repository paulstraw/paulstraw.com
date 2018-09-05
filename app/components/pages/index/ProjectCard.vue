<docs>
# ProjectCard
</docs>

<template>
  <article class="project-card">
    <a :href="project.url">
      <div
        class="logo-wrapper"
        :style="{
          background: project.logoBackground
        }"
      >
        <div
          v-html="require(`~/assets/svg/project-logos/${project.logoName}.svg`)"
        />
      </div>

      <h1>
        {{ project.title }}
        <template v-if="project.subtitle"> – <em>{{ project.subtitle }}</em></template>
      </h1>

      <p>{{ project.description }}</p>
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
}
</script>

<style scoped>

</style>
