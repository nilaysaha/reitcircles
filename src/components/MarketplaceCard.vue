<template>
  <div>
    <v-card class="pa-1 tw-rounded-2xl rounded-xl tw-cursor-pointer">
      <div class="tw-relative">
        <img class="tw-rounded-2xl" src="../assets/img/house.jpeg" alt="House Image" height="250" />
        <v-btn icon color="white" class="tw-absolute tw-top-2 tw-right-2">
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn icon color="white" class="tw-absolute tw-bottom-2 tw-right-2">
          <span>5</span>
          <v-icon>mdi-star</v-icon>
        </v-btn>
      </div>

      <v-card-actions>
        <div>
          <div class="tw-flex">
            <div class="mr-4">
              <v-btn icon color="cyan" class small>
                <v-icon>mdi-bed-empty</v-icon>
              </v-btn>
              <div class="tw-text-sm tw-text-gray-500">3 Bed</div>
            </div>
            <div>
              <v-btn icon color="cyan" class small>
                <v-icon>mdi-bathtub</v-icon>
              </v-btn>
              <div class="tw-text-sm tw-text-gray-500">2 Bath</div>
            </div>
          </div>
          <div class="mt-2 tw-text-gray-400">418 W Monroe St. Marian</div>
        </div>

        <v-spacer></v-spacer>
        <div class>
          <div class="cyan--text tw-font-bold">$1,33M</div>
          <div class="tw-text-gray-400 tw-text-xs">1,345 sqft</div>
          <div class="ml-5">
            <v-btn icon color="cyan" class="mt-1" small>
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </div>
        </div>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'ReitcirclesMarketplacecard',

  data() {
    return {

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