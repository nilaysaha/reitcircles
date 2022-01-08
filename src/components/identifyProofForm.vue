<template>
  <div>
    <v-form class="px-2 tw-mt-9" ref="registerForm">
      <p class="tw-text-42">Name</p>
      <v-text-field
        class="mb-5 tw-max-w-sm identity-proof"
        hide-details="auto"
        dense
        v-model="identityProof.name"
        :rules="[rules.required('Name')]"
        placeholder="Name"
        solo
      ></v-text-field>
      <p class="tw-text-42">Email</p>

      <v-text-field
        class="mb-5 tw-max-w-sm identity-proof"
        hide-details="auto"
        dense
        v-model="identityProof.email"
        :rules="[rules.required('Email'),rules.email]"
        placeholder="Email"
        solo
        color="#FFFFFF"
      ></v-text-field>
    </v-form>
  </div>
</template>

<script>
import { createFormMixin } from "@/mixins/form.mixin.js";

export default {
  name: 'ReitcirclesIdentifyproofform',
  mixins: [
    createFormMixin({
      rules: ["required", "email", "password"],
    }),
  ],
  data() {
    return {
      identityProof: {
        name: '',
        email: '',
        document: ''
      }
    };
  },

  mounted() {

  },

  methods: {
    // onRegister() {
    //   if (this.$refs.registerForm.validate()) {
    //     console.log('validate');
    //   }
    // }
  }
};
</script>


<style>
.v-input__slot{
  box-shadow: none !important;
filter: drop-shadow(0px -2px 25px rgba(134, 153, 183, 0.161))!important;
border-radius: 1rem!important;
}
</style>