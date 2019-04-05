<template>
<section class="about">
  <h2 class="base__title" v-arrowUp>About Me</h2>
  <figure>
     <img :src="aboutMe" alt="" >
  </figure>

</section>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'about',
  data() {
    return {
      aboutMe: this.$store.state.aboutMe,
    };
  },
};
</script>
<style lang="scss">
@import '@/styles/_variables.scss';
.about {
    display: flex;
    flex-direction: column;
    overflow: hidden;

    .base__title{
      margin-bottom: 50px;
    }

    figure{
      height: 70%;
    }

    img {

        justify-content: center;
        text-align: center;
        margin:  0 auto;
        height: 100%;


    }

}
</style>
