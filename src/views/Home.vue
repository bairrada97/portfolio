    <!-- eslint-disable -->
    <template>
    <section class="home" >
      <transition name="intro" mode="in-out">
        <Intro v-if="rangeSliderValue < maxValue" />
      </transition>
      <div class="home__titleContainer">
        <transition name="intro" mode="in-out">
          <h1 class="base__title" v-if="rangeSliderValue > maxValue/5" v-arrowUp>{{name}}</h1>
        </transition>
        <transition name="intro" mode="in-out">
          <h2 class="home__subTitle" v-if="rangeSliderValue > maxValue/5 * 3">{{jobTitle}}</h2>
        </transition>
        <transition name="intro" mode="in-out">
          <div class="iconContainer" v-if="rangeSliderValue > maxValue/5 * 3">
            <a v-for="icon in socialIcons" class="icon" href="" :key="icon.name" >
              <span class="iconName">{{icon.name}}</span>
              <img class="iconImage" :src="icon.icon" >
            </a>
          </div>
        </transition>
      </div>
    <transition name="intro" mode="in-out">
      <div class="photoContainer"  v-if="rangeSliderValue > maxValue - 1 ">
        <DrawCanvasImage></DrawCanvasImage>
      </div>
      </transition>
    </section>
    </template>

<script>
// @ is an alias to /src
/* eslint-disable */
import Intro from '@/components/Intro.vue';
import DrawCanvasImage from '@/components/DrawCanvasImage.vue';

export default {
  name: 'home',
  components: {
    Intro,
    DrawCanvasImage,
  },
  data() {
    return {
      image: this.$store.state.aboutImage,
      illustrationImage: this.$store.state.illustrationImage,
      maxValue: this.$store.state.maxRangeSliderValue,
      socialIcons: this.$store.state.socialIcons,
      name: 'João Bairrada',
      jobTitle: 'Front-End Developer',
    };
  },
  computed: {
    rangeSliderValue() {
      return this.$store.getters.getRangeSliderValue;
    },
  }

};
</script>
    <style lang="scss">
    @import '@/styles/_variables.scss';
    .home {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        flex-direction: unset;

        .iconContainer{
          display: flex;
        }

        .icon{
          display: inline-block;
            position: relative;
            text-decoration: none;
            background-color: $darkBlack;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            margin-top: 50px;
            margin-right: 20px;

            &:after{
              content: none;
            }

            &:last-child{
              margin-right: 0;
            }

            &:hover{
               .iconName{
                  opacity: 1;
                  transform-origin: center;
                  transform: translateX(-50%) rotate(10deg);



                }
            }

            .iconImage{
              width: 25px;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);


            }

            .iconName{

              font-family: $fiveBoroughs;
              color: $blue;
              position: absolute;
              top: -15px;
              left: 50%;
              transform: translateX(-50%) rotate(0deg);
              font-size: 16px;
              letter-spacing: 3px;
              opacity: 0;
              transition: all 0.3s ease;



            }

        }
        .photoContainer{
         display: flex;
          flex: 0 63%;
          justify-content: center;
          align-items: flex-end;
          margin: 0 auto;
          animation: mobileText 0.5s ease;
          animation-fill-mode: forwards;



        @include tablet{
            flex: 0 100%;
            margin: 0 auto;

          }

          @include mobile{
            flex: 0 100%;
          }

          @include laptopHeight{
            flex: 0 56%;
          }
        }

        &__titleContainer{

          display: inline-flex;
          flex: 0 1 5%;
          flex-direction: column;

          .base__title{
            max-width: 400px;
            line-height: 80px;
            margin-bottom: 40px;
            animation: mobileText 0.5s ease;
            animation-fill-mode: forwards;
          }
        }

        &__subTitle{
          text-align: left;
          font-size: 20px;
          color: $blue;
          animation: mobileText 0.5s ease;
          animation-fill-mode: forwards;
        }

    }
    </style>
