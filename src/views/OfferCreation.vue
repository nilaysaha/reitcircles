<template>
	<v-container>
		<h2 class="tw-text-center tw-text-5xl tw-text-42 tw-mt-20 tw-mb-28">Offer Creation</h2>

		<v-tabs background-color="transparent" color="#0B8793" v-model="tabs">
			<v-tab :class="tabs==0? 'tw-font-bold':''" class="tw-text-2xl">Create Offer</v-tab>
			<v-tab :class="tabs==1? 'tw-font-bold':''" class="tw-text-2xl">Edit Offer</v-tab>
			<v-tab :class="tabs==2? 'tw-font-bold':''" class="tw-text-2xl">List Offer</v-tab>
		</v-tabs>
		<v-tabs-items class="tw-mt-6" v-model="tabs">
			<v-tab-item class="tw-pt-2">
				<div class="tw-flex tw-justify-center tw-space-x-4 tw-flex-wrap image-card tw-mb-4">
					<div class="tw-bg-white tw-rounded-lg tw-flex-1 tw-p-2">
						<img
							class="tw-rounded-lg tw-h-64 tw-object-cover"
							src="@/assets/img/offerCreation1.png"
							alt
							srcset
						/>
					</div>
					<div class="tw-bg-white tw-rounded-lg tw-flex-1 tw-p-2 image-card">
						<img
							class="tw-rounded-lg tw-h-64 tw-object-cover"
							src="@/assets/img/offerCreation1.png"
							alt
							srcset
						/>
					</div>
					<div class="tw-bg-white tw-rounded-lg tw-flex-1 tw-p-2 image-card">
						<img
							class="tw-rounded-lg tw-h-64 tw-object-cover"
							src="@/assets/img/offerCreation1.png"
							alt
							srcset
						/>
					</div>
					<div class="tw-bg-white tw-rounded-lg tw-flex-1 tw-p-2 image-card">
						<img
							class="tw-rounded-lg tw-h-64 tw-object-cover"
							src="@/assets/img/offerCreation1.png"
							alt
							srcset
						/>
					</div>
					<div class="tw-bg-white tw-rounded-lg tw-flex-1 tw-p-2 image-card">
						<img
							class="tw-rounded-lg tw-h-64 tw-object-cover"
							src="@/assets/img/offerCreation1.png"
							alt
							srcset
						/>
					</div>
				</div>
				<v-row>
					<v-col cols="12" md="6" lg="8">
						<h3 class="tw-text-2xl tw-font-normal tw-text-34 tw-mb-7">Asset Details</h3>
						<div class="tw-flex">
							<v-select
								class="mySelect tw-w-36 tw-flex-none"
								:items="['USD','EURO']"
								label="Currency"
								rounded
								dense
								outlined
								single-line
								color="#c3e3f4"
								hide-details="auto"
							></v-select>
							<v-select
								class="mySelect tw-w-36 tw-flex-none"
								:items="['500','750','1000','1250','1500','1750','2000','2250','2500']"
								label="Currency"
								rounded
								dense
								outlined
								single-line
								color="#c3e3f4"
								hide-details="auto"
							></v-select>
							<v-menu
								v-model="menu"
								:close-on-content-click="false"
								:nudge-width="200"
								offset-y
								rounded="lg"
								class
							>
								<template v-slot:activator="{ on, attrs }">
									<v-btn color="#c3e3f4" outlined v-bind="attrs" v-on="on" rounded class="py-5">
										<span style="color: #777777;">Beds & Baths</span>
									</v-btn>
								</template>

								<v-card class="menu">
									<div class="tw-p-4">
										<div class="tw-font-bold">Bedrooms</div>
										<v-btn-toggle class="tw-pt-2" v-model="bedrooms">
											<v-btn color="blue" outlined>
												<span>Any</span>
											</v-btn>

											<v-btn outlined color="blue">
												<span>1+</span>
											</v-btn>
											<v-btn outlined color="blue">
												<span>2+</span>
											</v-btn>
											<v-btn outlined color="blue">
												<span>3+</span>
											</v-btn>
											<v-btn outlined color="blue">
												<span>4+</span>
											</v-btn>
											<v-btn outlined color="blue">
												<span>5+</span>
											</v-btn>
										</v-btn-toggle>
										<v-checkbox v-model="match" label="Use exact match"></v-checkbox>
										<div class="tw-font-bold">Bathrooms</div>
										<v-btn-toggle class="tw-pt-2">
											<v-btn color="blue" outlined>
												<span>Any</span>
											</v-btn>

											<v-btn outlined color="blue">
												<span>1+</span>
											</v-btn>
											<v-btn outlined color="blue">
												<span>2+</span>
											</v-btn>
											<v-btn outlined color="blue">
												<span>3+</span>
											</v-btn>
											<v-btn outlined color="blue">
												<span>4+</span>
											</v-btn>
											<v-btn outlined color="blue">
												<span>5+</span>
											</v-btn>
										</v-btn-toggle>
									</div>
									<div class="text-right tw-p-3" style="background-color: #4ca2cd">
										<v-btn>Done</v-btn>
									</div>
								</v-card>
							</v-menu>
						</div>
					</v-col>
					<v-col cols="12" md="6" lg="4"></v-col>
				</v-row>
				<div>
					<h1 class="tw-text-4xl tw-mb-2 tw-font-bold tw-text-42">Basic Information</h1>
					<span class="tw-text-77">UNIT NUMBER</span>
					<p class="tw-text-xl tw-mt-5 tw-text-77">what is the number of your apartment or house?</p>
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
.image-card {
	filter: drop-shadow(0px -2px 25px rgba(134, 153, 183, 0.161));
}
.theme--light.v-tabs-items {
	background-color: transparent !important;
}
.document-select.v-input__control .v-input__slot {
	background-color: #429cb2;
	color: white;
}
.document-select.v-input__slot {
	background-color: black;
}
</style>
