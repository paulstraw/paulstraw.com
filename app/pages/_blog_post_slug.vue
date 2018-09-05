<template>
  <div class="inner">
    <article>
      <h1 class="post-title">{{ .Title }}</h1>
      <p class="post-date">{{ .Date.Format "Mon, Jan 2, 2006" }}</p>

      <div class="post-content">
        {{ .Content }}
      </div>
    </article>
  </div>
</template>

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
