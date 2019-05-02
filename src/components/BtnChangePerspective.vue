<template>
<div @mousemove="getMouseValues"
     @mouseleave="resetMouseValues"
     class="btnChangePerspective"
     v-if="onlyProjectPage">
  <button  type="button" name="button">
    <span @mousemove="getMouseValues">{{perspectiveText}}</span>
  </button>
</div>
</template>

<script>
export default {
  /* eslint-disable */
  name: 'btnChangePerspective',
  props: ['text'],
  data() {
    return {
      maxValue: this.$store.state.maxRangeSliderValue,

    };
  },
  methods: {
    getMouseValues() {
      const root = document.documentElement;
      const xSensitivity = 30;
      const ySensitivity = 45;
      const mouseX =  event.pageX - event.target.getBoundingClientRect().left;
      const mouseY = event.pageY - event.target.getBoundingClientRect().top;
      const width = event.currentTarget.offsetWidth;
      const xAngle = (0.5- (mouseY / width)) * xSensitivity;
      const yAngle = -(0.5 -(mouseX / width)) * ySensitivity;

      if(!this.changePerspective){
        root.style.setProperty('--rotateX', `${xAngle}deg`);
        root.style.setProperty('--rotateY', `${yAngle}deg`);
      }else{
        const xAngle = 0;
        const yAngle = 0;
        root.style.setProperty('--rotateX', `${xAngle}deg`);
        root.style.setProperty('--rotateY', `${yAngle}deg`);
      }


    },
    resetMouseValues(){
      const root = document.documentElement;
      const xAngle = 0;
      const yAngle = 0;
      root.style.setProperty('--rotateX', `${xAngle}deg`);
      root.style.setProperty('--rotateY', `${yAngle}deg`);
    }
  },
  computed: {
    perspectiveText(){
      return this.$store.state.perspectiveText
    },
    rangeSliderValue() {
      return this.$store.getters.getRangeSliderValue;
    },
    changePerspective() {
      return this.$store.getters.changePerspective;
    },
    onlyProjectPage(){
      return this.$route.path === "/projects"
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">
@import '@/styles/_variables.scss';
.btnChangePerspective {
    position: absolute;
    bottom: 30px;
    right: 5%;
    z-index: 5;

    @include tablet{
      display: none;
    }


    :root{
      --rotateX: 0;
      --rotateY: 0;
    }

    button{
      width: 150px;
      height: 50px;
      border: 1px solid $blue;
      background: $darkBlack;
      color: $white;

      transition: all 0.3s ease;
      transform: perspective(500px)
                 rotateX(var(--rotateX))
                 rotateY(var(--rotateY))
                 scale3d(1, 1, 1);

      span{
      font-size: 16px;
      transition: all 0.3s ease;
      }

      &:hover{
        background: $blue;
        box-shadow: 0 0 20px 5px rgba($blue, 0.2);

        span{
          font-size: 18px;
          text-shadow: 3px 8px 7px rgba($darkBlack, 0.4);
        }
      }
    }


}
</style>
