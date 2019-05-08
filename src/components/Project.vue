<!-- eslint-disable -->
<template>
<article class="project" :style="{ backgroundImage: `url(${project.image})` }">
  <!-- v-for dos projetos-->
  <router-link class="project__linkContainer" :to="{ name: 'projectDetail', params: {name: project.name.replace(/\s+/g, ''), id: project.id},  }">
    <div class="project__container ">
      <div class="project__icons">
        <router-link class="project__icon" :to="{ name: 'projectDetail', params: {name: project.name.replace(/\s+/g, ''), id: project.id} }">
          <p class="iconName">Detail</p>
          <svg width="60px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101.9 89.9"><path d="M21.4 24.7c.8 0 1.7-.4 2.3-.9.6-.6 1-1.5.9-2.3 0-.8-.3-1.7-.9-2.3-.6-.6-1.4-.9-2.3-.9-.8 0-1.7.4-2.3.9-.6.6-1 1.5-.9 2.3 0 .8.3 1.7.9 2.3.7.6 1.5.9 2.3.9zM32.7 24.7c.8 0 1.7-.4 2.3-.9.6-.6 1-1.5.9-2.3 0-.8-.3-1.7-.9-2.3-.6-.6-1.4-.9-2.3-.9-.8 0-1.7.4-2.3.9-.6.6-1 1.5-.9 2.3 0 .8.3 1.7.9 2.3.7.6 1.5.9 2.3.9zM44 24.7c.8 0 1.7-.4 2.3-.9.6-.6 1-1.5.9-2.3 0-.8-.3-1.7-.9-2.3-.6-.6-1.4-.9-2.3-.9-.8 0-1.7.4-2.3.9-.6.6-1 1.5-.9 2.3 0 .8.3 1.7.9 2.3.7.6 1.5.9 2.3.9z"/><path d="M93 10c-27.1-1-54.2-1-81.3-.6-3.4.1-4 4.5-1.7 6l-.3 13.2s-1.3.2-3.4.6c-1 .2-.9 1.6 0 1.9 2 .6 3.3.9 3.3.9-.1 8.7 0 17.5.1 26.2 0 3.5.1 7 .2 10.4 0 2.1.1 4.1.1 6.2 0 1.5-.3 3.4.2 4.9.9 2.5 3.4 2.2 5.6 2.3 3.9.1 7.9.1 11.8.2 15.5.2 31 .3 46.5.2 5.5 0 12 .5 16.2-3.7 3.9-3.9 4.3-9.9 4.5-15.1.8-17.1-.8-34.2.3-51.2.3-1.4-.9-2.4-2.1-2.4zm-80.5 5.8c26-.9 52.1-1.2 78.1-1.2-.1 4.4-.1 8.8 0 13.2-14.6.4-29.2.6-43.8.5-7.1 0-14.3.1-21.4.1-3.6 0-7.1.1-10.7.2h-1.5c-.2-4.3-.4-8.5-.7-12.8zm77.3 55.5c-1.9 6.8-8.5 6.4-14.3 6.5-13.9.1-57.5-.2-58.3-.2h-1.9c-.7-.2-1.5-36.7-1.9-45.4h.7c3.6.2 7.1.5 10.7.6 7.3.3 14.7.5 22 .5 14.6 0 29.3-.2 43.9-.6.1 6.7.3 13.3.3 19.8 0 6.1.5 12.9-1.2 18.8z"/><path d="M81.4 52.8c-3.9-.1-7.8 0-11.7 0 0-1.5-.1-2.9-.1-4.4-.1-2.4.2-5.2-.6-7.5-.3-.8-1.3-.8-1.6 0-.8 2.2-.5 4.9-.6 7.2-.1 1.6-.2 3.1-.2 4.7-1.7 0-3.4.1-5.1.1-2.4.1-5.3-.2-7.6.6-.8.3-.8 1.3 0 1.6 2.2.8 4.9.5 7.3.6 1.7.1 3.5.2 5.2.3-.1 3.9-.3 7.8-.2 11.7 0 2.2 3.4 2.2 3.5 0 .1-3.9 0-7.7 0-11.6 3.9.1 7.8.3 11.6.2 2.3-.1 2.3-3.4.1-3.5zM34 69.2c-1.7 0-3.5-.1-5.2-.1-2.4-.1-5.1.1-7.3-.3-.8-.1-.8-.7 0-.8 2.3-.4 5.1-.3 7.6-.3 1.7 0 3.4-.1 5.1-.1 3.9 0 7.8-.1 11.7-.1 2.2 0 2.2 1.8 0 1.9-4 0-8-.1-11.9-.2zM34 64.6c-1.7 0-3.5-.1-5.2-.1-2.4-.1-5.1.1-7.3-.3-.8-.1-.8-.7 0-.8 2.3-.4 5.1-.3 7.6-.3 1.7 0 3.4-.1 5.1-.1 3.9 0 7.8-.1 11.7-.1 2.2 0 2.2 1.8 0 1.9-4-.1-8-.2-11.9-.2zM33.4 59.7c-1.7 0-3.5-.1-5.2-.1-2.4-.1-5.1.1-7.3-.3-.8-.1-.8-.7 0-.8 2.3-.4 5.1-.3 7.6-.3 1.7 0 3.4-.1 5.1-.1 3.9 0 7.8-.1 11.7-.1 2.2 0 2.2 1.8 0 1.9-4-.1-8.1-.2-11.9-.2zM33.4 55c-1.7 0-3.5-.1-5.2-.1-2.4-.1-5.1.1-7.3-.3-.8-.1-.8-.7 0-.8 2.3-.4 5.1-.3 7.6-.3 1.7 0 3.4-.1 5.1-.1 3.9 0 7.8-.1 11.7-.1 2.2 0 2.2 1.8 0 1.9-4-.1-8.1-.2-11.9-.2zM33.4 50.2c-1.7 0-3.5-.1-5.2-.1-2.4-.1-5.1.1-7.3-.3-.8-.1-.8-.7 0-.8 2.3-.4 5.1-.3 7.6-.3 1.7 0 3.4-.1 5.1-.1 3.9 0 7.8-.1 11.7-.1 2.2 0 2.2 1.8 0 1.9-4 0-8.1-.1-11.9-.2zM33.4 45.6c-1.7 0-3.5-.1-5.2-.1-2.4-.1-5.1.1-7.3-.3-.8-.1-.8-.7 0-.8 2.3-.4 5.1-.3 7.6-.3 1.7 0 3.4-.1 5.1-.1 3.9 0 7.8-.1 11.7-.1 2.2 0 2.2 1.8 0 1.9-4-.1-8.1-.2-11.9-.2z"/>
            </svg>
        </router-link>
        <a :href="project.liveSite" class="project__icon">
          <p class="iconName">Live</p>
          <svg width="60px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101.9 89.9"><path d="M21.9 23.9c.8 0 1.7-.4 2.3-.9.6-.6 1-1.5.9-2.3 0-.8-.3-1.7-.9-2.3-.6-.6-1.4-.9-2.3-.9-.8 0-1.7.4-2.3.9-.6.6-1 1.5-.9 2.3 0 .8.3 1.7.9 2.3.7.5 1.4.9 2.3.9zM33.2 23.9c.8 0 1.7-.4 2.3-.9.6-.6 1-1.5.9-2.3 0-.8-.3-1.7-.9-2.3-.6-.6-1.4-.9-2.3-.9-.8 0-1.7.4-2.3.9-.6.6-1 1.5-.9 2.3 0 .8.3 1.7.9 2.3.6.5 1.4.9 2.3.9zM44.5 23.9c.8 0 1.7-.4 2.3-.9.6-.6 1-1.5.9-2.3 0-.8-.3-1.7-.9-2.3-.6-.6-1.4-.9-2.3-.9-.8 0-1.7.4-2.3.9-.6.6-1 1.5-.9 2.3 0 .8.3 1.7.9 2.3.6.5 1.4.9 2.3.9z"/><path d="M93.5 9.1c-27.1-.9-54.2-1-81.3-.6-3.4.1-4 4.5-1.7 6l-.3 13.2s-1.3.2-3.4.6c-1 .2-.9 1.6 0 1.9 2 .6 3.3.9 3.3.9-.1 8.7 0 17.5.1 26.2 0 3.5.1 7 .2 10.4 0 2.1.1 4.1.1 6.2 0 1.5-.3 3.4.2 4.9.9 2.5 3.4 2.2 5.6 2.3 3.9.1 7.9.1 11.8.2 15.5.2 31 .3 46.5.2 5.5 0 12 .5 16.2-3.7 3.9-3.9 4.3-9.9 4.5-15.1.8-17.1-.8-34.2.3-51.2.2-1.3-1-2.3-2.1-2.4zM13 14.9c26-.9 52.1-1.2 78.1-1.2-.1 4.4-.1 8.8 0 13.2-14.6.4-29.2.6-43.8.5-7.1 0-14.3.1-21.4.1-3.6 0-7.1.1-10.7.2h-1.5c-.2-4.2-.5-8.5-.7-12.8zm77.2 55.6c-1.9 6.8-8.5 6.4-14.3 6.5-13.9.1-57.5-.2-58.3-.2h-1.9c-.7-.2-1.5-36.7-1.9-45.4h.7c3.6.2 7.1.5 10.7.6 7.3.3 14.7.5 22 .5 14.6 0 29.3-.2 43.9-.6.1 6.6.3 13.2.3 19.8 0 6.1.5 12.9-1.2 18.8z"/><path d="M65 56.1c-.8-2-2.4-3-4.1-4.1-1.9-1.2-3.7-2.5-5.4-3.9-3.6-2.8-7-6-9.9-9.5-1.2-1.5-3.4.7-2.1 2.1.1.2.3.3.4.5-.3 7.7.4 15.3 1.5 22.9.2 1.2 2.1 1.4 2.6.3.7-1.5 1.5-3 2.3-4.4.4-.7.8-1.4 1.2-2 .2-.3.3-.5.4-.7 1.1 2.3 2.3 4.5 3.6 6.7.7 1.2 1.4 2.3 2.2 3.5.6 1 1.3 2.2 2.3 2.8.2.1.5 0 .5-.3-.1-1.1-.8-2-1.3-3-.7-1.2-1.3-2.4-1.9-3.7-1-2.1-2-4.3-2.9-6.4 3.1.3 6.2.7 9.4 1 .7.1 1.6-1 1.2-1.8zm-10.8-2c-.9-.1-2-.4-2.9-.1-1.4.5-2.2 2.4-2.9 3.6-.3.6-.7 1.2-1 1.7-.7-5.3-1.3-10.7-1.8-16 2.2 2.3 4.6 4.4 7 6.4 1.6 1.3 3.3 2.5 5 3.7.7.4 1.6.9 2.5 1.4-.9-.1-1.9-.2-2.8-.3-1.1-.2-2.1-.3-3.1-.4z"/>
            </svg>
        </a>
        <a :href="project.liveCode" class="project__icon">
          <p class="iconName">Code</p>
          <svg width="60px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101.9 89.9"><path d="M21.9 23.9c.8 0 1.7-.4 2.3-.9.6-.6 1-1.5.9-2.3 0-.8-.3-1.7-.9-2.3-.6-.6-1.4-.9-2.3-.9-.8 0-1.7.4-2.3.9-.6.6-1 1.5-.9 2.3 0 .8.3 1.7.9 2.3.7.5 1.4.9 2.3.9zM33.2 23.9c.8 0 1.7-.4 2.3-.9.6-.6 1-1.5.9-2.3 0-.8-.3-1.7-.9-2.3-.6-.6-1.4-.9-2.3-.9-.8 0-1.7.4-2.3.9-.6.6-1 1.5-.9 2.3 0 .8.3 1.7.9 2.3.6.5 1.4.9 2.3.9zM44.5 23.9c.8 0 1.7-.4 2.3-.9.6-.6 1-1.5.9-2.3 0-.8-.3-1.7-.9-2.3-.6-.6-1.4-.9-2.3-.9-.8 0-1.7.4-2.3.9-.6.6-1 1.5-.9 2.3 0 .8.3 1.7.9 2.3.6.5 1.4.9 2.3.9z"/><path d="M93.5 9.1c-27.1-.9-54.2-1-81.3-.6-3.4.1-4 4.5-1.7 6l-.3 13.2s-1.3.2-3.4.6c-1 .2-.9 1.6 0 1.9 2 .6 3.3.9 3.3.9-.1 8.7 0 17.5.1 26.2 0 3.5.1 7 .2 10.4 0 2.1.1 4.1.1 6.2 0 1.5-.3 3.4.2 4.9.9 2.5 3.4 2.2 5.6 2.3 3.9.1 7.9.1 11.8.2 15.5.2 31 .3 46.5.2 5.5 0 12 .5 16.2-3.7 3.9-3.9 4.3-9.9 4.5-15.1.8-17.1-.8-34.2.3-51.2.2-1.3-1-2.3-2.1-2.4zM13 14.9c26-.9 52.1-1.2 78.1-1.2-.1 4.4-.1 8.8 0 13.2-14.6.4-29.2.6-43.8.5-7.1 0-14.3.1-21.4.1-3.6 0-7.1.1-10.7.2h-1.5c-.2-4.2-.5-8.5-.7-12.8zm77.2 55.6c-1.9 6.8-8.5 6.4-14.3 6.5-13.9.1-57.5-.2-58.3-.2h-1.9c-.7-.2-1.5-36.7-1.9-45.4h.7c3.6.2 7.1.5 10.7.6 7.3.3 14.7.5 22 .5 14.6 0 29.3-.2 43.9-.6.1 6.6.3 13.2.3 19.8 0 6.1.5 12.9-1.2 18.8z"/><path d="M77.5 52.1c-3.2-2.2-6.1-5.5-9.6-7.1-1.3-.6-2.4.6-1.8 1.8 1.3 2.8 3.9 5.2 6.3 7.4L66.1 59c-2.7 2-.3 6.4 2.7 4.6 3.4-2 6.6-4.7 9.3-7.5 1.1-1.3.7-3.1-.6-4zM43.6 59c-2.1-1.6-4.3-3.2-6.3-4.8 2.5-2.2 5.1-4.6 6.3-7.4.6-1.2-.6-2.4-1.9-1.8-3.5 1.6-6.5 4.9-9.6 7.1-1.3.9-1.7 2.7-.5 3.9 2.7 2.8 6 5.5 9.3 7.5 3 1.9 5.3-2.5 2.7-4.5zM59.7 36c-3 6.2-5.8 12.4-8.8 18.6-2 4.1-4 8.2-5.8 12.4-.9 2-2 3.9-2.3 6.1-.1.8.8 1.5 1.4.8 1.5-1.5 2.3-3.4 3.2-5.3 2.2-4.1 4.2-8.3 6.2-12.4 3-6.1 6.1-12.2 9.1-18.4 1.1-2-2-3.8-3-1.8z"/>
            </svg>
        </a>
        <!-- v-for das 3 images-->
      </div>
      <div class="project__labelContainer">
        <span class="project__label" :key="label" v-for="label in project.labels">{{ label }}</span>
      </div>
      <!-- v-for das labels-->
      <h3 class="project__name">{{ project.name }}</h3>
    </div>
  </router-link>

  <!-- Nome do projeto -->
</article>
</template>

<script>
export default {
  name: 'project',
  props: ['project'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">
@import '@/styles/_variables.scss';

.project {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    height: 300px;
    background-size: cover;
    background-repeat: no-repeat;
    transform-style: preserve-3d;
    outline: 1px solid transparent;
    cursor: pointer;
    transition: all 0.2s ease;
    background-size: cover;
    background-position: center;

    &__linkContainer {
        width: 100%;
        height: 100%;

        &:after {
            content: none;
        }
    }
    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to top, rgba($darkBlack, 0.8) 0%, transparent 100%);
        transition: all 0.2s ease-out;
    }

    &:before {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: $blue;
        z-index: -1;
        transform: translateZ(-1px);
        transform-origin: left bottom;
        transition: all 0.3s 0.2s ease;
    }

    &:hover {

        transform: translateY(-5px);
        transition: all 0.5s ease;
        -webkit-box-shadow: 11px 8px 20px 0 rgba(0,0,0,0.24);
        -moz-box-shadow: 11px 8px 20px 0 rgba(0,0,0,0.24);
        box-shadow: 11px 8px 20px 0 rgba(0,0,0,0.24);

        .project__container {
            z-index: 1;
        }

        .project__icons,
        .project__labelContainer{
            opacity: 1;
        }

        &:before {
            transform: translate3d(10px, 10px, -1px);
        }

        &:after {
            background: rgba($darkBlack, 0.6);
        }

    }

    &__container {
        transform: translateZ(30px);
        width: 100%;
        height: 100%;
    }

    &__icons {
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        padding-top: $s-8;
        padding-bottom: $m-5;
        transition: all 0.3s 0.1s ease;
    }

    &__icon {
        margin-right: $s-7;

        &:last-of-type {
            margin-right: 0;
        }

        &:hover {
            svg {
                fill: $blue;
            }

            .iconName {
                opacity: 1;
                transform-origin: center;
                transform: translateX(-50%) rotate(10deg);
            }
        }

        &:after {
            content: none;
        }
    }

    &__labelContainer {
        opacity: 0;
        position: relative;
        z-index: 1;

        &:after {
            content: '';
            position: absolute;
            bottom: -20px;
            left: 50%;
            width: 100px;
            height: 2px;
            background-color: $blue;
            transform: translateX(-50%);
        }
    }

    &__label {
        border-radius: 10px;
        background-color: #1b191a;
        font-family: $louisGeorgeBold;
        letter-spacing: 2.2px;
        color: $white;
        padding: 5px;
        margin-right: 10px;
        font-size: $font-size1;

        &:last-of-type {
            margin-right: 0;
        }

    }

    &__name {
        position: relative;
        font-family: $louisGeorgeBold;
        font-size: $font-size6;
        color: $white;
        letter-spacing: 3.2px;
        padding: $s-8 $s-10 $s-9;
        z-index: 1;
        line-height: 1.4;
    }

    .iconName {
        position: absolute;
        top: -15px;
        left: 50%;
        font-family: $fiveBoroughs;
        color: $blue;
        transform: translateX(-50%) rotate(0deg);
        font-size: $font-size3;
        letter-spacing: 3px;
        opacity: 0;
        transition: all 0.3s ease;
        display: inline-block;
    }

    svg {
        fill: $white;
    }

}
</style>
