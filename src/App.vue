    <template>
    <div id="app">
      <transition name="page" mode="in-out">
        <TransitionRouter v-if="transition" />
      </transition>
      <transition name="intro" mode="in-out">
          <BaseHeader  v-if="(isIntroVisible && rangeSliderValue >= maxValue - 4)
                      || !isIntroVisible "/>
      </transition>
      <div class="wrapper">
        <!--<BtnChangePerspective @click.native="updateChangePerspective" :text="text"/>-->
        <router-view :class="{ 'perspective' : changePerspective }" />
      </div>
      <transition name="fade">
        <PhotoModal :selectedPhoto="makeModalVisible" v-if="makeModalVisible" />
      </transition>
    </div>
    </template>


<script>
/* eslint-disable */
import BaseHeader from '@/components/BaseHeader.vue';
import PhotoModal from '@/components/PhotoModal.vue';
import TransitionRouter from '@/components/TransitionRouter.vue';
import BtnChangePerspective from '@/components/BtnChangePerspective.vue';
import router from './router';
import store from './store';

router.beforeEach((to, from, next) => {
  store.commit('updateChangePerspective', false);
  store.commit('updateTransition', true);
  setTimeout(function(){
  next();
  }, 1000);

console.log(to, from)
if(to.name == "CC"){
  store.commit('isIntroVisible', true);
}else{
 store.commit('isIntroVisible', false);
}
  

});
router.afterEach((to, from) => {
  document.querySelector('#app').style.overflow = 'auto';
  store.commit('isMobile', false);
  setTimeout(function(){
    store.commit('updateTransition', false);
}, 800);

});

export default {
  name: 'app',
  components: {
    BaseHeader,
    PhotoModal,
    TransitionRouter,
    BtnChangePerspective,
  },
  data() {
    return {
      maxValue: this.$store.state.maxRangeSliderValue,
      text: "3D Mode",
      intro: false
    };
  },
  methods: {
    updateChangePerspective() {
      this.$store.commit('updateChangePerspective', !this.changePerspective);

    },
  },
  created() {
    this.$store.commit('updateTransition', false);
  },
 
  computed: {
    makeModalVisible() {
      return this.$store.getters.showModal;
    },
    transition() {
      return this.$store.getters.routeTransition;
    },
    changePerspective() {
      return this.$store.getters.changePerspective;
    },
    rangeSliderValue() {
      return this.$store.getters.getRangeSliderValue;
    },
    isIntroVisible(){
      return this.$store.getters.isIntroVisible;
    },
    isHome(){
      return window.location.pathname != "/"
    }

  },

};
</script>
    <style lang="scss">
    @import '@/styles/_variables.scss';
    @import '@/styles/perspective.scss';
    @import '@/styles/animations.scss';

    #app {
        font-family: $louisGeorgeRegular;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: $white;
        background-color: $lightBlack;
        height: 100vh;
        overflow: auto;
    }

    .wrapper {
        margin: 0 auto;
        max-width: 1440px;
        width: 90%;
        padding: 0 5%;
        position: relative;
        display: block;
    }

    .page-enter-active {
        animation: transiton 1.8s ease;
    }


    </style>
