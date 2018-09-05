<docs>
# Homepage

This page currently acts as a portfolio.
</docs>

<template>
  <div class="homepage">
    <div>
      <header>
        <h1>Paul Straw</h1>
        <h2>I Can't Stop Making Things</h2>
      </header>

      <article>
        <p>Hi, I’m Paul Straw. I like making things and helping people. If you want to get in touch, you can reach out via email at <a href="mailto:paulstraw@paulstraw.com">paulstraw@paulstraw.com</a>, or on Twitter <a href="https://twitter.com/paulstraw">@paulstraw</a>.</p>

        <p>Here are some of the things I've created, and some of the companies I've worked with:</p>
      </article>
    </div>

    <project-card
      v-for="project in projects"
      :key="project.logoName"
      :project="project"
    />

    <a href="https://twitter.com/paulstraw" title="@paulstraw on Twitter" class="twitter-link icon-twitter" data-grunticon-embed></a>
  </div>
</template>

<script>
import ProjectCard from '~/components/pages/index/ProjectCard'

export default {
  name: 'Homepage',

  components: {
    ProjectCard
  },

  data() {
    return {
      projects: [
        {
          title: `Design Kollective`,
          subtitle: `VP Engineering`,
          logoName: 'design-kollective',
          url: 'https://designkollective.com',
          description: `Making tools to help local furniture boutiques develop and maintain a web presence. We're still a very small team, so I do everything from frontend (Vue/Nuxt), to backend (Elixir), to writing and shooting marketing videos.`,
        },
        {
          title: `Microcosm`,
          logoName: 'microcosm',
          url: 'https://store.steampowered.com/app/626570/Microcosm/',
          description: `Build voxel worlds in virtual reality! Microcosm lets you place up to 512×256×516 (over 67 million) voxels however you'd like. Choose from solid, transparent, and light-emitting voxels to build the worlds you've always dreamed of.`,
        },
        {
          title: `The Decline`,
          logoName: 'the-decline',
          url: 'https://paulstraw.itch.io/the-decline',
          description: `Click to play now in your browser! Created in 48 hours for Ludum Dare 42. Can you get to the top of this crumbling world?`,
        },
        {
          title: `Booster's Day Out`,
          logoName: 'boosters-day-out',
          url: 'https://paulstraw.itch.io/boostersdayout',
          description: `Click to play now in your browser! Created in 48 hours for Ludum Dare 38. Booster's Day Out is the first game I publicly released. It's a physics-based, action-y, puzzle-y spaceflight journey. It's also absurdly difficult, so good luck!`,
        },
        {
          title: `Nybble`,
          logoName: 'nybble',
          url: 'https://paulstraw.itch.io/nybble',
          description: `A fun, impractical, blocky typeface. I made Nybble for use as a headline font in my own games and designs. It's a public domain release, click to learn more and download it.`,
        },
        {
          title: `imgix`,
          subtitle: `Developer Relations`,
          logoName: 'imgix',
          url: 'https://imgix.com',
          description: `Maintained client libraries for many different languages/frameworks, and built open-source tools to help developers work with images more effectively. Handled community management and engagement.`,
        },
        {
          title: `Does Not Compute`,
          logoName: 'does-not-compute',
          url: 'https://spec.fm/podcasts/does-not-compute',
          description: `Software development podcast. Co-hosted with Sean Washington for over two years and 130 episodes on the Spec podcast network.`,
        },
        {
          title: `Shuffle NYC`,
          logoName: 'shuffle-nyc',
          url: 'https://shuffle.nyc',
          description: `Apartment and classifieds newsletter app with a New York City focus. Built and launched the product from end-to-end; design and development.`,
        },
        {
          title: `Octopus`,
          subtitle: `Consulting Director / Partner`,
          logoName: 'octopus',
          url: 'http://octopuscreative.com',
          description: `Development team lead, client relationship and project management, web application architecture and development.`,
        },
        {
          title: `Placemat`,
          logoName: 'placemat',
          url: 'https://placem.at',
          description: `Placeholder image nouns (people, places, and things), powered by imgix and Unsplash.`,
        },
        {
          title: `Google`,
          logoName: 'google',
          url: 'https://www.google.com/?gws_rd=i_mean_what_else_am_i_going_to_link_to',
          description: `Mobile app user interaction prototype design and development.`,
        },
        {
          title: `Motif`,
          logoName: 'motif',
          url: 'https://motif.imgix.com',
          description: `Generate smart, responsive social network images that help your whole site look better in just a few clicks, powered by imgix.`,
        },
        {
          title: `CoverHound`,
          logoName: 'coverhound',
          url: 'https://coverhound.com',
          description: `Development support and integration with internal development teams for over three years.`,
        },
        {
          title: `Union & Fifth`,
          logoName: 'union-and-fifth',
          url: 'https://unionandfifth.com',
          description: `Buildout of custom ecommerce and inventory management systems. Ongoing maintenance, features, and devops for a year after launch.`,
        },
        {
          title: `Coin`,
          logoName: 'coin',
          url: 'https://hackernoon.com/r-i-p-plastc-and-coin-death-of-the-smartcard-industry-bc243cec913c',
          description: `Homepage animation design and implementation.`,
        },
        {
          title: `VerifyInvestor`,
          logoName: 'verify-investor',
          url: 'https://verifyinvestor.com',
          description: `Full site buildout including payment, reviewer/investor messaging, and JavaScript image redaction/annotation tool. Initial MVP developed and launched in four weeks.`,
        },
        {
          title: `The Sketchbook Project`,
          logoName: 'the-sketchbook-project',
          url: 'https://sketchbookproject.com',
          description: `Complete redesign implementation and upgrade to Rails 4. Refactoring and migration of existing production database schema.`,
        },
        {
          title: `Hewlett-Packard`,
          logoName: 'hewlett-packard',
          url: 'https://hp.com',
          description: `Mobile app user interaction prototype design and development.`,
        },
        {
          title: `Drift`,
          logoName: 'drift',
          url: 'https://github.com/imgix/drift',
          description: `Easily add "zoom on hover" functionality to your site's images. Lightweight, no-dependency JavaScript.`,
        },
        {
          title: `Luminous`,
          logoName: 'luminous',
          url: 'https://github.com/imgix/luminous',
          description: `A simple, lightweight, no-dependencies JavaScript lightbox.`,
        },
      ]
    }
  },
}
</script>

<style scoped>

</style>
