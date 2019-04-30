
<!-- eslint-disable -->
<template>
<section class="projects">
  <h2 class="base__title" v-arrowUp>Projects</h2>
  <div class="projects__container">
    <Project  v-for="(project,index) in projects.slice(0, projectsToShow)" :key="index" :project="project" />
  </div>
  <div class="base__seeMore" >
    <a href="#" @click="showMoreProjects(), updateProjectsToShow()" v-show="projects.length > 3 && this.projectsToShow <= this.projects.length">See More</a>
  </div>
</section>
</template>

<script>
// @ is an alias to /src
import Project from '@/components/Project.vue';

export default {
  name: 'Projects',
  props: ['getTagName'],
  components: {
    Project,
  },
  data() {
    return {
      projects: this.$store.state.projects,
      projectsToShow: this.$store.state.projectsToShow,

    };
  },
  methods: {
    showMoreProjects() {
      this.projectsToShow = this.$store.getters.showMoreProjects;
    },
    updateProjectsToShow() {
      this.$store.commit('updateProjectsToShow', this.projectsToShow);
    },
  },


};
</script>

<style lang="scss">
@import '@/styles/_variables.scss';

.projects {


    &__container {
        display: grid;
        //grid-template-columns: repeat(auto-fill, 330px);
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        grid-column-gap: 40px;
        grid-row-gap: 40px;

        @include tablet{
          justify-content: center;
        }
    }

}
</style>
