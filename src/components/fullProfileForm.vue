<template>
  <div>
    <!-- @submit.prevent="onRegister" -->
    <v-form class="px-2 tw-mt-9" ref="registerForm">
      <v-row>
        <v-col cols="12" md="8" xl="6">
          <v-row>
            <v-col cols="12" md="6">
              <p class="tw-text-42">First Name:</p>

              <v-text-field
                class="mb-5 identity-proof"
                hide-details="auto"
                dense
                v-model="addressProof.firstName"
                :rules="[rules.required('First Name is required'), rules.required]"
                placeholder="First Name"
                solo
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <p class="tw-text-42">Last Name:</p>

              <v-text-field
                class="mb-5 identity-proof"
                hide-details="auto"
                dense
                v-model="addressProof.lastName"
                :rules="[rules.email('Last Name is required'), rules.required]"
                placeholder="Last Name"
                solo
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <p class="tw-text-42">Street Address:</p>

              <v-text-field
                class="mb-5 identity-proof"
                hide-details="auto"
                dense
                v-model="addressProof.streetAddress"
                :rules="[rules.email('Street Address is required'), rules.required]"
                placeholder="Street Address"
                solo
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <p class="tw-text-42">House No:</p>

              <v-text-field
                class="mb-5 identity-proof"
                hide-details="auto"
                dense
                v-model="addressProof.houseNo"
                :rules="[rules.email('House Number is required'), rules.required]"
                placeholder="House Number"
                solo
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <p class="tw-text-42">City:</p>

              <v-text-field
                class="mb-5 identity-proof"
                hide-details="auto"
                dense
                v-model="addressProof.City"
                :rules="[rules.email('City  is required'), rules.required]"
                placeholder="City"
                solo
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <p class="tw-text-42">Country:</p>

              <v-text-field
                class="mb-5 identity-proof"
                hide-details="auto"
                dense
                v-model="addressProof.Country"
                :rules="[rules.email('Country  is required'), rules.required]"
                placeholder="Country"
                solo
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <p class="tw-text-42">PO Box:</p>

              <v-text-field
                class="mb-5 identity-proof"
                hide-details="auto"
                dense
                v-model="addressProof.PoBox"
                :rules="[rules.email('PO Box  is required'), rules.required]"
                placeholder="PO Box"
                solo
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <p class="tw-text-42">Pin Code:</p>

              <v-text-field
                class="mb-5 identity-proof"
                hide-details="auto"
                dense
                v-model="addressProof.pinCode"
                :rules="[rules.email('Pin Code  is required'), rules.required]"
                placeholder="Pin Code"
                solo
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <p class="tw-text-42">Email:</p>

              <v-text-field
                class="mb-5 identity-proof"
                hide-details="auto"
                dense
                v-model="addressProof.pinCode"
                :rules="[rules.email('Email is required'), rules.required]"
                placeholder="Email"
                solo
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <p class="tw-text-42">Email:</p>

              <v-text-field
                class="mb-5 identity-proof"
                hide-details="auto"
                dense
                v-model="addressProof.pinCode"
                :rules="[rules.email('Email is required'), rules.required]"
                placeholder="Email"
                solo
              ></v-text-field>
            </v-col>
            <div class="tw-text-center">
              <v-btn rounded class="submit-btn">
                <h2 class="tw-text-xl md:tw-text-2xl 3xl:tw-text-3xl">Submit</h2>
              </v-btn>
            </div>
          </v-row>
        </v-col>
      </v-row>
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
      addressProof: {
        name: '',
        email: '',
        document: '',
        documentType: 'Bank Statement'
      },
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
.document-select.v-input__control .v-input__slot{
  background-color: #429CB2;
  color: white;
}
.document-select.v-input__slot{
  background-color: black;
}
.submit-btn{
  background-color: gradient(180deg, #4CA2CD 0%, #4CA2CD 42.4%, #004C72 100%);;
}
</style>