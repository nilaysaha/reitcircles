<template>
  <div class="about">
    <v-container>
      <div>
        <h2
          class="tw-text-center tw-text-5xl tw-text-secondary tw-pt-20 tw-pb-24"
        >Document upload center</h2>
        <div class="tw-text-secondary tw-flex tw-space-x-12 tw-items-center tw-mb-16">
          <h2 class="tw-text-4xl">Kia matte</h2>
          <span>Personal ID: gh26778348befhhefb8</span>
        </div>
        <v-tabs background-color="transparent" hide-slider v-model="tabs" grow>
          <v-tab :class="tabs==0? 'tw-bg-primary':'tw-bg-whtie'">
            <!-- <v-btn :class="tabs==0? 'tw-bg-primary':'tw-bg-secondary'" depressed block>Owners Document</v-btn> -->
            <span
              class="tw-text-2xl"
              :class="tabs==0? 'tw-text-white':'tw-text-black'"
            >Owners Document</span>
          </v-tab>

          <v-tab :class="tabs==1? 'tw-bg-primary':'tw-bg-whtie'">
            <!-- <v-icon>mdi-heart</v-icon> -->
            <span class="tw-text-2xl" :class="tabs==1? 'tw-text-white':'tw-text-black'">KYC Document</span>
          </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tabs">
          <v-tab-item class="tw-pt-12">
            <v-card class="tw-bg-transparent" flat>
              <v-card-text class="tw-px-0">
                <v-data-table
                  disable-sort
                  :headers="headers"
                  :items="$documents"
                  hide-default-footer
                >
                  <template v-slot:item.status="{item}">
                    <div class>
                      <span>{{item.status}}</span>

                      <v-tooltip color="white" top>
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                            class="2xl:tw-ml-20 tw-ml-8"
                            v-bind="attrs"
                            v-on="on"
                            dark
                            color="#0B8793"
                            icon
                          >
                            <v-icon>mdi-alert-circle</v-icon>
                          </v-btn>
                        </template>
                        <div class="tw-flex tw-items-center">
                          <v-btn dark color="#A0D0D5" icon>
                            <v-icon>mdi-alert-circle</v-icon>
                          </v-btn>
                          <span class="tw-text-secondary">Document verified</span>
                        </div>
                      </v-tooltip>
                    </div>
                  </template>
                </v-data-table>
                <div class="tw-flex tw-justify-between tw-items-start tw-mt-14">
                  <v-btn class="upload-btn-bg" rounded>Upload</v-btn>
                  <div class="tw-flex tw-flex-col">
                    <h2 class="tw-text-secondary tw-text-xl 2xl:tw-text-2xl">Status:</h2>
                    <div class="tw-text-center status-box tw-mt-4">
                      <v-btn dark class="tw-bg-primary" icon>
                        <v-icon>mdi-check</v-icon>
                      </v-btn>
                      <h2
                        class="tw-text-secondary tw-text-xl 2xl:tw-text-2xl tw-pt-3"
                      >Verification complete</h2>
                    </div>
                  </div>
                </div>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item class="tw-pt-12">
            <v-card flat>
              <v-card-text class="tw-px-0">
                <v-tabs color="#65B9D3" left>
                  <v-tab
                    class="tw-text-font-bold 3xl:tw-text-3xl tw-text-base tw-text-secondary"
                  >Identity Proof</v-tab>
                  <v-tab
                    class="tw-text-font-bold 3xl:tw-text-3xl tw-text-base tw-text-secondary"
                  >Address Proof</v-tab>
                  <v-tab
                    class="tw-text-font-bold 3xl:tw-text-3xl tw-text-base tw-text-secondary"
                  >Full profile</v-tab>

                  <v-tab-item>
                    <!-- <span>Landscape</span> -->
                    <identifyProofForm />
                  </v-tab-item>
                  <v-tab-item>
                    <addressForm />
                  </v-tab-item>
                  <v-tab-item>
                    <fullProfileForm />
                  </v-tab-item>
                </v-tabs>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </div>
    </v-container>
  </div>
</template>


<script>
import identifyProofForm from '@/components/identifyProofForm.vue'
import fullProfileForm from '@/components/fullProfileForm.vue'

import addressForm from '@/components/addressForm.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Document',
  components: {
    identifyProofForm, addressForm, fullProfileForm
  },
  data() {
    return {
      tabs: 0,
      headers: [
        {
          text: 'no.',
          align: 'start',
          value: 'no',
        },
        {
          text: 'File Name',
          align: 'center',
          value: 'name',
        },
        {
          text: 'Status',
          align: 'end',
          value: 'status',
        },
      ],

      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    }
  },
  computed: {
    ...mapGetters('document', ['$documents']),
  },
  methods: {
    ...mapActions('document', ['getDocuments']),
  },
  created() {
    this.getDocuments()
  }
}

</script>

<style>
.tab-item-wrapper {
  /* vuetify sets the v-tabs__container height to 48px */
  height: 120px !important;
}
.custom-table .v-data-table > .v-data-table__wrapper > table > tbody > tr > th,
.v-data-table > .v-data-table__wrapper > table > thead > tr > th,
.v-data-table > .v-data-table__wrapper > table > tfoot > tr > th {
   font-size: 20px !important;
   color:#004A8C;

}

.upload-btn-bg{
background: linear-gradient(180deg, #FFFFFF 0%, #808080 100%);
border: 1px solid #707070;

}
.status-box{
  box-shadow: 0px 0px 9px rgba(101, 185, 211, 0.43);
  padding:  20px 42px;
}
</style>