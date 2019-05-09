<!-- eslint-disable -->
<template>
<section class="interests">
  <h1 class="base__title" v-arrowUp>Interests</h1>
  <p class="interests__description">Besides coding, photography is one of my passions. Here are some photos I took</p>
  <div class="interests__container">
    <Photo  @click.native="showModal(photo)" v-for="(photo, index) in photos.slice(0, interestsToShow)" :key="index" :photo="photo"/>
  </div>
  <div class="base__seeMore">
    <a href="#" @click="showMoreInterests(), updateInterestsToShow()" v-show="photos.length > 2 && this.interestsToShow <= this.photos.length">See More</a>
  </div>
</section>
</template>

<script>
// @ is an alias to /src
import Photo from '@/components/Photo.vue';


export default {
  name: 'interests',
  components: {
    Photo,
  },
  data() {
    return {
      photos: this.$store.state.interests,
      interestsToShow: this.$store.state.interestsToShow,
    };
  },
  methods: {
    showMoreInterests() {
      this.interestsToShow = this.$store.getters.showMoreInterests;
    },
    updateInterestsToShow() {
      this.$store.commit('updateInterestsToShow', this.interestsToShow);
    },
    showModal(photo) {
      this.$store.commit('isVisible', photo.id);
    },
  },

};
</script>
<style lang="scss">
@import '@/styles/_variables.scss';

.interests {

    &__container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        grid-column-gap: 40px;
        grid-row-gap: 40px;

        @include laptop{
          justify-content: center;
        }
    }

    &__description{
      text-align: left;
      margin-bottom: $s-7;
    }
}
</style>
