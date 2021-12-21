<template>
  <div class="card is-shadowless">
    <header
      v-if="!noHeader"
      @click.prevent="showHideCard"
      class="card-header is-shadowless has-background-info-light is-clickable"
    >
      <p class="card-header-title has-text-info">
        <slot name="header"></slot>
      </p>
      <span class="card-header-icon">
        <svg-icon
          v-if="show"
          type="mdi"
          :path="mdiChevronDown"
          class="icon is-medium has-text-info"
        />
        <svg-icon
          v-else
          type="mdi"
          :path="mdiChevronRight"
          class="icon is-medium has-text-info"
        />
      </span>
    </header>

    <transition name="fade">
      <div class="card-content" v-show="show">
        <slot name="default"></slot>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

import SvgIcon from "@jamescoyle/vue-icon";
import { mdiChevronDown, mdiChevronRight } from "@mdi/js";

export default Vue.extend({
  name: "UiBlock",
  components: { SvgIcon },

  props: {
    isHide: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    noHeader: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },

  data() {
    return {
      show: !this.isHide,
      mdiChevronDown: mdiChevronDown,
      mdiChevronRight: mdiChevronRight,
    };
  },

  methods: {
    showHideCard() {
      this.$emit("update:isHide", !this.show);
      this.show = !this.show;
    },
  },
});
</script>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease-in-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
