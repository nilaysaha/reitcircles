<template>
  <v-container>
    <div class="tw-text-center my-16 tw-text-4xl tw-font-bold" style="color: #4CA2CD;">Marketplace</div>
    <div class="tw-flex my-6">
      <v-btn class="mx-2 mt-0 py-7 pl-2 pr-7" outlined color="cyan">
        <span style="color: #777777;">Type Location</span>
      </v-btn>
      <v-select
        :items="items"
        label="Price"
        rounded
        v-model="price"
        outlined
        color="cyan"
        class="mx-2"
      ></v-select>
      <v-select
        class="mx-2"
        :items="items"
        label="Property Type"
        rounded
        v-model="propertyType"
        outlined
        color="cyan"
      ></v-select>
      <v-select
        class="mx-2"
        :items="items"
        label="Beds"
        rounded
        v-model="beds"
        outlined
        color="cyan"
      ></v-select>
      <v-select
        class="mx-2"
        :items="items"
        label="Baths"
        rounded
        v-model="baths"
        outlined
        color="cyan"
      ></v-select>
      <v-select
        class="ml-2 mr-8"
        :items="items"
        label="Construction Year"
        rounded
        v-model="year"
        outlined
        color="cyan"
      ></v-select>
      <v-text-field label="Search" class="ml-10 mr-2" solo rounded append-icon="mdi-magnify"></v-text-field>
    </div>
    <v-row class="mx-2 mb-8">
      <v-col cols="12" sm="6" md="4" lg="4" xl="3" v-for="card in cards" :key="card.index">
        <marketplace-card class="" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MarketplaceCard from '../components/MarketplaceCard.vue'
export default {
  name: 'ReitcirclesMarketplace',
  components: {
    MarketplaceCard
  },

  data() {
    return {
      price: null,
      propertyType: null,
      beds: null,
      baths: null,
      year: null,
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      // Dummy data for loop
      cards: [
        { name: 'Længehus - 174m2', imgSrc: "https://picsum.photos/id/11/500/300" },
        { name: 'Længehus - 185m2', imgSrc: "https://cdn.vuetifyjs.com/images/cards/house.jpg" },
        { name: 'Længehus - 174m2', imgSrc: "https://picsum.photos/id/11/500/300" },
        { name: 'Længehus - 174m2', imgSrc: "https://cdn.vuetifyjs.com/images/cards/house.jpg" },
        { name: 'Funkis - 204m2', imgSrc: "https://picsum.photos/id/11/500/300" },
        { name: 'Funkis boks - 237m2', imgSrc: "https://cdn.vuetifyjs.com/images/cards/house.jpg" },
        { name: 'Funkis - 204m2', imgSrc: "https://picsum.photos/id/11/500/300" },
        { name: 'Funkis Boks - 174m2', imgSrc: "https://cdn.vuetifyjs.com/images/cards/house.jpg" },
        { name: 'Vinkelhus - 197m2', imgSrc: "https://picsum.photos/id/11/500/300" },
        { name: 'Gårdhavehus - 189m2', imgSrc: "https://cdn.vuetifyjs.com/images/cards/house.jpg" },
        { name: 'Længehus - 174m2', imgSrc: "https://picsum.photos/id/11/500/300" },
        { name: 'Vinkelhus - 182m2', imgSrc: "https://cdn.vuetifyjs.com/images/cards/house.jpg" }
      ],
    };
  },

  mounted() {

  },

  methods: {

  },
};
</script>

<style lang="scss" scoped>

</style>