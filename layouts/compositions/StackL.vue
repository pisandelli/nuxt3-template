<script lang="ts">
  /**
   * The Stack layout primitive injects
   * margin between elements via their
   * common parent.
   * @name 'StackL'
   * @version 1.0.0
   */

  import { defineComponent, h } from 'vue';
  import Styles from '@/assets/styles/compositions/StackL.module.styl';

  export default defineComponent({
    props: {
      tag: {
        type: String,
        default: 'div',
      },
    },
    setup(props, { slots }) {
      return () => h(props.tag, { class: Object.values(Styles) }, slots);
    },
  });
</script>
