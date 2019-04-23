import Vue from 'vue';
import Vuex from 'vuex';

/* eslint-disable */

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    projects: [
      {
        id: 0,
        name: 'Dyslexia App',
        labels: ['Html', 'Sass', 'Jquery', 'PWA'],
        image: 'https://via.placeholder.com/150',
        imagesSlider: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
        textTitle: 'Project Description',
        description: "Dyslexia App It's a progressive web app Dyslexia App It's a progressive web app Dyslexia App It's a progressive web app Dyslexia App It's a progressive web App Dyslexia App It's a progressive web app Dyslexia App It's a progressive web App Dyslexia App It's a progressive web app Dyslexia App It's a progressive web app Dyslexia App It's a progressive web app Dyslexia App It's a progressive web app Dyslexia App It's a progressive web app Dyslexia App It's a progressive web app ",
        liveSite: 'https://dyslexia-app.firebaseapp.com/',
        liveCode: 'https://github.com/bairrada97/DyslexiaApp',
      },
      {
        id: 1,
        name: 'Quizz Game',
        labels: ['Html', 'Sass', 'Jquery', 'PWA'],
        image: 'https://via.placeholder.com/150',
      },
      {
        id: 2,
        name: 'Dyslexia App',
        labels: ['Html', 'Sass', 'Jquery', 'PWA'],
        image: 'https://via.placeholder.com/150',
      }
    ],
    interests: [
      {
        id: 0,
        image: 'https://via.placeholder.com/150',
        name: '',
        isSelected: false,
      },
      {
        id: 1,
        image: 'https://via.placeholder.com/150',
        name: '',
        isSelected: false,
      },
      {
        id: 2,
        image: 'img/3.jpg',
        name: '',
        isSelected: false,
      },
      {
        id: 3,
        image: 'img/1.jpg',
        name: '',
        isSelected: false,
      },
      {
        id: 4,
        image: 'img/2.jpg',
        name: '',
        isSelected: false,
      },
    ],
    myImage: '/../assets/images/me2.png',
    illustrationImage: '/../assets/images/illustrationImage.png',
    socialIcons: {
      github:{
        icon: '/../assets/images/Github.svg',
        name: "GitHub"
      },
      linkedin:{
        icon: '/../assets/images/Linkedin.svg',
        name: "Linkedin"
      },
      instagram:{
        icon: '/../assets/images/Instagram.svg',
        name: "Instagram"
      },
      cv: {
        icon: '/../assets/images/iOSPaper.svg',
        name: "CV"
      }
    },
    aboutMePhoto: '/../assets/images/bairrada2.png',
    about: {
      
      language:{
        id: 0,
        image: '/../assets/images/language.png',
        text: "EU falo ingles e portuguesEU falo ingles e portuguesEU falo ingles e portuguesEU falo ingles e portuguesEU falo ingles e portuguesEU falo ingles e portuguesEU falo ingles e portuguesEU falo ingles e portuguesEU falo ingles e portuguesEU falo ingles e portuguesEU falo ingles e portuguesEU falo ingles e portuguesEU falo ingles e portuguesEU falo ingles e portuguesEU falo ingles e portuguesEU falo ingles e portuguesEU falo ingles e portuguesEU falo ingles e portuguesEU falo ingles e portuguesEU falo ingles e portuguesEU falo ingles e portuguesEU falo ingles e portuguesEU falo ingles e portuguesEU falo ingles e portuguesEU falo ingles e portuguesEU falo ingles e portuguesEU falo ingles e portuguesEU falo ingles e portuguesEU falo ingles e portuguesEU falo ingles e portuguesEU falo ingles e portuguesEU falo ingles e portuguesEU falo ingles e portuguesEU falo ingles e portuguesEU falo ingles e portuguesEU falo ingles e portugues"
      },
      mouse: {
        id: 1,
        image: '/../assets/images/rato.png',
        text: "EU falo ingles e portuguesssss"
      },
      photo: {
        id: 2,
        image: '/../assets/images/photo.png',
        text: "EU falo ingles e russo"
      },
      keyboard:{
        id: 3,
        image: '/../assets/images/teclado.png',
        text: "EU falo ingles e sueco"
      },
      roots:{
        id: 4,
        image: '/../assets/images/raizes.png',
        text: "EU falo ingles e baleies"
      },
      diploma: {
        id: 5,
        image: '/../assets/images/canudo.png',
        text: "EU falo ingles e espanhol"
      },
      brain : {
        id: 6,
        image: '/../assets/images/brain.png',
        text: "zeze"
      }

    },
    projectsToShow: 3,
    interestsToShow: 3,
    transition: false,
    changePerspective: false,
    perspectiveText: '3D Mode',
    isMobile: false,
    rangeSliderValue: null,
    maxRangeSliderValue: 6,
    isIntroVisible: false
  },
  getters: {
    showMoreProjects: state => state.projectsToShow + 4,
    showMoreInterests: state => state.interestsToShow + 4,
    showModal: (state) => {
      for (let i = 0; i < state.interests.length; i++) {
        if (state.interests[i].isSelected) return state.interests[i];

      }

    },
    getProject: state => id => state.projects.find(project => project.id === id),
    routeTransition: state => state.transition,
    changePerspective: state => state.changePerspective,
    getRangeSliderValue: state => state.rangeSliderValue,
    isMobile: state =>state.isMobile,
    isIntroVisible: state =>state.isIntroVisible
  },
  mutations: {
    updateProjectsToShow: (state, payload) => {
      state.projectsToShow = payload;
    },
    updateInterestsToShow: (state, payload) => {
      state.interestsToShow = payload;
    },
    isVisible: (state, payload) => {
      state.interests.forEach((element) => {
        element.isSelected = false;
      });
      state.interests[payload].isSelected = true;
    },
    isHidden: (state, payload) => {
      state.interests[payload].isSelected = false;
    },
    updateTransition: (state, payload) => {
      state.transition = payload;
    },
    updateChangePerspective: (state, payload) => {
      state.changePerspective = payload;
      if (state.changePerspective) {
        state.perspectiveText = "Normal Mode";
      } else {
        state.perspectiveText = "3D Mode";
      }
    },
    updateRangeSliderValue: (state, payload) => {
      state.rangeSliderValue = payload;
    },
    isMobile: (state, payload) =>{
      state.isMobile = payload;
    },
    isIntroVisible: (state, payload) => {
      state.isIntroVisible = payload;
    }
  }
});
