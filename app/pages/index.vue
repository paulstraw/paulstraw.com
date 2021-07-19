<docs>
# Homepage

This page currently acts as a portfolio.
</docs>

<template>
  <div>
    <div>
      <div class="paulstraw-wrapper mt-2 mt-md-3">
        <img src="/paulstraw.png" alt="Paul Straw" class="paulstraw">
      </div>

      <div class="container mt-1 mt-md-2">
        <p class="p-1 p-xs-2 col-16 col-md-14 push-md-1 col-lg-10 push-lg-3 tac">I design and build video games and electronics for fun, and web and mobile applications for a living. Mostly, I like making things that make you smile. I post about new projects I’m experimenting with on <a href="https://instagram.com/paulstraw">Instagram</a> and <a href="https://twitter.com/paulstraw">Twitter</a>, or you can get in touch via <a href="mailto:paulstraw@paulstraw.com">email</a>.</p>
      </div>
    </div>

    <div class="mt-3 mt-lg-5">
      <h2 class="tac">Games I've Made</h2>
    </div>

    <div class="container mt-1">
      <div class="col-16 col-md-14 push-md-1 col-lg-12 push-lg-2 col-xl-10 push-xl-3 flex flex-wrap">
        <project-card
          v-for="game in gamesIveMade"
          :key="game.logoName"
          :project="game"
          class="col-16 p-2 col-xs-8 p-xs-1 p-sm-2 p-md-3 p-lg-4 center"
        />
      </div>
    </div>

    <div class="mt-3 mt-lg-5">
      <h3 class="tac">Game Jam Games</h3>
    </div>

    <div class="container">
      <div class="col-16 col-md-14 push-md-1 col-lg-12 push-lg-2 col-xl-10 push-xl-3 flex flex-wrap items-justify-evenly">
        <mini-project-card
          v-for="game in gameJamGames"
          :key="game.logoName"
          :project="game"
          class="col-8 px-1 py-2 py-sm-3 py-md-4 col-sm-third"
        />
      </div>
    </div>

    <div class="mt-3 mt-lg-5">
      <h2 class="tac">Things I've Written About</h2>
    </div>

    <div class="container mt-1">
      <div class="col-16 col-md-14 push-md-1 col-lg-12 push-lg-2 col-xl-10 push-xl-3 flex flex-wrap">
        <project-card
          v-for="post in blogPosts"
          :key="post.logoName"
          :project="post"
          class="col-16 p-2 col-xs-8 p-xs-1 p-sm-2 p-md-3 p-lg-4"
        />
      </div>
    </div>

    <div class="mt-3 mt-lg-5">
      <h2 class="tac">Some Companies I've Worked With</h2>
    </div>

    <div class="container">
      <div class="col-16 col-md-14 push-md-1 col-lg-12 push-lg-2 col-xl-10 push-xl-3 flex flex-wrap items-justify-evenly">
        <mini-project-card
          v-for="company in companies"
          :key="company.logoName"
          :project="company"
          class="col-8 px-1 py-2 py-sm-3 py-md-4 col-sm-third"
        />
      </div>
    </div>

    <div class="mt-3 mt-lg-5 mb-2">
      <h2 class="tac">Miscellany</h2>
    </div>

    <div class="container mb-5">
      <div class="col-16 col-md-14 push-md-1 col-lg-12 push-lg-2 col-xl-10 push-xl-3 flex flex-wrap">
        <a
          v-for="project in miscellany"
          :key="project.title"
          :href="project.url"
          class="misc-project col-16 col-xs-8 px-2 px-sm-3 py-2 py-md-3"
        >
          <h4>{{project.title}}</h4>
          <p>{{project.description}}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import MiniProjectCard from '~/components/pages/index/MiniProjectCard'
import ProjectCard from '~/components/pages/index/ProjectCard'

export default {
  name: 'Homepage',

  layout: 'homepage',

  components: {
    MiniProjectCard,
    ProjectCard,
  },

  data() {
    return {
      gamesIveMade: [
        {
          title: `Booster's Big Neighborhood`,
          description: 'iOS + Android',
          logoName: 'boosters-big-neighborhood',
          url: 'https://boostersbigneighborhood.com',
          logoHeight: '61%',
          logoBackground: '#021034 url("/img/bbn-bg.png")',
        },
        {
          title: 'Microcosm',
          description: 'HTC Vive + Oculus Rift',
          logoName: 'microcosm',
          url: 'https://store.steampowered.com/app/626570/Microcosm/',
          logoHeight: '73%',
          logoBackground: 'linear-gradient(to bottom, #b67dac 0%, #865d80 100%)',
        },
      ],
      gameJamGames: [
        {
          title: 'The Brothers Deep',
          description: 'Ludum Dare 48, 72 hours',
          logoName: 'the-brothers-deep',
          url: 'https://paulstraw.itch.io/the-brothers-deep',
          logoHeight: '40%',
          logoBackground: '#201e23',
        },
        {
          title: 'The Decline',
          description: 'Ludum Dare 42, 48 hours',
          logoName: 'the-decline',
          url: 'https://paulstraw.itch.io/the-decline',
          logoHeight: '45%',
          logoBackground: '#868686',
        },
        {
          title: `Booster's Day Out`,
          description: 'Ludum Dare 38, 48 hours',
          logoName: 'boosters-day-out',
          url: 'https://paulstraw.itch.io/boostersdayout',
          logoHeight: '86%',
          logoBackground: '#0c1417',
        },
      ],
      blogPosts: [
        {
          title: 'The Sprinter',
          description: 'Two years of van life tech',
          logoName: 'sprinter',
          url: '/sprinter',
          logoHeight: '48%',
          logoBackground: 'linear-gradient(to bottom, #6A8BB1 0%, #517298 100%)',
        },
        {
          title: 'MetaLamp',
          description: 'Bluetooth LED desk fixture',
          logoName: 'metalamp',
          url: '/metalamp',
          logoHeight: '73%',
          logoBackground: 'linear-gradient(to bottom, #A1D7BC 0%, #84C1A3 100%)',
        },
      ],
      companies: [
        {
          title: 'MetaLab',
          description: 'Principal Engineer',
          logoName: 'metalab',
          url: 'https://metalab.com',
          logoHeight: '62%',
          logoBackground: '#6349ff',
        },
        {
          title: 'Design Kollecive',
          description: 'VP Engineering',
          logoName: 'design-kollective',
          url: 'https://designkollective.com',
          logoHeight: '38%',
          logoBackground: '#e8613b',
        },
        {
          title: 'imgix',
          description: 'Developer Relations',
          logoName: 'imgix',
          url: 'https://imgix.com',
          logoHeight: '23.3%',
          logoBackground: '#172946',
        },
        {
          title: 'Does Not Compute',
          description: 'Podcast Co-host',
          logoName: 'spec',
          url: 'https://spec.fm',
          logoHeight: '24.6%',
          logoBackground: '#fff',
        },
        {
          title: 'Octopus Creative',
          description: 'Consulting Director/Partner',
          logoName: 'octopus',
          url: 'http://octopuscreative.com',
          logoHeight: '16.6%',
          logoBackground: '#0c1417',
        },
      ],
      miscellany: [
        {
          title: 'Nybble',
          description: 'Fun, impractical, blocky typeface. Public domain release.',
          url: 'https://paulstraw.itch.io/nybble',
        },
        {
          title: 'Placemat',
          description: 'Placeholder image nouns (people, places, and things). Powered by imgix + Unsplash.',
          url: 'https://placem.at'
        },
        {
          title: 'Drift',
          description: 'Easy "zoom on hover" website images. Lightweight, no-dependency JavaScript.',
          url: 'https://github.com/imgix/drift'
        },
        {
          title: 'Luminous',
          description: 'A simple, lightweight, no-dependencies JavaScript image lightbox.',
          url: 'https://github.com/imgix/luminous'
        },
      ]
    }
  },
}
</script>

<style scoped>
p a {
  position: relative;
  display: inline-block;
  color: #4EA0EB;
  text-decoration: none;
  z-index: 1;
}

p a:hover {
  text-decoration: underline;
}

.misc-project {
  text-decoration: none;
}

.misc-project:hover h4 {
  text-decoration: underline;
}

.misc-project h4 {
  color: #000;
  font-size: 1em;
}

.misc-project p {
  font-size: 0.75em;
  font-weight: 600;
  color: #444;
}
</style>
