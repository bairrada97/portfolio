<!-- eslint-disable -->
<template>
  <div class="input__container">
    <p >Scroll To Build Website</p>
  </div>
</template>

<script>
/*eslint-disable*/
export default {
  name: 'rangeSlider',
  data() {
    return {
      counter: 0,
      isScrolling: false,
    };
  },
  created(){
    window.addEventListener('wheel', this.throttle(this.handleScroll, 500));
  },
   destroyed(){
    window.removeEventListener('wheel', this.handleScroll);
  },
  methods: {
    handleScroll(event) {
       
     if(event.deltaY < 0){
        this.counter--;
     }else{
        this.counter++;
      }
      this.$store.commit('updateRangeSliderValue', this.counter);
    },
    throttle(func, limit) {
      let inThrottle
      return () => {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
          func.apply(context, args)
          inThrottle = true
          setTimeout(() => inThrottle = false, limit);
        }
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

    @include tablet{
        width: 90%;
    }
}


</style>
