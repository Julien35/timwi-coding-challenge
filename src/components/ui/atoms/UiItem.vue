<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img src="@/assets/notes.jpg" alt="Placeholder image" />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{ item.title }}</p>
        </div>
      </div>

      <!--TODO: responsive mobile-->
      <div class="content">
        <ui-label>{{ item.artist }}</ui-label>
        <div class="columns">
          <ui-label class="column">Date de sortie</ui-label>
          <div class="column">{{ formatDate(item.date) }}</div>
        </div>

        <div class="columns">
          <ui-label class="column">Durée</ui-label>
          <div class="column">{{ secondsToTime(item.length) }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { Item } from "@/models/Item";
import UiLabel from "@/components/ui/atoms/UiLabel.vue";

export default Vue.extend({
  name: "UiItem",
  components: { UiLabel },
  props: {
    item: {
      type: Object as PropType<Item>,
      default() {
        return {};
      },
    },
  },

  methods: {
    formatDate(date: Date): string {
      let dateString = "";

      dateString =
        date.getDay() + " " + date.getMonth() + " " + date.getFullYear();

      return dateString;
    },

    secondsToTime(secs: number): string {
      let time = "";

      const hours = Math.floor(secs / (60 * 60));

      const divisor_for_minutes = secs % (60 * 60);
      const minutes = Math.floor(divisor_for_minutes / 60);

      const divisor_for_seconds = divisor_for_minutes % 60;
      const seconds = Math.ceil(divisor_for_seconds);

      if (hours > 0) {
        time = hours + " heures ";
      }
      if (minutes > 0) {
        time += minutes + " minutes ";
      }
      if (seconds > 0) {
        time += seconds;
      }

      return time;
    },
  },
});
</script>

<style scoped></style>
