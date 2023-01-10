<script lang='ts' setup>
/**
* Example Component.
* @name 'NsExample'
* @version 1.0.0
*/
</script>

<template lang="pug">
h1(class="[ example ] [ border:thick ]") {{ $t('welcome') }}
</template>

<style lang="stylus" scoped>
.example
  display: flex
  align-items: center
  justify-content: center
  background-color: var(--color-neutral)
  color: var(--color-danger)
  border-style: solid
  border-radius: var(--border-radius)
  _square(15rem)
</style>
