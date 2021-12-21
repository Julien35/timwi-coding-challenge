<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "ItemsList",
});
</script>

<style scoped></style>
