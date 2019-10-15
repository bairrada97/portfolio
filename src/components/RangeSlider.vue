<!-- eslint-disable -->
<template>
<div class="input__container">
  <p>{{scrollingText}}</p>
</div>
</template>

<script>
/*eslint-disable*/
export default {
  name: 'rangeSlider',
  data() {
    return {
      counter: 0,
      isScrolling: null,
      scrollingText: ""
    };
  },
  created() {
    var touchDevice = (navigator.maxTouchPoints || 'ontouchstart' in document.documentElement);
    this.$store.commit('updateRangeSliderValue', this.counter++);

    if (this.getRangeValue == 0) this.scrollingText = "Scroll To Build Website";
    if (touchDevice && this.getRangeValue == 0) this.scrollingText = "Tap To Build Website";
  },
  mounted() {

    var touchDevice = (navigator.maxTouchPoints || 'ontouchstart' in document.documentElement);
    document.body.addEventListener('wheel', this.mouseScroll);
    if (touchDevice) {
      scrollingText: "Tap to Build Website";
      document.querySelector('#app').style.cursor = 'pointer';
      document.querySelector('body').style.cursor = 'pointer';
      document.querySelector('#app').style.userSelect = "none";
      document.body.addEventListener('click', this.mouseScroll);

    }

  },
  beforeDestroy() {
    var touchDevice = (navigator.maxTouchPoints || 'ontouchstart' in document.documentElement);
    document.body.removeEventListener('wheel', this.mouseScroll);
    if (touchDevice) {
      document.body.removeEventListener('click', this.mouseScroll)
      document.querySelector('#app').style.cursor = 'auto';
      document.querySelector('body').style.cursor = 'auto';

    };

  },
  methods: {
    mouseScroll(e) {
      this.throttle(e, this.handleScroll, 500);
    },
    handleScroll(event) {
      var touchDevice = (navigator.maxTouchPoints || 'ontouchstart' in document.documentElement);
      this.$store.commit('updateRangeSliderValue', this.counter++);

      var getRangeValue = this.$store.getters.getRangeSliderValue;

      if (this.getRangeValue == 1) this.scrollingText = "Keep Scrolling"
      if (this.getRangeValue == 2) this.scrollingText = "Keep Scrolling"
      if (this.getRangeValue == 3) this.scrollingText = "You are almost there"
      if (this.getRangeValue == 4) this.scrollingText = "Keep Scrolling"
      if (this.getRangeValue == 5) this.scrollingText = "Just one more time"
      if (touchDevice) {

        if (this.getRangeValue == 1) this.scrollingText = "Keep tapping"
        if (this.getRangeValue == 2) this.scrollingText = "Keep tapping"
        if (this.getRangeValue == 3) this.scrollingText = "You almost there"
        if (this.getRangeValue == 4) this.scrollingText = "Keep tapping"
        if (this.getRangeValue == 5) this.scrollingText = "Just one more time"
      }
    },
    throttle(event, func, limit) {
      if (!this.isScrolling) {
        func(event);
        this.isScrolling = true;
        setTimeout(() => this.isScrolling = false, limit)
      }
    }
  },
  computed: {
    getRangeValue() {
      return this.$store.getters.getRangeSliderValue
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">
@import '@/styles/_variables.scss';

.input__container {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    max-width: 1280px;
    bottom: 100px;
    width: 50%;
    animation: text 3s ease;

    p {
        font-size: $font-size5;
        color: $blue;
    }

    @include tablet {
        width: 90%;
    }
}
</style>
