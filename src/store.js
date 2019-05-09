import Vue from 'vue';
import Vuex from 'vuex';
/* eslint-disable */

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    projects: [
      {
        id: 0,
        name: 'Chess Game',
        labels: ['Html', 'Sass', 'Javascript', 'ES6 Classes'],
        image: '/../assets/images/chess-01.png',
        imagesSlider: [{
            image: "/../assets/images/chess-01.png",
            description: "init board chess"
          },
          {
            image: "/../assets/images/chess-02.png",
            description: "pawn select while showing possible moves"
          },
          {
            image: "/../assets/images/chess-03.png",
            description: "pieces in middle of board with queen selected"
          }

        ],
        description: "Chess Game, is a simple game  when user's can play chess. It was also a project where I could pratice Javascript as a object oriented programming language.",
        liveSite: 'https://bairrada97.github.io/Chess-Game/',
        liveCode: 'https://github.com/bairrada97/Chess-Game',
      },
      {
        id: 1,
        name: 'The Weather Forecast',
        labels: ['Html', 'Sass', 'Jquery', 'PWA', "API"],
        image: '/../assets/images/weather-app-06.png',
        imagesSlider: [{
            image: "/../assets/images/weather-app-01.png",
            description: "one screen on Daily tab"
          },
          {
            image: "/../assets/images/weather-app-02.png",
            description: "two screens, in daily and extend tab"
          },
          {
            image: "/../assets/images/weather-app-03.png",
            description: "three screens, show different temperature on daily tab"
          },
          {
            image: "/../assets/images/weather-app-04.png",
            description: "two screens, on daily tab, changing background color"
          },
          {
            image: "/../assets/images/weather-app-05.png",
            description: "app fit in mobile screens"
          }
        ],
        description: "The Weather Forecast, It's a progressive web app when the user is able to know the current temperature, wind, humidty and precipitation in any location, as well as the next 5 days.",
        liveSite: 'https://the-weather-forecast.firebaseapp.com/',
        liveCode: 'https://github.com/bairrada97/WeatherApp',
      },
      {
        id: 2,
        name: 'Dyslexia App',
        labels: ['Html', 'Sass', 'Jquery', 'PWA'],
        image: '/../assets/images/dislexia-app-04.png',
        imagesSlider: [{
            image: "/../assets/images/dislexia-app-01.png",
            description: "main screen"
          },
          {
            image: "/../assets/images/dislexia-app-02.png",
            description: "screen when ask if its dyslexic or not"
          },
          {
            image: "/../assets/images/dislexia-app-03.png",
            description: "screen who ask if you are a boy or girl"
          },
          {
            image: "/../assets/images/dislexia-app-04.png",
            description: "screen to choose how you feel"
          }

        ],
        description: "Dyslexia App, It's an app to complement a goose game, to help people who don't suffer from dyslexia understand how life can be hard for people who suffer. This app It's built in standard Front-End skills, also was my first project in which I created a Progressive web app.",
        liveSite: 'https://dyslexia-app.firebaseapp.com/',
        liveCode: 'https://github.com/bairrada97/DyslexiaApp',
      },
    ],
    interests: [{
        id: 0,
        image: '/../assets/images/d-luis-bridge.webp',
        description: "D.Luis Bridge",
        isSelected: false,
      },
      {
        id: 1,
        image: '/../assets/images/temple-of-debod.webp',
        description: "Temple of Debod",
        isSelected: false,
      },
      {
        id: 2,
        image: '/../assets/images/budapest-parlament.webp',
        description: "Budapest Parlament",
        isSelected: false,
      },
      {
        id: 3,
        image: '/../assets/images/leaf.webp',
        description: "Leaf",
        isSelected: false,
      },
      {
        id: 4,
        image: '/../assets/images/aveiro.webp',
        description: "Aveiro",
        isSelected: false,
      },
      {
        id: 5,
        image: '/../assets/images/porto-landscape.webp',
        description: "Porto Landscape",
        isSelected: false,
      },
      {
        id: 6,
        image: '/../assets/images/andorra-landscape.webp',
        description: "Andorra Landscape",
        isSelected: false,
      },
    ],
    myImage: '/../assets/images/bairradaFace.png',
    illustrationImage: '/../assets/images/illustrationImage.png',
    illustrationDescription: "Illustration of me",
    socialIcons: {
      github: {
        icon: '/../assets/images/Github.svg',
        name: "GitHub",
        link: "https://github.com/bairrada97"
      },
      linkedin: {
        icon: '/../assets/images/LinkedIn.svg',
        name: "Linkedin",
        link: "https://www.linkedin.com/in/joao-bairrada/"
      },
      instagram: {
        icon: '/../assets/images/Instagram.svg',
        name: "Instagram",
        link: "https://www.instagram.com/_bairrada_/"
      },
      cv: {
        icon: '/../assets/images/iOSPaper.svg',
        name: "CV",
        link: "/../assets/images/bairradaResume.pdf"
      }
    },
    aboutMePhoto: '/../assets/images/bairrada.png',
    about: {

      language: {
        id: 0,
        image: '/../assets/images/language.png',
        text: "I can speak Portuguese and English"
      },
      mouse: {
        id: 1,
        image: '/../assets/images/rato.png',
        text: "Currently working at Fullsix"
      },
      photo: {
        id: 2,
        image: '/../assets/images/photo.png',
        text: "I love taking photos as an hobby, also I love coding"
      },
      keyboard: {
        id: 3,
        image: '/../assets/images/teclado.png',
        text: "My current skills are: HTML, Css/Sass, Javascript/Jquery and Vue.js, I know also Git and Gulp"
      },
      roots: {
        id: 4,
        image: '/../assets/images/raizes.png',
        text: "I'm from Lisbon, Portugal"
      },
      diploma: {
        id: 5,
        image: '/../assets/images/canudo.png',
        text: "I studied Economics in High School and took a specialization course in Front-End"
      },
      brain: {
        id: 6,
        image: '/../assets/images/brain.png',
        text: "I'm a Front-End Developer"
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
    isIntroVisible: false,
    projectImageSlider: 0
  },
  getters: {
    showMoreProjects: state => state.projectsToShow + 3,
    showMoreInterests: state => state.interestsToShow + 3,
    showModal: (state) => {
      for (let i = 0; i < state.interests.length; i++) {
        if (state.interests[i].isSelected) return state.interests[i];

      }

    },
    getProject: state => id => state.projects.find(project => project.id === id),
    routeTransition: state => state.transition,
    changePerspective: state => state.changePerspective,
    getRangeSliderValue: state => state.rangeSliderValue,
    isMobile: state => state.isMobile,
    isIntroVisible: state => state.isIntroVisible,
    getImageSlider: state => state.projectImageSlider
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
    isMobile: (state, payload) => {
      state.isMobile = payload;
    },
    isIntroVisible: (state, payload) => {
      state.isIntroVisible = payload;
    },
    getProjectImage: (state, payload) => {
      state.projectImageSlider = payload;
    }
  }
});
