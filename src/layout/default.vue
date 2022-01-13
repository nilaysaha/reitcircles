<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar elevation="0" color="#4CA2CD" dark height="80px" app>
      <v-app-bar-nav-icon class="md:tw-hidden tw-block" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <div>
        <v-img width="294" src="@/assets/img/logo.png"></v-img>
      </div>
      <v-spacer></v-spacer>
      <div class="tw-flex tw-space-x-12 tw-items-center tw-justify-between">
        <span>Home</span>
        <span>Dashboard</span>
        <v-menu bottom left>
          <template v-slot:activator="{ on, attrs }">
            <div v-bind="attrs" v-on="on">
              assets
              <v-icon>mdi-menu-down</v-icon>
            </div>
          </template>

          <v-list>
            <v-list-item v-for="(item, i) in items" :key="i">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu bottom left>
          <template v-slot:activator="{ on, attrs }">
            <div v-bind="attrs" v-on="on">
              Settings
              <v-icon>mdi-menu-down</v-icon>
            </div>
          </template>

          <v-list>
            <v-list-item v-for="(item, i) in items" :key="i">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <v-menu bottom left>
          <template v-slot:activator="{ on, attrs }">
            <div v-bind="attrs" v-on="on">
              Admin
              <v-icon>mdi-menu-down</v-icon>
            </div>
          </template>

          <v-list>
            <v-list-item v-for="(item, i) in items" :key="i">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <v-spacer></v-spacer>
      <div class="tw-mr-12">Login/Register</div>
    </v-app-bar>

    <v-main>
      <router-view class />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Footer from '@/components/Footer.vue'
export default {
  components: {
    Footer
  },
  data: () => ({
    drawer: false,
    items: [
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me' },
    ],
  }),
}
</script>