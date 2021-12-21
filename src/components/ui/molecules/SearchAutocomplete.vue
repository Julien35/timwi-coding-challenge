<template>
  <section class="field">
    <ui-input
      :place-holder="placeHolder"
      type="search"
      @input="onChange"
      v-model="search"
      :no-border="noBorder"
      :readonly="readonly"
    />
  </section>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import UiInput from "@/components/ui/atoms/UiInput.vue";

export default Vue.extend({
  name: "SearchAutocomplete",
  components: { UiInput },
  props: {
    placeHolder: {
      type: String as PropType<string>,
      default: "",
    },
    emptySearchOnSelection: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    ignoreHyphen: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    noBorder: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    readonly: {
      type: Boolean as PropType<boolean>,
      required: false,
    },
    noOptionsMessage: {
      type: String as PropType<string>,
      default: "",
    },
  },
  data() {
    return {
      search: "",
      isLoading: false,
    };
  },

  methods: {
    onChange() {
      if (3 <= this.search.length) {
        this.$emit("update:search", this.search);
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.autocomplete {
  position: relative;
}
</style>
