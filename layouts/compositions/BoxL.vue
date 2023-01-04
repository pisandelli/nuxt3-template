<script lang="ts">
/**
   * A simple box component
   * @name 'BoxL'
   * @version 1.0.0
   */

import { defineComponent, h } from 'vue'
import Styles from '@/assets/styles/compositions/BoxL.module.styl'

export default defineComponent({
  props: {
    tag: {
      type: String,
      default: 'div'
    }
  },
  setup (props, { slots }) {
    return () => h(props.tag, { class: Object.values(Styles) }, slots)
  }
})
</script>
