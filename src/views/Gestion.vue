<template>
  <div class="home">
    <ui-block>
      <template #header>Gestion de la bibliothèque</template>
    </ui-block>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import UiBlock from "@/components/ui/templates/UiBlock.vue";

export default Vue.extend({
  name: "Gestion",
  components: {
    UiBlock,
  },
});
</script>
