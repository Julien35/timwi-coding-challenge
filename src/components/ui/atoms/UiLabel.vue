<template>
  <label
    class="label has-text-grey"
    :class="{ 'form-label-mandatory': required }"
  >
    <slot>{{ label }}</slot>
  </label>
</template>
<script lang="ts">
import Vue, { PropType } from "vue";

export default Vue.extend({
  name: "UiLabel",
  props: {
    label: {
      type: String as PropType<string>,
      required: false,
      default: "",
    },

    required: {
      type: Boolean as PropType<boolean>,
      required: false,
      default: false,
    },
  },
});
</script>
