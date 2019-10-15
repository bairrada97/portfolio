<template>
<header :class="{mobileHeader: isMobile}">
  <router-link class="logo" to="/">
    <span class="logoTag">&lt;</span>
    <span class="name">Bairrada</span>
    <span class="logoTag">/></span>
  </router-link>
  <nav>
    <ul class="list">
      <li class="item">
        <router-link to="/about">About Me</router-link>
      </li>
      <li class="item">
        <router-link to="/projects">Projects</router-link>
      </li>
      <li class="item">
        <router-link to="/interests">Interests</router-link>
      </li>
    </ul>
    <div class="iconContainer" v-if="isMobile">
      <a v-for="icon in socialIcons" class="icon" href="" :key="icon.name">
              <img class="iconImage" :src="icon.icon" >
            </a>
    </div>
  </nav>

  <div @click="openMenu" class="openMenu">
    <span></span>
    <span></span>
    <span></span>
  </div>
</header>
</template>

<script>
export default {
  name: 'baseHeader',
  data() {
    return {
      socialIcons: this.$store.state.socialIcons,
    };
  },
  computed: {
    isMobile() {
      return this.$store.getters.isMobile;
    },
  },
  methods: {
    openMenu() {
      if (this.isMobile) {
        document.querySelector('#app').style.overflow = 'auto';
        this.$store.commit('isMobile', false);
      } else {
        document.querySelector('#app').style.overflow = 'hidden';
        this.$store.commit('isMobile', true);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">
@import '@/styles/_variables.scss';

header {

    padding: 0 5%;
    display: flex;
    align-items: center;
    margin: 0 auto;
    max-width: 1440px;
    animation: mobileText 0.5s ease;
    animation-fill-mode: forwards;

    .logo {
        font-family: $louisGeorgeBold;
        font-size: $font-size5;
        margin-right: auto;
        letter-spacing: 3.2px;
        padding-left: 0;

        @include tablet {
            padding-left: 0;
            margin-top: $s-5;
        }

        &:after {
            content: none;
        }

    }

    .logoTag {
        color: $blue;
    }

    .list {
        display: flex;
        align-items: center;
        height: 100px;
        justify-content: space-around;
        font-family: $louisGeorgeBold;
        font-size: $font-size3;
        letter-spacing: 3.2px;

        @include tablet {
            display: none;
        }

    }

    .item {
        margin-right: $m-5;

        &:last-of-type {
            margin-right: 0;
        }

        .router-link-active {
            &:after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 50%;
                background-color: $blue;
                transform: translateX(-50%);
                width: 100%;
                height: 100%;
                z-index: -1;
            }

        }
    }

    .openMenu {
        display: none;
        width: 35px;
        height: 10px;
        z-index: 2;
        cursor: pointer;

        span {
            display: block;
            position: absolute;
            background: $blue;
            width: 35px;
            height: 2px;
            border-radius: 20px;
            transition: all 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
            cursor: pointer;

            &:first-child {
                top: 0;
            }

            &:nth-child(2) {
                top: 10px;
                width: 35px;
                transition: all 0.8s ease;
            }

            &:nth-child(3) {
                top: 20px;
            }

        }

        @include tablet {
            position: absolute;
            top: 0;
            right: 0;
            display: block;
            margin-left: auto;
            margin-right: $s-7;
            margin-top: $s-6;
            cursor: pointer;
            height: 25px;
        }

    }

    &.mobileHeader {
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 100%;
        z-index: 2;
        transform-style: preserve-3d;
        padding: 0;

        &:before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100vh;
            background: $blue;
            left: 0;
            top: 0;
            z-index: -1;
            transform: translateZ(-1px);
            animation: mobile 0.8s ease;
        }

        &:after {
            content: '';
            position: absolute;
            width: 100%;
            height: 100vh;
            background: $lightBlack;
            left: 0;
            top: 0;
            animation: mobile 1s ease;
        }

        .logo {
            position: absolute;
            top: 0;
            display: flex;
            align-self: flex-start;
            padding-left: 5%;
            margin-top: $s-5;
            left: 0;
        }

        nav {
            margin: 0 auto;
            display: flex;
            height: 100vh;
            width: 100%;
            justify-content: center;
            flex-direction: column;
        }

        .list {
            height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: $font-size8;
            height: auto;
            z-index: 2;

            .item {
                margin: $s-6 0;
                opacity: 0;
                animation: mobileText;
                animation-timing-function: ease;
                animation-duration: 0.5s;
                animation-fill-mode: forwards;

                &:nth-child(1) {
                    animation-delay: 0.2s;
                }

                &:nth-child(2) {
                    animation-delay: 0.5s;
                }

                &:nth-child(3) {
                    animation-delay: 0.8s;
                }

                a {
                    &:after {
                        content: none;
                    }
                }

                .router-link-active {
                  &:after {
                      content: '';
                  }
                }

            }

        }

        .openMenu {
            span {

                &:first-child {
                    transform-origin: 0 100%;
                    transform: rotate(45deg) translate(-4px, 0);
                }

                &:nth-child(2) {
                    width: 0;
                }

                &:nth-child(3) {
                    transform-origin: 0 0;
                    transform: rotate(-45deg) translate(-4px,0);

                }

            }
        }
    }

    .iconContainer {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: $s-9;
    }

    .icon {
        position: relative;
        text-decoration: none;
        background-color: $darkBlack;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        margin-right: $s-6;
        opacity: 0;
        animation: mobileText 0.5s 1s ease;
        animation-fill-mode: forwards;
        display: inline-block;
        padding: 0;

        &:after {
            content: none;
        }

        &:last-child {
            margin-right: 0;
        }

        .iconImage {
            width: 25px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

        }

    }

}
</style>
