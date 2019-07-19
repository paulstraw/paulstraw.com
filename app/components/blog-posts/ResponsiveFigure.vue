<docs>
# ResponsiveFigure
</docs>

<template>
  <div
    class="responsive-figure"
    :class="{
      'rf-left': position === 'left',
      'rf-right': position === 'right',
      open: open,
    }"
  >
    <figure>
      <button class="toggle" @click="open = !open">
        {{ open ? 'Close' : 'Open' }}
      </button>
      <slot />
    </figure>
  </div>
</template>

<script>
export default {
  name: 'ResponsiveFigure',

  props: {
    position: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      open: false,
    }
  },
}
</script>

<style scoped>
.responsive-figure {
  width: 20vw;
  z-index: 9;
  position: relative;
}

.responsive-figure .toggle {
  z-index: 1;
  appearance: none;
  display: block;
  width: 36px;
  height: 36px;
  margin: 0;
  padding: 0;
  position: absolute;
  top: -3px;
  border: 1px solid #c1d5e5;
  border-radius: 30px;
  background: #fff;
  box-shadow: 0 2px 6px rgba(193, 213, 229, 0.3);
  outline: 0;
  transition: all 150ms cubic-bezier(0.23, 0.12, 0.29, 1.27);
  -webkit-tap-highlight-color: transparent;
  text-indent: 300%;
  white-space: nowrap;
  overflow: hidden;
}

.responsive-figure .toggle:active {
  transform: scale(0.95);
}

.responsive-figure .toggle:before,
.responsive-figure .toggle:after {
  content: '';
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 14px;
  height: 2px;
  background: #404e59;
  transition: all 600ms cubic-bezier(0.23, 0.12, 0.29, 1.27);
  transform-origin: center;
}

.responsive-figure .toggle:before {
  transform: translate(-50%, -50%) rotate(-180deg);
}

.responsive-figure.open .toggle:before {
  transform: translate(-50%, -50%) rotate(-45deg);
}

.responsive-figure .toggle:after {
  transform: translate(-50%, -50%) rotate(-90deg);
}

.responsive-figure.open .toggle:after {
  transform: translate(-50%, -50%) rotate(45deg);
}

.rf-left .toggle {
  right: -3px;
}

.rf-right .toggle {
  left: -3px;
}

.responsive-figure figure {
  width: 90vw;
  background: #fff;
  transition: all 450ms cubic-bezier(0.23, 0.12, 0.29, 1.27);
  padding: 2.5vw;
  margin-top: 0;
  margin-bottom: 0;
  position: relative;
}

.responsive-figure.open figure {
  box-shadow: 0 0 24px 18px #fff;
}

.rf-left {
  float: left;
  margin-right: 0.5em;
  margin-left: -2.5vw;
}

.rf-left figure {
  transform: translateX(-75vw);
}

.rf-left.open figure {
  transform: translateX(0);
}

.rf-right {
  float: right;
  margin-left: 0.5em;
  margin-right: -2.5vw;
}

.rf-right figure {
  transform: translateX(0);
}

.rf-right.open figure {
  transform: translateX(-75vw);
}

@media (min-width: 480px) {
  .responsive-figure .toggle {
    display: none;
  }

  .responsive-figure figure {
    width: 100%;
    position: relative;
    padding: 0;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    transform: translateX(0);
    box-shadow: none;
  }

  .rf-left {
    width: 50%;
    margin-left: 0;
    margin-right: 1em;
  }

  .rf-right {
    width: 50%;
    margin-right: 0;
    margin-left: 1em;
  }
}
</style>
