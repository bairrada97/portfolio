<!-- eslint-disable -->
<template>
<section class="projectDetail">
  <h2 class="base__title" v-arrowUp>{{project.name}}</h2>
  <div class="projectDetail__container">
    <div class="projectDetail__infoContainer">
      <p class="projectDetail__text"  v-arrowUp>{{project.description}}</p>
      <Slider :image="project.imagesSlider"  v-arrowUp/>
    </div>
      <a class="margin" :href="project.liveSite">Ver site</a>
      <a :href="project.liveCode">Ver Código</a>
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
    const projectId = this.$route.params.id; 
    this.project = this.$store.getters.getProject(projectId);
  },
};
</script>

<style lang="scss">
@import '@/styles/_variables.scss';

.projectDetail {
    font-family: $louisGeorgeBold;

    &__container {
        background: linear-gradient(to bottom, #252525 20%, #202020 14%, #202020 95%);
        padding: 70px 5%;
        text-align: left;
    }

    &__infoContainer{
      display: flex;

      @include tablet{
        flex-direction: column-reverse;
      }
    }

    &__textTitle {
        color: $blue;
        font-size: 20px;
        margin-bottom: 20px;
    }

    &__text {
        font-size: 16px;
        margin-top: 100px;
        max-width: 700px;
        line-height: 1.5;
        display: inline-block;
        width: 39%;
        vertical-align: top;

        @include tablet{
          display: block;
        width: 100%;
        margin-top: 0;
        margin-bottom: 40px; 
        }
    }

    .margin {
        margin-right: 50px;
    }
}
</style>
