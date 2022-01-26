<template>
	<v-container>
		<h2 class="tw-text-center tw-text-5xl tw-text-42 tw-mt-20 tw-mb-28">Offer Creation</h2>

		<v-tabs color="#0B8793" v-model="tabs">
			<v-tab :class="tabs==0? 'tw-font-bold':''" class="tw-text-2xl">Create Offer</v-tab>
			<v-tab :class="tabs==1? 'tw-font-bold':''" class="tw-text-2xl">Edit Offer</v-tab>
			<v-tab :class="tabs==2? 'tw-font-bold':''" class="tw-text-2xl">List Offer</v-tab>
		</v-tabs>
		<v-tabs-items v-model="tabs">
			<v-tab-item class="tw-pt-2">
        <div>
          <h1 class="tw-text-4xl tw-mb-2 tw-font-bold tw-text-42">Basic Information </h1>
          <span class="tw-text-77">UNIT NUMBER</span>
          <p class="tw-text-xl tw-mt-5 tw-text-77">what is  the number of your apartment or house?</p>
        </div>
				<div class="tw-mt-24">
					<v-row>
						<v-col cols="12" md="6" lg="6" xl="4">
							<v-select
								dark
								class="tw-mt-3.5 asset"
								placeholder="Type of Asset"
								background-color="#4CA2CD"
								solo
								:items="['Apartment','House','Townhouse','Property']"
							></v-select>
							<v-row>
								<v-col class="my-0 py-0" cols="12" md="6">
									<v-text-field
										class="mb-5 identity-proof"
										hide-details="auto"
										dense
										:rules="[rules.required('Post Code is required')]"
										placeholder="Post Code"
										solo
									></v-text-field>
								</v-col>
								<v-col class="my-0 py-0" cols="12" md="6">
									<v-text-field
										class="mb-5 identity-proof"
										hide-details="auto"
										dense
										:rules="[rules.required('City is required')]"
										placeholder="City"
										solo
									></v-text-field>
								</v-col>
								<v-col class="my-0 py-0" cols="12" md="6">
									<v-text-field
										class="mb-5 identity-proof"
										hide-details="auto"
										dense
										:rules="[rules.required('Province is required')]"
										placeholder="Province"
										solo
									></v-text-field>
								</v-col>
								<v-col class="my-0 py-0" cols="12" md="6">
									<v-text-field
										class="mb-5 identity-proof"
										hide-details="auto"
										dense
										:rules="[rules.required('Country is required')]"
										placeholder="Country"
										solo
									></v-text-field>
								</v-col>
							</v-row>
						</v-col>
					</v-row>
				</div>
			</v-tab-item>
			<v-tab-item class="tw-pt-2">
				<span>item two</span>
			</v-tab-item>
			<v-tab-item class="tw-pt-2">
				<span>item three</span>
			</v-tab-item>
		</v-tabs-items>
	</v-container>
</template>

<script>
import { createFormMixin } from "@/mixins/form.mixin.js";

export default {
	name: 'ReitcirclesOffercreation',
	mixins: [
		createFormMixin({
			rules: ["required", "email", "password"],
		}),
	],
	data() {
		return {
			tabs: 0,
			offerCreation: {
				asset: '',
				postcode: '',
				province: '',
				city: '',
				country: ''
			}
		};
	},

	mounted() {

	},

	methods: {

	},
};
</script>

<style lang="scss" >
// .v_menu_content .v-select-list .v-list-item__title{
//   color: #777777;

// }
</style>
