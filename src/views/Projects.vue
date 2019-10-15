
<!-- eslint-disable -->
<template>
<section class="projects">
  <h1 class="base__title">Projects</h1>
  <div class="projects__container" :class="{hasPerspective: changePerspective}">
    <Project v-for="(project,index) in projects.slice(0, projectsToShow)" :key="index" :project="project" />
  </div>
  <div class="base__seeMore">
    <a href="#" @click="showMoreProjects(), updateProjectsToShow()" v-show="projects.length > 3 && this.projectsToShow <= this.projects.length">See More</a>
  </div>
  <BtnChangePerspective :getMouseValues="getMouseValues" :resetMouseValues="resetMouseValues" @click.native="updateChangePerspective" :text="text" />
</section>
</template>

<script>
// @ is an alias to /src
/* eslint no-shadow: 2 */
/* eslint-env es6 */
/* eslint no-shadow: [2, { "hoist": "all" }] */
import Project from '@/components/Project.vue';
import BtnChangePerspective from '@/components/BtnChangePerspective.vue';

export default {
  name: 'Projects',
  props: ['getTagName'],
  components: {
    Project,
    BtnChangePerspective,
  },
  data() {
    return {
      projects: this.$store.state.projects,
      projectsToShow: this.$store.state.projectsToShow,
      text: '3D Mode',
    };
  },
  methods: {
    showMoreProjects() {
      this.projectsToShow = this.$store.getters.showMoreProjects;
    },
    updateProjectsToShow() {
      this.$store.commit('updateProjectsToShow', this.projectsToShow);
    },
    updateChangePerspective() {
      this.$store.commit('updateChangePerspective', !this.changePerspective);
    },
    getMouseValues(event) {
      const root = document.documentElement;
      const mouseX = event.pageX - event.currentTarget.getBoundingClientRect().left;
      const mouseY = event.pageY - event.currentTarget.getBoundingClientRect().top;
      const width = event.currentTarget.offsetWidth;
      const height = event.currentTarget.offsetHeight;
      const reverse = 1;
      const max = 30;
      const x = mouseX / width;
      const y = mouseY / height;

      let xAngle = (reverse * (max - x * max * 2)).toFixed(2);
      let yAngle = (reverse * (y * max * 2 - max)).toFixed(2);


      if (!this.changePerspective) {
        root.style.setProperty('--rotateX', `${yAngle}deg`);
        root.style.setProperty('--rotateY', `${xAngle}deg`);
      } else {
        xAngle = 0;
        yAngle = 0;
        root.style.setProperty('--rotateX', `${yAngle}deg`);
        root.style.setProperty('--rotateY', `${xAngle}deg`);
      }
    },
    resetMouseValues() {
      const root = document.documentElement;
      const xAngle = 0;
      const yAngle = 0;
      root.style.setProperty('--rotateX', `${xAngle}deg`);
      root.style.setProperty('--rotateY', `${yAngle}deg`);
    },
  },
  computed: {
    changePerspective() {
      document.querySelectorAll('.projects__container').style = 'grid-row-gap: 40px';
      return this.$store.getters.changePerspective;
    },
  },


};
</script>

<style lang="scss">
@import '@/styles/_variables.scss';

.projects {
    height: 100vh;

    &__container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        grid-column-gap: 40px;
        grid-row-gap: 40px;


        @include tablet {
            justify-content: center;
        }

        @include mobile {
            grid-template-columns: 1fr;
        }

        &.hasPerspective{
            grid-row-gap: 80px;
        }
    }

}
</style>
