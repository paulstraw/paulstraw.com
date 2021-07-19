export default {
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
