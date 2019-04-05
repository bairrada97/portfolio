<template>
<article class="interest" :style="{ backgroundImage: `url(${photo.image})` }">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101.9 89.9" width="100px"><path d="M68.2 30.1C66.9 15.7 50.1 8.4 37.6 7.3c-1-.1-1.8.3-2.3.8-7.8.9-15.4 5.2-20.1 11.3-3.5 4.5-5.7 10.2-4.8 16 .9 5.6 4.4 10.4 8.7 13.9 8.8 7.4 21 11.1 32 6.5 1.7-.7 3.4-1.7 5-2.7 4.1 3.9 8.5 7.5 12.5 11.5 4.8 4.8 9.5 9.7 14.2 14.6 3.4 3.5 8.9-2.1 5.3-5.3C83 69.2 77.9 64.5 72.5 60c-4.1-3.4-8.3-7-12.7-10 5.5-5.2 9-12.4 8.4-19.9zM26 47.4c-8.1-5.1-13.3-13.8-8.3-23 3.7-6.8 10-10.7 17.1-12.6.4 1 1.4 1.8 2.8 1.8 8.7.4 20.4 4.6 24.2 13.2 3.8 8.5-3.2 18.5-10.4 22.6-8.2 4.6-17.7 2.8-25.4-2z"/><path d="M52 29.9l-10.1.3c0-3.5.1-7 .4-10.5.3-3.9-6.2-3.9-6.1 0l.3 10.8c-4.1.3-8.2.9-12.1 2-1.5.4-1.1 2.5.4 2.6 4 .3 8.1.4 12.1.4.4 4 .9 7.9 1.9 11.7.4 1.5 2.5 1.1 2.6-.4.3-3.8.4-7.5.4-11.3 3.4 0 6.8.1 10.1.4 3.9.3 4-6.1.1-6z"/></svg>
</article>
</template>

<script>
export default {
  name: 'interest',
  props: ['photo'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">
@import '@/styles/_variables.scss';

.interest {
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    cursor: pointer;

    svg {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        opacity: 0;
    }

    &:hover {
        opacity: 0.8;

        svg {
            opacity: 1;
        }
    }

}
</style>
