<template>
  <!-- <hello-world /> -->
  <div>
    <v-carousel class="tw-relative" hide-delimiter-background :show-arrows="false">
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
      <div class="centered">
        <span class="tw-block tw-text-7xl">It is easier</span>
        <span class="tw-block tw-text-4xl">THAN EVER</span>
        <span class="tw-block tw-text-4xl">Raise Capital</span>
        <span class="tw-block tw-text-4xl">USING YOUR REAL STATE</span>
        <v-btn class="tw-mt-20" color="#4CA2CD" dark>
          <span class="tw-px-40">Register, Document & Sell online</span>
        </v-btn>
      </div>
    </v-carousel>

    <v-container class="tw-flex tw-items-center tw-space-x-24 tw-mt-28">
      <div class>
        <v-img max-width="696" src="@/assets/img/home2.png"></v-img>
      </div>
      <div class="tw-flex-1 tw-text-center">
        <h4 class="tw-text-4xl">Submit Documents for Online verification</h4>
        <p class="tw-text-2xl">
          Upload documents to prove the ownership of your property. An easy to use portal will help you on the way.
          Within the next few days you will be verified and your application is accepted.
        </p>
        <v-btn color="#4CA2CD" dark>SUBMIT DOCUMENTS</v-btn>
      </div>
    </v-container>
    <v-container class="tw-flex tw-items-center tw-space-x-24 tw-mt-20 tw-mb-44">
      <div class="tw-flex-1 tw-text-center ">
        <h4 class="tw-text-4xl">Register Your Property</h4>
        <p class="tw-text-2xl">
          Easy to use site, helps you to create your property on the platform. After undergoing some mandatory checks of ownership of
          the property, you are well on your way to unlock the value of your real estate.
        </p>
        <v-btn color="#4CA2CD" dark>Register</v-btn>
      </div>
      <div class>
        <v-img max-width="696" src="@/assets/img/home2.png"></v-img>
      </div>
    </v-container>
    <div class="tw-bg-primary">

    </div>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld'

export default {
  name: 'Home',

  components: {
    HelloWorld,
  },
  data() {
    return {
      items: [
        {
          src: require('@/assets/img/home.png'),
        },
        {
          src: require('@/assets/img/home.png'),
        },
        {
          src: require('@/assets/img/home.png'),
        },
        {
          src: require('@/assets/img/home.png'),
        },
      ],
    };
  },
}
</script>


<style>
.centered {
  position: absolute;
  text-align: center;
  color: white;
  top: 50%;
  font-weight: 700;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>