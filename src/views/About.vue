<!-- eslint-disable -->
<template>
<section class="about">
  <h1 class="base__title" v-arrowUp>About Me</h1>
  <div class="about__container">
    <figure>
      <img class="about__image" :src="aboutMe" alt="">
    </figure>
    <div class="about__imageContainer" v-for="description in about" :key="description.id">
      <p class="about__text">{{description.text}}</p>
      <span @mouseover="showImage"></span>
      <img :src="description.image" alt="">
    </div>

  </div>


</section>
</template>

<script>
// @ is an alias to /src
/* eslint-disable */

export default {
  name: 'about',
  data() {
    return {
      aboutMe: this.$store.state.aboutMePhoto,
      about: this.$store.state.about,
    };
  },
  methods: {
    showImage(e) {
      const image = document.querySelectorAll('.about__imageContainer img');
      const text = document.querySelectorAll('.about__imageContainer .about__text');
      const span = document.querySelectorAll('.about__imageContainer span');

      for (const element of image) {
        element.style.opacity = '0';
      }

      for (const element of text) {
        element.style.opacity = '0';
      }

      for (const element of span) {
        element.style.opacity = "1";
      }

      e.currentTarget.style.opacity = "0";
      e.currentTarget.previousElementSibling.style.opacity = '1';
      e.currentTarget.nextSibling.style.opacity = '1';
    },
  },
};
</script>
<style lang="scss">
@import '@/styles/_variables.scss';
.about {

    flex-direction: column;
    overflow: hidden;

    .base__title {
        margin-bottom: $s-8;
    }

    &__container {
        position: relative;
        font-family: $fiveBoroughs;
        color: $blue;
        transform: translateY(-15%);
        max-width: 500px;
        margin: 0 auto;
    }

    &__text {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        width: 100%;
        padding: $s-9 0;
        line-height: 1.5;
        text-align: left;
        vertical-align: top;
        max-width: 200px;
        transition: all 0.3s ease;
    }

    &__image {
        width: 100%;
        height: auto;

        @include laptopHeight {
            width: 350px;
        }
    }

    &__imageContainer {
        width: 100%;
        height: 100%;
        text-align: left;
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        transition: all 0.3s ease;

        &:nth-of-type(1) {
            span {
                top: 20.5%;
                left: 52%;
            }

            p {
                top: 5%;
                left: 0;
                transform: rotate(-25deg);
            }

        }

        &:nth-of-type(2) {
            span {
                top: 56%;
                left: 31%;
            }

            p {
                top: 36%;
                left: -28%;
                transform: rotate(-25deg);
            }

        }

        &:nth-of-type(3) {
            span {
                top: 33%;
                left: 56%;
            }

            p {
                top: 22%;
                left: 74%;
                transform: rotate(25deg);
            }

        }

        &:nth-of-type(4) {
            span {
                top: 46%;
                left: 30%;
            }

            p {
                top: 20%;
                left: -26%;
                transform: rotate(-25deg);
            }

        }

        &:nth-of-type(5) {
            span {
                top: 86%;
                left: 53%;
            }

            p {
                top: 65%;
                left: 70%;
                transform: rotate(25deg);
            }

        }

        &:nth-of-type(6) {
            span {
                top: 57%;
                left: 63%;
            }

            p {
                top: 43%;
                left: 72%;
                transform: rotate(25deg);
            }

        }

        &:nth-of-type(7) {
            span {
                top: 15%;
                left: 48.5%;
            }

            p {
                top: 5%;
                left: 60%;
                transform: rotate(25deg);
            }
        }

        img {
            opacity: 0;
            text-align: center;
            margin: 0 auto;
            height: 100%;
            transition: all 0.3s ease;
        }

        span {
            position: absolute;
            display: block;
            background: $blue;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            z-index: 9;
            cursor: pointer;

        }

    }

}
</style>
