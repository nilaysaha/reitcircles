<template>
  <div class="about">
    <v-container>
      <div>
        <h2
          class="tw-text-center tw-text-5xl tw-text-secondary tw-pt-20 tw-pb-24"
        >Document upload center</h2>

        <v-tabs v-model="tabs" grow>
          <v-tabs-slider></v-tabs-slider>
          <v-tab href="#mobile-tabs-5-1" class>
            <!-- <v-icon>mdi-phone</v-icon> -->
            <v-btn depressed block>Owners Document</v-btn>
          </v-tab>

          <v-tab href="#mobile-tabs-5-2">
            <!-- <v-icon>mdi-heart</v-icon> -->
            <v-btn depressed block>KYC Document</v-btn>
          </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tabs">
          <v-tab-item v-for="i in 2" :key="i" :value="'mobile-tabs-5-' + i">
            <v-card flat>
              <v-card-text v-text="text"></v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </div>
    </v-container>
  </div>
</template>


<script>
export default {
  data() {
    return {
      tabs: null,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    }
  }
}

</script>