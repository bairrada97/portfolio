<!-- eslint-disable -->
<template>
  <div class="input__container">
    <p>{{scrollingText}}</p>
  </div>
</template>

<script>
/*eslint-disable*/
export default {
  name: 'rangeSlider',
  data() {
    return {
      counter: 0,
      isScrolling: null,
      scrollingText: "Scroll To Build Website"
    };
  },
  created(){
    this.$store.commit('updateRangeSliderValue', this.counter);
  },
  mounted(){
    window.addEventListener('wheel', this.mouseScroll);
  },
   beforeDestroy(){
    window.removeEventListener('wheel',  this.mouseScroll, false);
    
  },
  methods: {
    mouseScroll(e){
     this.throttle(e, this.handleScroll, 500);
    },
    handleScroll(event) {
      event.deltaY < 0 ? this.counter-- : this.counter++;
      this.$store.commit('updateRangeSliderValue', this.counter);
    },
    throttle(event, func, limit) {
        if (!this.isScrolling) {
          func(event);
          this.isScrolling = true;
          setTimeout(() => this.isScrolling = false, limit)
        }  
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">
@import '@/styles/_variables.scss';


.input__container{
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  max-width: 1280px;
  bottom: 100px;
  width: 50%;
  animation: text 3s ease;
  
  p{
    font-size: $font-size5;
    color: $blue;
  }

    @include tablet{
        width: 90%;
    }
}


</style>
