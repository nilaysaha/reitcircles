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
      <div>
        <span class="tw-text-42 tw-text-2xl">Identity Documents</span>
        <span class="tw-text-xl tw-ml-3 tw-text-77">This can be either of these documents: ID/Passport/Driving licence</span>
        <div class="upload-document-btn tw-w-80 tw-h-64 md:tw-w-44 md:tw-h-36 tw-grid tw-place-content-center tw-border-2 tw-border-E5 tw-mt-10 3xl:tw-mt-12">
          <v-btn icon> <v-icon large>mdi-plus-circle</v-icon> </v-btn>
        </div>
      </div>
			<div class="tw-mt-6  3xl:tw-mt-8">
				<v-btn
					dark
					rounded
					class="submit-button tw-mb-4 tw-w-36 3xl:tw-w-60 tw-h-14 3xl:tw-h-20"
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
.v-input__slot {
	box-shadow: none !important;
	filter: drop-shadow(0px -2px 25px rgba(134, 153, 183, 0.161)) !important;
	border-radius: 1rem !important;
}
.upload-document-btn{
  filter: drop-shadow(0px -2px 25px rgba(134, 153, 183, 0.161));
  border-radius: 8px;
}
</style>
