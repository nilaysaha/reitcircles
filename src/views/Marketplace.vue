<template>
	<div>
		<div class="tw-text-center my-16 tw-text-4xl tw-font-bold" style="color: #4CA2CD;">Marketplace</div>
		<div
			v-if="$vuetify.breakpoint.name === 'sm' || $vuetify.breakpoint.name === 'xs'"
			class="tw-text-right"
		>
			<v-menu v-model="menu" :close-on-content-click="false" :nudge-width="80" offset-y rounded="md">
				<template v-slot:activator="{ on, attrs }">
					<v-btn color="#0055FF" dark text v-bind="attrs" v-on="on" class="mr-4 mb-10">
						<v-icon>mdi-filter</v-icon>
					</v-btn>
				</template>

				<v-card class="pt-4 px-5 menu">
					<div class="my-6">
						<v-btn block class="tw-mb-2" outlined color="#c3e3f4" rounded>
							<span style="color: #777777;">Type Location</span>
						</v-btn>
						<v-menu
							v-model="priceMenu"
							:close-on-content-click="false"
							:nudge-width="200"
							offset-y
							rounded="lg"
							class="mx-2 tw-mb-2"
						>
							<template v-slot:activator="{ on, attrs }">
								<v-btn color="#c3e3f4" outlined v-bind="attrs" v-on="on" block rounded>
									<span style="color: #777777;">Price</span>
								</v-btn>
							</template>

							<v-card class="menu">
								<div class="tw-p-4">
									<div class="tw-font-bold tw-pb-2">Price Range</div>
									<v-text-field v-model="price" type="number" outlined prefix="Min -"></v-text-field>
									<div>
										<div>$0+</div>
										<div>$100,000+</div>
										<div>$200,000+</div>
									</div>
								</div>
								<div class="text-right tw-p-3" style="background-color: #4CA2CD">
									<v-btn>Done</v-btn>
								</div>
							</v-card>
						</v-menu>
						<v-select
							class="mt-2 tw-w-full mySelect mb-2"
							:items="propertyTypeList"
							label="Property Type"
							rounded
							v-model="propertyType"
							dense
							outlined
							color="cyan"
							multiple
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
								<v-btn color="#c3e3f4" outlined v-bind="attrs" v-on="on" block rounded>
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
									<v-btn-toggle class="tw-pt-2" v-model="bathrooms">
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
						<v-select
							class="mt-2 mySelect mb-3"
							:items="constractionYears"
							label="Construction Year"
							dense
							rounded
							v-model="year"
							multiple
							outlined
							hide-details="auto"
							color="cyan"
						></v-select>
						<v-btn color="white" rounded block>
							<span style="color: #777777;" class="tw-pr-4">Search</span>
							<v-icon color="#777777">mdi-magnify</v-icon>
						</v-btn>
					</div>
				</v-card>
			</v-menu>
		</div>
		<div v-else class="tw-flex mx-3 my-6">
			<v-btn class="tw-mx-2 py-5" outlined color="#c3e3f4" rounded>
				<span style="color: #777777;">Type Location</span>
			</v-btn>
			<v-menu
				v-model="priceMenu"
				:close-on-content-click="false"
				:nudge-width="200"
				offset-y
				rounded="lg"
				class
			>
				<template v-slot:activator="{ on, attrs }">
					<v-btn color="#c3e3f4" outlined v-bind="attrs" v-on="on" rounded class="py-5">
						<span style="color: #777777;">Price</span>
					</v-btn>
				</template>

				<v-card class="menu">
					<div class="tw-p-4">
						<div class="tw-font-bold tw-pb-2">Price Range</div>
						<v-text-field v-model="price" type="number" outlined prefix="Min -"></v-text-field>
						<div>
							<div class="tw-cursor-pointer tw-my-1" @click="price=0">$0+</div>
							<div class="tw-cursor-pointer tw-my-1" @click="price=1000000">$100,000+</div>
							<div class="tw-cursor-pointer tw-my-1" @click="price=2000000">$200,000+</div>
						</div>
					</div>
					<div class="text-right tw-p-3" style="background-color: #4ca2cd">
						<v-btn>Done</v-btn>
					</div>
				</v-card>
			</v-menu>
			<v-select
				class="mx-2 mySelect"
				:items="propertyTypeList"
				label="Property Type"
				rounded
				v-model="propertyType"
				dense
				outlined
				color="#c3e3f4"
				multiple
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
						<v-btn-toggle class="tw-pt-2" v-model="bathrooms">
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
			<v-select
				class="ml-2 mr-8 mySelect"
				:items="constractionYears"
				label="Construction Year"
				dense
				rounded
				v-model="year"
				multiple
				outlined
				color="#c3e3f4"
				hide-details="auto"
			></v-select>
			<v-btn rounded  depressed class="shadow-btn">
				<span style="color: #777777;" class="tw-pr-4">Search</span>
				<v-icon color="#777777">mdi-magnify</v-icon>
			</v-btn>
		</div>
		<v-row class="mx-2 mb-8">
			<v-col cols="12" sm="6" md="4" lg="4" xl="3" v-for="card in cards" :key="card.index">
				<marketplace-card
					:bedNo="card.bedNo"
					:bathNo="card.bathNo"
					:price="card.price"
					:location="card.location"
					:size="card.size"
					:favorite="card.favorite"
				/>
			</v-col>
		</v-row>
		<v-pagination class="tw-mb-6" v-model="page" :length="6"></v-pagination>
	</div>
</template>

<script>
import MarketplaceCard from '../components/MarketplaceCard.vue'
export default {
	name: 'ReitcirclesMarketplace',
	components: {
		MarketplaceCard
	},

	data() {
		return {
			page: 1,
			priceMenu: false,
			bedrooms: 0,
			bathrooms: 0,
			price: null,
			propertyType: null,
			beds: null,
			baths: null,
			year: null,
			items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
			// Dummy data for loop
			cards: [
				{
					bedNo: 3,
					bathNo: 2,
					price: '$1,22M',
					size: '1,345 sqft',
					location: '1234 Street, North, London',
					favorite: 5
				},
				{
					bedNo: 3,
					bathNo: 2,
					price: '$1,22M',
					size: '1,345 sqft',
					location: '1234 Street, North, London',
					favorite: 5
				},
				{
					bedNo: 3,
					bathNo: 2,
					price: '$1,22M',
					size: '1,345 sqft',
					location: '1234 Street, North, London',
					favorite: 5
				},
				{
					bedNo: 3,
					bathNo: 2,
					price: '$1,22M',
					size: '1,345 sqft',
					location: '1234 Street, North, London',
					favorite: 5
				},
				{
					bedNo: 3,
					bathNo: 2,
					price: '$1,22M',
					size: '1,345 sqft',
					location: '1234 Street, North, London',
					favorite: 5
				},
				{
					bedNo: 3,
					bathNo: 2,
					price: '$1,22M',
					size: '1,345 sqft',
					location: '1234 Street, North, London',
					favorite: 5
				},
				{
					bedNo: 3,
					bathNo: 2,
					price: '$1,22M',
					size: '1,345 sqft',
					location: '1234 Street, North, London',
					favorite: 5
				},
				{
					bedNo: 3,
					bathNo: 2,
					price: '$1,22M',
					size: '1,345 sqft',
					location: '1234 Street, North, London',
					favorite: 5
				},
				{
					bedNo: 3,
					bathNo: 2,
					price: '$1,22M',
					size: '1,345 sqft',
					location: '1234 Street, North, London',
					favorite: 5
				},
				{
					bedNo: 3,
					bathNo: 2,
					price: '$1,22M',
					size: '1,345 sqft',
					location: '1234 Street, North, London',
					favorite: 5
				},
				{
					bedNo: 3,
					bathNo: 2,
					price: '$1,22M',
					size: '1,345 sqft',
					location: '1234 Street, North, London',
					favorite: 5
				},
				{
					bedNo: 3,
					bathNo: 2,
					price: '$1,22M',
					size: '1,345 sqft',
					location: '1234 Street, North, London',
					favorite: 5
				},
			],
			items: [
				'Item 1', 'Item 2'
			],
			constractionYears: [
				'Voor 1906',
				'1906-1930',
				'1931-1944',
				'1945-1959',
				'1960-1970',
				'1971-1980',
				'1981-1990',
				'1991-2000',
				'2001-2010',
				'2011-2020',
				'Ne 2020'
			],
			propertyTypeList: [
				'House',
				'Townhomes',
				'Multi-family',
				'Condos',
				'Lots',
				'Apartments',
				'Manufactured'
			]
		};
	},

	mounted() {

	},

	methods: {

	},
};
</script>

<style>
.mySelect.theme--light.v-text-field--outlined:not(.v-input--is-focused):not(.v-input--has-state) > .v-input__control > .v-input__slot fieldset{
    color: #c3e3f4;
    border-radius: 19px;
}
.shadow-btn{
  filter: drop-shadow(0px -2px 25px rgba(134, 153, 183, 0.376));
}
</style>
