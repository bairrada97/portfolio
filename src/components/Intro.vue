<template>
<div class="intro">
  <div class="intro__container">
    <transition name="fade">
      <div class="intro__titleContainer" v-if="rangeSliderValue < maxValue/6">
        <h1 class="base__title" data-id="1">{{ msg }}</h1>
        <span></span>
      </div>
    </transition>
  </div>
  <RangeSlider v-if="timeToScroll"/>
</div>
</template>

<script>
// @ is an alias to /src
/* eslint-disable */
import RangeSlider from '@/components/RangeSlider.vue';

export default {
  name: 'Intro',
  components: {
    RangeSlider,

  },
  data() {
    return {
      msg: "I'm a Front-End Developer",
      maxValue: this.$store.state.maxRangeSliderValue,
      timeToScroll: false,
      isIntro: false,
    };
  },

  computed: {
    rangeSliderValue() {
      return this.$store.getters.getRangeSliderValue;
    },

  },
  mounted() {
    setTimeout(() => {
      this.msg = 'Welcome to my Portfolio';
      this.timeToScroll = true;
    }, 3300);

  }


};
</script>
<style lang="scss">
@import '@/styles/_variables.scss';

.intro {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 2;

    &__container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        min-width: 70%;

        @include mobile{
          min-width: 100%;
        }

    }

    .intro__titleContainer {
        position: relative;
        transition: all 0.5s ease;
    }

    .base__title {
       @include typography(20, 48, $minVw, $maxVW);
        position: relative;
        letter-spacing: 5px;
        text-align: center;
        white-space:nowrap;
        width: 100%;


        &[data-id="1"] {
       @include typography(14, 48, $minVw, $maxVW);

            opacity: 0;
            animation: text 1.5s 1s ease;
            animation-fill-mode: forwards;
        }

    }

    span {
        position: absolute;
        bottom: -10%;
        left: 50%;
        transform: translateX(-50%);
        z-index: 2;
        background: $blue;
        animation: introAnimation 1.8s 0.8s ease;
        animation-iteration-count: 2;
    }

}
</style>
