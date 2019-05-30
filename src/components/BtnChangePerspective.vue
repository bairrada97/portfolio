<!-- eslint-disable -->
<template>
<div @mousemove="getMouseValues" @mouseleave="resetMouseValues" class="btnChangePerspective" v-if="onlyProjectPage">
  <button type="button" name="button">
    <span @mousemove="getMouseValues">{{perspectiveText}}</span>
  </button>
</div>
</template>

<script>
export default {
  /* eslint-disable */
  /*eslint no-shadow: 2*/
  /*eslint-env es6*/
  /*eslint no-shadow: [2, { "hoist": "all" }]*/
  name: 'btnChangePerspective',
  props: ['text', 'getMouseValues', 'resetMouseValues'],
  data() {
    return {
      maxValue: this.$store.state.maxRangeSliderValue

    };
  },
  methods: {

  },
  computed: {
    perspectiveText() {
      return this.$store.state.perspectiveText
    },
    rangeSliderValue() {
      return this.$store.getters.getRangeSliderValue;
    },
    onlyProjectPage() {
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
    top: 10%;
    right: 6%;
    z-index: 5;

    @include tablet {
        display: none;
    }

    :root {
        --rotateX: 0;
        --rotateY: 0;
    }

    button {
        width: 150px;
        height: 50px;
        border: 1px solid $blue;
        background: $darkBlack;
        color: $white;

        transition: all 0.3s ease;
        transform: perspective(500px) rotateX(var(--rotateX)) rotateY(var(--rotateY)) scale3d(1, 1, 1);

        span {
            font-size: 16px;
            transition: all 0.3s ease;
        }

        &:hover {
            background: $blue;
            box-shadow: 0 0 20px 5px rgba($blue, 0.2);

            span {
                font-size: 18px;
                text-shadow: 3px 8px 7px rgba($darkBlack, 0.4);
            }
        }
    }

}
</style>
