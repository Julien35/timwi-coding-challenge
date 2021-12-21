<template>
  <ui-block>
    <template #header>Recherche albums / artistes</template>

    <div class="columns is-desktop">
      <search-autocomplete
        class="column"
        :empty-search-on-selection="true"
        @update:search="updateItemsSearch"
        no-options-message="Pas de résultat"
      />
    </div>

    <items-list class="columns is-desktop">
      <ui-item
        class="column"
        :key="item.id"
        v-for="item in items"
        :item="item"
      />
    </items-list>
  </ui-block>
</template>

<script lang="ts">
import Vue from "vue";
import UiBlock from "@/components/ui/templates/UiBlock.vue";
import SearchAutocomplete from "@/components/ui/molecules/SearchAutocomplete.vue";
import ItemsList from "@/components/ui/templates/ItemsList.vue";
import SpotifyService from "@/apis/SpotifyService";
import { Item } from "@/models/Item";
import UiItem from "@/components/ui/atoms/UiItem.vue";

export default Vue.extend({
  name: "Home",
  components: {
    UiItem,
    ItemsList,
    SearchAutocomplete,
    UiBlock,
  },

  data() {
    return {
      search: "",
      items: [] as Item[],
    };
  },

  methods: {
    updateItemsSearch(search: string) {
      SpotifyService.search(search).then((result: Item[]) => {
        this.items = result;
      });
    },
  },
});
</script>
