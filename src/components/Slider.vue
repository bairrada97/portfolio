<!-- eslint-disable -->
<template>
<div class="slider">
  <img :src="image[counter]" alt="">
  <div class="slider__buttons">
    <svg rel="prev" @click="goBack"  width="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101.9 89.9"><path d="M28.8 45.6l38.8 38.2c1.3 1.2 3.3 1.2 4.5-.1s1.3-3.2.1-4.5L37.4 45.6l34.8-34.8c1.2-1.3 1.2-3.3-.1-4.5s-3.2-1.3-4.5-.1L28.8 45.6z"/></svg>
    <svg rel="next" @click="goForward" width="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101.9 89.9"><path d="M34.3 6.2C33 5 31 5 29.8 6.2c-1.2 1.2-1.3 3.2-.1 4.5l34.8 34.8-34.8 33.6c-1.2 1.3-1.2 3.3.1 4.5 1.2 1.2 3.2 1.3 4.5.1l38.8-38.2L34.3 6.2z"/></svg>
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
      counter: 0,
    };
  },
  methods: {
    goForward(e) {
      if (this.counter < this.image.length - 1) return this.counter++;
    },
    goBack() {
      if (this.counter > 0) return this.counter--;
    },
  },
};
</script>

<style lang="scss">
@import '@/styles/_variables.scss';

.slider {
    padding-bottom: 40px;
    display: inline-block;
    width: 60%;

    @include tablet{
      display: block;
      width: 100%;
    }

    img {
        display: block;
        width: 100%;
        height: 400px;
        object-fit: cover;
        padding-bottom: 20px;
    }

    &__buttons {
      display: flex;
      justify-content: flex-end;
      align-items: center;

        svg {
            cursor: pointer;
            fill: $blue;
        }
    }

}
</style>
