<template>
<div class="modal" @click="hiddenModal" >
  <div class="modal__container" @click.stop>
    <svg width="50px" @click="hiddenModal" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101.9 89.9"><path d="M78.4 14.6C68.7 7.9 56.9 5.3 45.5 2.9c-2.4-.5-4 1.6-4 3.5-3.2.6-6.4 1.5-9.5 2.8C23.8 12.7 16.9 19 12.7 27c-8.3 15.7-6.3 36.3 6.8 48.8C31 86.9 49 90.8 64.2 85.9c9.1-2.9 17.3-8.6 22.7-16.7 5.5-8.4 8.4-19.4 7.3-29.4C93 29.3 87 20.7 78.4 14.6zm7.4 44.3c-3.2 8.3-9.3 14.8-17.2 18.9-12.7 6.5-28.5 5.5-40.3-2.4C15.4 66.8 10.9 50.6 15.2 36c2.5-8.5 8.1-15.4 15.4-20.2 3.7-2.5 7.8-4.3 12.1-5.5 1-.3 2-.5 3-.8 15.6 2.9 33.9 7.3 40.9 23.1 3.7 8.2 2.4 18.1-.8 26.3z"/><path d="M55.8 45l6.3-6.6c3-3.1 6.8-6.3 8.8-10.1.6-1.2-.6-2.5-1.9-1.9-3.7 1.9-6.8 5.5-9.9 8.4-2.4 2.2-4.8 4.3-7.1 6.5-2.2-2.2-4.4-4.3-6.7-6.4-3.1-3-6.3-6.8-10.1-8.8-1.2-.6-2.5.6-1.9 1.9 1.9 3.7 5.5 6.8 8.4 9.9 2.2 2.4 4.3 4.7 6.5 7.1-5.4 5.1-10.9 10.2-16 15.5-2.6 2.7 1.4 6.8 4.2 4.1C41.7 59.5 46.8 54.2 52 49c5.1 5.4 10.1 10.8 15.4 15.9 2.7 2.6 6.8-1.4 4.2-4.2-5.2-5.3-10.5-10.5-15.8-15.7z"/></svg>
    <img class="modal__image" :src="selectedPhoto.image" alt="">
    <div class="slider__buttons">
      <svg  @click="goBack"  class="ze" width="50px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101.9 89.9"><path d="M28.8 45.6l38.8 38.2c1.3 1.2 3.3 1.2 4.5-.1s1.3-3.2.1-4.5L37.4 45.6l34.8-34.8c1.2-1.3 1.2-3.3-.1-4.5s-3.2-1.3-4.5-.1L28.8 45.6z"/></svg>
      <svg @click="goForward"  width="50px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101.9 89.9"><path d="M34.3 6.2C33 5 31 5 29.8 6.2c-1.2 1.2-1.3 3.2-.1 4.5l34.8 34.8-34.8 33.6c-1.2 1.3-1.2 3.3.1 4.5 1.2 1.2 3.2 1.3 4.5.1l38.8-38.2L34.3 6.2z"/></svg>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'photoModal',
  props: ['selectedPhoto'],
  data() {
    return {
      counter: 0,
    };
  },
  created() {
    window.addEventListener('keydown', this.navigate);
  },
  destroyed() {
    window.removeEventListener('keydown', this.navigate);
  },
  methods: {
    hiddenModal() {
      this.$store.commit('isHidden', this.selectedPhoto.id);
    },
    navigate(e) {
      if (e.key === 'ArrowLeft') this.goBack();
      if (e.key === 'ArrowRight') this.goForward();
    },
    goBack() {
      this.$store.commit('isVisible', this.selectedPhoto.id - 1);
    },
    goForward() {
      this.$store.commit('isVisible', this.selectedPhoto.id + 1);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">
@import '@/styles/_variables.scss';

.modal {
    width: 100%;
    height: 100%;
    background: rgba(32,32,32,0.85);
    position: absolute;
    top: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;

    &__container {
        position: relative;
    }

    &__image {
        max-width: 970px;
        width: 100%;
    }

    .slider__buttons {
        position: relative;
        svg {
            bottom: 0;
            left: -50px;

            &.ze {
                left: -100px;
            }
        }

    }

    svg {
        cursor: pointer;
        position: absolute;
        top: -60px;
        right: -60px;
        fill: $white;
    }
}
</style>
