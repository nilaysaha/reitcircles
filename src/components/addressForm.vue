<template>
	<div>
		<!-- @submit.prevent="onRegister" -->
		<v-form class="px-2 tw-mt-9 registerForm" ref="registerForm">
			<p class="tw-text-42">Address:</p>

			<v-text-field
				class="mb-5 tw-max-w-sm identity-proof"
				hide-details="auto"
				dense
				v-model="addressProof.address"
				:rules="[rules.required('Address is required'), rules.required]"
				placeholder="Address"
				solo
			></v-text-field>
			<p class="tw-text-42">Street Name:</p>

			<v-text-field
				class="mb-5 tw-max-w-sm identity-proof"
				hide-details="auto"
				dense
				v-model="addressProof.streetName"
				:rules="[rules.email('Street Name is required'), rules.required]"
				placeholder="Street Name"
				solo
				color="#FFFFFF"
			></v-text-field>
			<p class="tw-text-42">House no:</p>

			<v-text-field
				class="mb-5 tw-max-w-sm identity-proof"
				hide-details="auto"
				dense
				v-model="addressProof.houseNo"
				:rules="[rules.email('House number is required'), rules.required]"
				placeholder="House Number"
				solo
			></v-text-field>
			<p class="tw-text-42">Document for address proof:</p>

			<v-select
				class="mb-5 tw-max-w-sm document-select"
				hide-details="auto"
				dense
				solo
				color="#429CB2"
				:items="DocumentType"
				v-model="addressProof.documentType"
				:rules="[rules.email('Document address proof is required'), rules.required]"
			></v-select>
			<div class="tw-mt-3">
				<v-btn
					dark
					rounded
					class="submit-button tw-mb-4  tw-w-36 3xl:tw-w-60 tw-h-14 3xl:tw-h-20"
				>
					<h2 class="tw-text-xl md:tw-text-2xl 3xl:tw-text-3xl tw-font-bold">Submit</h2>
				</v-btn>
			</div>
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
			DocumentType: ['Bank Statement', 'Utility Bills', 'Government Identity Proof'],
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
.v-input__slot {
	box-shadow: none !important;
	filter: drop-shadow(0px -2px 25px rgba(134, 153, 183, 0.161)) !important;
	border-radius: 1rem !important;
}
.document-select.v-input__control .v-input__slot {
	background-color: #429cb2;
	color: white;
}
.document-select.v-input__slot {
	background-color: black;
}
</style>
