<template>
  <div class="control">
    <input
      class="input py-5 is-medium"
      :class="addClass"
      :value="value"
      :type="type"
      :placeholder="placeHolder"
      @input="$emit('input', $event.target.value)"
      :readonly="readonly"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

export default Vue.extend({
  name: "UiInput",

  props: {
    value: {
      type: String as PropType<string>,
      required: true,
    },
    placeHolder: {
      type: String as PropType<string>,
      default: "",
    },
    type: {
      type: String as PropType<string>,
      default: "text",
      validator: (t: string): boolean =>
        [
          "button",
          "checkbox",
          "color",
          "date",
          "datetime-local",
          "email",
          "file",
          "hidden",
          "image",
          "month",
          "number",
          "password",
          "radio",
          "range",
          "reset",
          "search",
          "submit",
          "tel",
          "text",
          "time",
          "url",
          "week",
        ].includes(t),
    },
    status: {
      type: String as PropType<string>,
      required: false,
      default: "",
      validator: (t: string): boolean =>
        ["", "info", "success", "warning", "danger", "dark"].includes(t),
    },
    noBorder: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    readonly: {
      type: Boolean as PropType<boolean>,
      required: false,
    },
  },

  computed: {
    addClass() {
      let css = "";

      if (this.noBorder) {
        css += " is-borderless is-shadowless is-";
      }

      if (this.status) {
        css += " is-" + this.status;
      }
      if (this.readonly) {
        css += " has-background-grey-lighter";
      }

      return css;
    },
  },

  methods: {
    updateInputValue(value: string) {
      this.$emit("update:value", value);
    },
  },
});
</script>

<style lang="scss" scoped></style>
