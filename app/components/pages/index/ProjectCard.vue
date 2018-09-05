<docs>
# ProjectCard
</docs>

<template>
  <article class="project-card">
    <a :href="project.url">
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
      required: true
    }
  },
}
</script>

<style scoped>

</style>
