<script lang='ts' setup>
/**
* The index page
* @name 'IndexPage'
* @version 1.0.0
*/

//Example using CSS Modules
import Font from 'utilities/Fonts.module.styl'
import Color from 'utilities/TextColor.module.styl'
</script>

<template lang="pug">
  //- Example of Layout composition
  //- https://github.com/pisandelli/nuxt-layout-compositions
  CenterL(intrinsic :class='[Font.bold, Font.large, Color.success]')
    BoxL.card
      h1 Hello World
</template>

<style lang="stylus" scoped>
.card
  border: 1px solid var(--color-gray-50)
  border-radius: var(--border-radius)
</style>
