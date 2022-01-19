<template>
    <div class="tw-mx-8">
        <div class="tw-text-center my-16 tw-text-4xl tw-font-bold " style="color: #4CA2CD;">Marketplace</div>
        <div v-if="$vuetify.breakpoint.name === 'sm' || $vuetify.breakpoint.name === 'xs'" class=" tw-text-right">
            <v-menu
                v-model="menu"
                :close-on-content-click="false"
                :nudge-width="80"
                offset-y
                rounded="md"
            >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        color="#0055FF"
                        dark
                        text
                        v-bind="attrs"
                        v-on="on"
                        class="mr-4 mb-10"
                    >
                        <v-icon>mdi-filter</v-icon>
                    </v-btn>
                </template>

                <v-card class="pt-4 px-5 menu">
                    <div class="my-6">
                        <v-btn
                            class=" tw-w-full mb-2 mx-2 mt-0 py-7 pl-2 pr-7"
                            outlined
                            color="cyan"
                        >
                            <span style="color: #777777;">Type Location</span>
                        </v-btn>
                        <v-select
                            :items="items"
                            label="Price"
                            rounded
                            v-model="price"
                            outlined
                            color="cyan"
                            class="mx-2 tw-w-full"
                        ></v-select>
                        <v-select
                            class="mx-2 tw-w-full"
                            :items="items"
                            label="Property Type"
                            rounded
                            v-model="propertyType"
                            outlined
                            color="cyan"
                        ></v-select>
                        <v-select
                            class="mx-2 tw-w-full"
                            :items="items"
                            label="Beds"
                            rounded
                            v-model="beds"
                            outlined
                            color="cyan"
                        ></v-select>
                        <v-select
                            class="mx-2 tw-w-full"
                            :items="items"
                            label="Baths"
                            rounded
                            v-model="baths"
                            outlined
                            color="cyan"
                        ></v-select>
                        <v-select
                            class="ml-2 mr-8 tw-w-full"
                            :items="items"
                            label="Construction Year"
                            rounded
                            v-model="year"
                            outlined
                            color="cyan"
                        ></v-select>
                        <v-text-field
                            label="Search"
                            class="mx-2 tw-w-full"
                            solo
                            rounded
                            append-icon="mdi-magnify"
                        ></v-text-field>
                    </div>
                </v-card>
            </v-menu>
        </div>
        <div v-else class="tw-flex mx-3 my-6">
            <v-btn
                class="mx-2 mt-0 py-7 pl-2 pr-7"
                outlined
                color="cyan"
            >
                <span style="color: #777777;">Type Location</span>
            </v-btn>
            <v-select
                :items="items"
                label="Price"
                rounded
                v-model="price"
                outlined
                color="cyan"
                class="mx-2"
                hide-details="true"
            ></v-select>
            <v-select
                class="mx-2"
                :items="items"
                label="Property Type"
                rounded
                v-model="propertyType"
                outlined
                color="cyan"
            ></v-select>
            <v-select
                class="mx-2"
                :items="items"
                label="Beds"
                rounded
                v-model="beds"
                outlined
                color="cyan"
            ></v-select>
            <v-select
                class="mx-2"
                :items="items"
                label="Baths"
                rounded
                v-model="baths"
                outlined
                color="cyan"
            ></v-select>
            <v-select
                class="ml-2 mr-8"
                :items="items"
                label="Construction Year"
                rounded
                v-model="year"
                outlined
                color="cyan"
            ></v-select>
            <v-text-field
                label="Search"
                class="ml-10 mr-2"
                solo
                rounded
                append-icon="mdi-magnify"
            ></v-text-field>
        </div>
        <v-row class="mx-2 mb-8">
            <v-col cols="12" sm="6" md="4" lg="4" xl="3"  v-for="card in cards" :key="card.index">
                <marketplace-card :bedNo="card.bedNo" :bathNo="card.bathNo" :price="card.price" :location="card.location" :size="card.size" :favorite="card.favorite" />
            </v-col>
        </v-row>
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
            ]
        };
    },

    mounted() {

    },

    methods: {

    },
};
</script>

<style lang="scss" scoped>

</style>
