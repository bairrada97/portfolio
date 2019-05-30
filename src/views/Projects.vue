
<!-- eslint-disable -->
<template>
<section class="projects">
  <h1 class="base__title">Projects</h1>
  <div class="projects__container">
    <Project  v-for="(project,index) in projects.slice(0, projectsToShow)" :key="index" :project="project" />
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
      const xSensitivity = 30;
      const ySensitivity = 45;
      const mouseX = event.pageX - event.target.getBoundingClientRect().left;
      const mouseY = event.pageY - event.target.getBoundingClientRect().top;
      const width = event.currentTarget.offsetWidth;
      let xAngle = (0.5 - (mouseY / width)) * xSensitivity;
      let yAngle = -(0.5 - (mouseX / width)) * ySensitivity;

      if (!this.changePerspective) {
        root.style.setProperty('--rotateX', `${xAngle}deg`);
        root.style.setProperty('--rotateY', `${yAngle}deg`);
      } else {
        xAngle = 0;
        yAngle = 0;
        root.style.setProperty('--rotateX', `${xAngle}deg`);
        root.style.setProperty('--rotateY', `${yAngle}deg`);
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
        //grid-template-columns: repeat(auto-fill, 330px);
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        grid-column-gap: 40px;
        grid-row-gap: 40px;

        @include tablet {
            justify-content: center;
        }

        @include mobile {
            grid-template-columns: 1fr;
        }
    }

}
</style>
