<!-- eslint-disable -->
<template>
<section class="projectDetail">
  <h2 class="base__title" v-arrowUp>{{project.name}}</h2>
  <div class="projectDetail__container">
    <div class="projectDetail__infoContainer">
      <p class="projectDetail__text"  v-arrowUp>{{project.description}}</p>
      <Slider :image="project.imagesSlider"/>
    </div>
      <a class="margin" :href="project.liveSite" target="_blank">See live</a>
      <a :href="project.liveCode" target="_blank">See code</a>
  </div>
</section>
</template>

<script>
// @ is an alias to /src
import Project from '@/components/Project.vue';
import Slider from '@/components/Slider.vue';

export default {
  /* eslint-disable */
  name: 'projectDetail',
  components: {
    Project,
    Slider,
  },
  data() {
    return {
      project: {},
    };
  },
  created() {
    const projectId = ~~this.$route.params.id;
    this.project = this.$store.getters.getProject(projectId);
  },
};
</script>

<style lang="scss">
@import '@/styles/_variables.scss';

.projectDetail {
    font-family: $louisGeorgeBold;

    &__container {
        background: linear-gradient(to bottom, $lightBlack 10%, $darkBlack 10%, $darkBlack 95%);
        padding: 0 5% $s-10 5%;
        text-align: left;
        margin-bottom: $m-6;
    }

    &__infoContainer{
      display: flex;

      @include laptop{
        flex-direction: column-reverse;
      }
    }

    &__text {
        font-size: $font-size3;
        margin-top: $m-6;
        margin-right: $m-1;
        margin-bottom: $m-2;
        max-width: 700px;
        line-height: 1.5;
        display: inline-block;
        width: 39%;
        vertical-align: top;

        @include laptop{
          display: block;
          width: 100%;
          margin-top: 0;
          margin-bottom: $m-3;
        }


    }

    .margin {
        margin-right: $m-4;

         @include tablet{
            margin-left: 5%;

        }
    }
}
</style>
