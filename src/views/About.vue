<!-- eslint-disable -->
<template>
<section class="about">
  <h2 class="base__title" v-arrowUp>About Me</h2>
  <div class="about__container">
    <figure>
      <img class="about__image" :src="aboutMe" alt="" >
    </figure>
    <div class="about__imageContainer"
          v-for="description in about"
          :key="description.id">
      <div class="about__textContainer">
        <p class="about__text">{{description.text}}</p>
      </div>
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
      const text = document.querySelectorAll('.about__imageContainer .about__textContainer');

        for(const element of image){
          element.style.display = 'none';
        }

        for(const element of text){
          element.style.display = 'none';
        }
      e.currentTarget.previousElementSibling.style.display = 'block';
      e.currentTarget.nextSibling.style.display = 'block';
    },
  },
};
</script>
<style lang="scss">
@import '@/styles/_variables.scss';
.about {
    display: flex;
    flex-direction: column;

    .base__title{
      margin-bottom: 50px;
    }

    &__container{
      position: relative;
    }

    &__textContainer{
      display: none;
      width: 35%;
      height: 100%;
      padding: 50px 0;
      line-height: 1.5;
      text-align: left;
    }

    &__image{
      width: 500px;
      height: auto;
      transform: translateY(-15%);

      @include laptopHeight{
            width: 370px;
      }
    }

    &__imageContainer{
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      display: block;


       &:nth-of-type(1){
         span{
          top: 0;
          left: 53%;
         }
         
        }

         &:nth-of-type(2){
           span{
            top: 40%;
            left: 40%;
           }
          
        }

        &:nth-of-type(3){
           span{
            top: 17%;
            left: 51%;
           }
          
        }

        &:nth-of-type(4){
           span{
              top: 25%;
              left: 40%;
           }
          
        }

        &:nth-of-type(5){
           span{
             top: 70%;
             left: 53%;
           }
          
        }
        
        &:nth-of-type(6){
           span{
            
             top: 40%;
             left: 57%;
           }
          
        }



     


      
      
      img {

        display: none;
        text-align: center;
        margin:  0 auto;
        height: 100%;
        transform: translateY(-15%);
        transition: all 1s ease;

    }


      span{
        position: absolute;
        width: 10px;
        height: 10px;
        display: block;
        border-radius: 50%;
        background: $blue;
        cursor: pointer;
        z-index: 9;
        transition: all 1s ease;
      }


    }

    figure{
      height: 70%;
    }


}
</style>
