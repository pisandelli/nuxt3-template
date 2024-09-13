<script setup lang="ts">
import type { NuxtError } from '#app'
defineProps({
  error: {
    type: Object as () => NuxtError,
    required: true
  }
})
</script>

<template lang='pug'>

  h1 {{ error?.statusCode }}
  pre {{ error?.statusMessage }}

</template>
<style scoped></style>
