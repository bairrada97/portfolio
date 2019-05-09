<!-- eslint-disable -->
<template>
<section class="projectDetail">
  <h1 class="base__title" v-arrowUp>{{project.name}}</h1>
  <div class="projectDetail__container">
    <div class="projectDetail__infoContainer">
      <div class="projectDetail__textContainer">
        <p class="projectDetail__text" v-arrowUp>{{project.description}}</p>
        <div class="projectDetail__labelContainer">
          <p class="projectDetail__subTitle">Skills:</p>
          <span class="projectDetail__label" :key="label" v-for="label in project.labels">{{ label }}</span>
        </div>
      </div>
      <Slider :image="project.imagesSlider" />
    </div>

    <a class="margin" :href="project.liveSite" target="_blank">Go to Site</a>
    <a :href="project.liveCode" target="_blank">Code in Github</a>
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
        padding: 0 5% $s-10;
        text-align: left;
        margin-bottom: $m-6;
    }

    &__infoContainer {
        display: flex;
        flex-wrap: wrap;

        @include laptop {
            flex-direction: column-reverse;
        }
    }

    &__textContainer {
        display: flex;
        flex-direction: column;
        margin-top: 7rem;
        margin-right: $m-1;
        margin-bottom: $m-2;
        max-width: 700px;
        line-height: 1.5;
        flex: 1 1 40%;

        @include laptop {
            display: block;
            width: 100%;
            margin-top: 0;
            margin-bottom: $m-4;
        }

    }

    &__text {
        font-size: $font-size3;
    }

    &__subTitle{
      margin-bottom: $s-5;
      font-size: $font-size5;
      color: $blue;
      width: 100%;
    }

    &__labelContainer {
        position: relative;
        z-index: 1;
        margin-top: $s-9;
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
    }

    &__label {
        border-radius: 10px;
        background-color: #1b191a;
        font-family: $louisGeorgeBold;
        letter-spacing: 2.2px;
        color: $white;
        padding: 5px;
        margin-right: 10px;
        margin-bottom: 10px;
        font-size: $font-size1;

        &:last-of-type {
            margin-right: 0;
        }

    }

    .margin {
        margin-right: $m-4;

        @include tablet {
            margin-left: 5%;

        }
    }
}
</style>
