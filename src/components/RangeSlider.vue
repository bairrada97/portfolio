<!-- eslint-disable -->
<template>
  <div class="input__container">
    <input type="range" name="" min="0"
           :max="maxValue"
           v-model="value"
           @input="updateProjectsToShow">
  </div>

</template>

<script>
/*eslint-disable*/
export default {
  name: 'rangeSlider',
  data() {
    return {
      value: this.$store.getters.getRangeSliderValue,
      maxValue: this.$store.state.maxRangeSliderValue,
    };
  },
  methods: {
    updateProjectsToShow() {
      let root = document.documentElement;
       root.style.setProperty('--lower', this.value + '%');
       this.$store.commit('updateRangeSliderValue', this.value);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">
@import '@/styles/_variables.scss';

:root{
    --lower: 0;
    --upper: 0;
}

.input__container{
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  max-width: 1280px;
  bottom: 100px;
  width: 50%;

    @include tablet{
        width: 90%;
    }
}

input[type=range] {
  -webkit-appearance: none;
  width: 100%;
  margin: 10px 0;
  background: $blue;
  border-radius: 50%;
    background: url('/../assets/images/slider.svg');
  &:focus {
    outline: none;
  }
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 3px;
    cursor: pointer;
    box-shadow: 1px 1px 1px rgba(71, 88, 252, 0), 0px 0px 1px rgba(96, 111, 252, 0);
     background: linear-gradient(90deg, $blue var(--lower),grey var(--upper));
    border-radius: 25px;
    border: 0px solid $blue;
  }
  &::-webkit-slider-thumb {
    box-shadow: 2px 2px 2.2px #000035, 0px 0px 2px #00004f;
    border: 0px solid rgba(0, 0, 0, 0);
    height: 25px;
    width: 25px;
    border-radius: 0px 0px 510px 510px;
    background: #ffffff;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -10px;
    

 
  }
  &:focus::-webkit-slider-runnable-track {
      background: linear-gradient(90deg, $blue var(--lower),grey var(--upper));
  }
  &::-moz-range-track {
    width: 100%;
    height: 3px;
    cursor: pointer;
    box-shadow: 1px 1px 1px rgba(71, 88, 252, 0), 0px 0px 1px rgba(96, 111, 252, 0);
    background: linear-gradient(90deg, $blue var(--lower),grey var(--upper));
    border-radius: 25px;
    border: 0px solid $blue;
  }
  &::-moz-range-thumb {
    box-shadow: 2px 2px 2.2px #000035, 0px 0px 2px #00004f;
    border: 0px solid rgba(0, 0, 0, 0);
    height: 25px;
    width: 25px;
    border-radius: 50px;
    background: #ffffff;
    cursor: pointer;
  }
  &::-ms-track {
    width: 100%;
    height: 3px;
    cursor: pointer;
     background: linear-gradient(90deg, $blue var(--lower),grey var(--upper));
    border-color: transparent;
    color: transparent;

  }
  &::-ms-fill-lower, &::-ms-fill-upper {
    background: rgba(71, 88, 252, 0.78);
    border: 0px solid $blue;
    border-radius: 50px;
    box-shadow: 1px 1px 1px rgba(71, 88, 252, 0), 0px 0px 1px rgba(96, 111, 252, 0);
  }
  &::-ms-thumb {
    box-shadow: 2px 2px 2.2px #000035, 0px 0px 2px #00004f;
    border: 0px solid rgba(0, 0, 0, 0);
    height: 25px;
    width: 25px;
    border-radius: 50px;
    background: #ffffff;
    cursor: pointer;
    height: 3px;
  }
  &:focus {
    &::-ms-fill-lower, &::-ms-fill-upper {
      background: rgba(71, 88, 252, 0.78);
    }
  }
}


@keyframes text {
    0% {
        opacity: 0;
    }

    33% {
        opacity: 0;
    }

    66% {
        opacity: 1;
    }

    100% {
        opacity: 1;
    }
}
</style>
