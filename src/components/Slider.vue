<!-- eslint-disable -->
<template>
<div class="slider">
  <img :src="image[counter].image" :alt="image[counter].description">
  <div class="slider__buttons">
    <svg class="js-left" @click="goBack" width="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101.9 89.9"><path d="M28.8 45.6l38.8 38.2c1.3 1.2 3.3 1.2 4.5-.1s1.3-3.2.1-4.5L37.4 45.6l34.8-34.8c1.2-1.3 1.2-3.3-.1-4.5s-3.2-1.3-4.5-.1L28.8 45.6z"/></svg>
    <svg class="js-right" @click="goForward" width="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101.9 89.9"><path d="M34.3 6.2C33 5 31 5 29.8 6.2c-1.2 1.2-1.3 3.2-.1 4.5l34.8 34.8-34.8 33.6c-1.2 1.3-1.2 3.3.1 4.5 1.2 1.2 3.2 1.3 4.5.1l38.8-38.2L34.3 6.2z"/></svg>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
/*eslint-disable*/

export default {
  name: 'slider',
  props: ['image'],
  data() {
    return {
      counter: this.$store.getters.getImageSlider
    };
  },
  created() {
    window.addEventListener('keydown', this.navigate);
  },
  destroyed() {
    window.removeEventListener('keydown', this.navigate);
    this.$store.commit('getProjectImage', 0);
  },
  updated(){
    let arrowLeft = document.querySelector('.js-left'),
        arrowRight = document.querySelector('.js-right');
    if(this.counter == 0){
      arrowLeft.style.opacity = "0.3";
    }else if(this.counter == this.image.length - 1){
      arrowRight.style.opacity = "0.3";
    }else{
      arrowLeft.style.opacity = "1";
      arrowRight.style.opacity = "1";
    }
  },
  methods: {
    goForward() {
      if (this.counter < this.image.length - 1) this.$store.commit('getProjectImage', this.counter++);
    },
    goBack() {
      if (this.counter > 0) this.$store.commit('getProjectImage', this.counter--);
    },
    navigate(e) {
      if (e.key === 'ArrowLeft') this.goBack();
      if (e.key === 'ArrowRight') this.goForward();
    }


  }

};
</script>

<style lang="scss">
@import '@/styles/_variables.scss';

.slider {
    padding-bottom: $s-8;
    flex: 1 1 55%;
    transition: all 1s ease;

    @include laptop {
        display: block;
        width: 100%;

    }

    img {
        display: block;
        width: 100%;
        max-width: 702px;
        padding-bottom: $s-6;
        margin-left: auto;
        user-select: none;
        transition: all 1s ease;

        @include laptop {
            max-width: none;
        }
    }

    &__buttons {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        transition: all 1s ease;

        svg {
            cursor: pointer;
            fill: $blue;
        }
    }

}
</style>
