<template>
<div class="transition">

</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'transitionRouter',
  data() {
    return {};
  },
};
</script>

<style  lang="scss">
@import '@/styles/_variables.scss';

.transition{
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99;
  background: $blue;

}

</style>
