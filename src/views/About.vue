<!-- eslint-disable -->
<template>
  <section class="about">
    <h1 class="base__title" v-arrowUp>About Me</h1>
    <div class="about__container">
      <figure>
        <img class="about__image" :src="aboutMe" alt="" />
      </figure>
      <div
        class="about__imageContainer"
        v-for="description in about"
        :key="description.id"
      >
        <p class="about__text">{{ description.text }}</p>
        <div class="about__ballContainer" @mouseover="showImage">
          <span></span>
        </div>
        <img :src="description.image" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
/* eslint-disable */

export default {
  name: "about",
  data() {
    return {
      aboutMe: this.$store.state.aboutMePhoto,
      about: this.$store.state.about,
    };
  },
  methods: {
    showImage(e) {
      const image = document.querySelectorAll(".about__imageContainer img");
      const text = document.querySelectorAll(
        ".about__imageContainer .about__text"
      );
      const span = document.querySelectorAll(
        ".about__imageContainer .about__ballContainer"
      );

      for (const element of image) {
        element.style.opacity = "0";
      }

      for (const element of text) {
        element.style.opacity = "0";
      }

      for (const element of span) {
        element.style.opacity = "1";
      }

      e.currentTarget.style.opacity = "0";
      e.currentTarget.previousElementSibling.style.opacity = "1";
      e.currentTarget.nextSibling.style.opacity = "1";
    },
  },
};
</script>
<style lang="scss">
@import "@/styles/_variables.scss";
.about {
  flex-direction: column;
  overflow: hidden;
  height: auto;

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
    max-width: 220px;
    transition: all 0.3s ease;

    @include tablet {
      max-width: 99px;
    }
  }

  &__image {
    width: 100%;
    height: auto;

    @include laptopHeight {
      overflow-y: auto;
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
      .about__ballContainer {
        top: 20.5%;
        left: 52%;
      }

      p {
        top: 5%;
        left: 0;
        transform: rotate(-25deg);

        @include mobile {
          top: 10%;
          left: 10%;
        }
      }
    }

    &:nth-of-type(2) {
      .about__ballContainer {
        top: 56%;
        left: 31%;
      }

      p {
        top: 52%;
        left: -6%;
        transform: rotate(-25deg);

        @include tablet {
          top: 51%;
          left: 13%;
        }

        @include mobile {
          top: 46%;
          left: 6%;
        }
      }
    }

    &:nth-of-type(3) {
      .about__ballContainer {
        top: 33%;
        left: 56%;
      }

      p {
        top: 22%;
        left: 74%;
        transform: rotate(25deg);

        @include mobile {
          max-width: 75px;
        }
      }
    }

    &:nth-of-type(4) {
      .about__ballContainer {
        top: 46%;
        left: 30%;
      }

      p {
        top: 53%;
        left: 0;
        transform: rotate(-25deg);
        max-width: 155px;

        @include tablet {
          top: 50%;
          left: 10%;
          max-width: 99px;
        }

        @include mobile {
          top: 50%;
          left: 10%;
        }
      }
    }

    &:nth-of-type(5) {
      .about__ballContainer {
        top: 86%;
        left: 53%;
      }

      p {
        top: 70%;
        left: 65%;
        transform: rotate(25deg);
      }
    }

    &:nth-of-type(6) {
      .about__ballContainer {
        top: 57%;
        left: 63%;
      }

      p {
        top: 50%;
        left: 72%;
        transform: rotate(25deg);
        max-width: 150px;

        @include mobile {
          top: 60%;
          left: 64%;
          max-width: 99px;
        }
      }
    }

    &:nth-of-type(7) {
      .about__ballContainer {
        top: 15%;
        left: 48.5%;
      }
      p {
        top: 9%;
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

    .about__ballContainer {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      background: $blue;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      z-index: 9;
      cursor: pointer;

      span {
        padding: 15px;
      }
    }
  }
}
</style>
