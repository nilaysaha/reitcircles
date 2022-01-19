<template>
    <div>
        <v-card  class=" pa-1 tw-rounded-2xl rounded-xl">
            <div class=" tw-relative ">
                <img class="tw-rounded-2xl" src="../assets/img/house.jpeg" alt="House Image" height="250">
                <v-btn
                    icon
                    color="white"
                    class=" tw-absolute tw-top-2 tw-right-2"
                >
                    <v-icon>mdi-heart</v-icon>
                </v-btn>
                <v-btn
                    icon
                    color="white"
                    class=" tw-absolute tw-bottom-2 tw-right-2"
                >
                    <span>{{favorite}}</span>
                    <v-icon>mdi-star</v-icon>
                </v-btn>
            </div>

            <v-card-actions>
                <div>
                    <div class="tw-flex">
                        <div class="mr-4">
                            <v-btn
                                icon
                                color="cyan"
                                class=""
                                small
                            >
                                <v-icon>mdi-bed-empty</v-icon>
                            </v-btn>
                            <div class=" tw-text-sm tw-text-gray-500 ">{{bedNo}} Bed</div>
                        </div>
                        <div>
                            <v-btn
                                icon
                                color="cyan"
                                class=""
                                small
                            >
                                <v-icon>mdi-bathtub</v-icon>
                            </v-btn>
                            <div class="tw-text-sm tw-text-gray-500">{{bathNo}} Bath</div>
                        </div>
                    </div>
                    <div class="mt-2 tw-text-gray-400">{{location}}</div>
                </div>

                <v-spacer></v-spacer>
                <div class="">
                    <div class="cyan--text tw-font-bold">{{price}}</div>
                    <div class="tw-text-gray-400 tw-text-xs">{{size}}</div>
                    <div class="ml-5">
                        <v-btn
                            icon
                            color="cyan"
                            class="mt-1"
                            small
                        >
                            <v-icon>mdi-share-variant</v-icon>
                        </v-btn>
                    </div>
                </div>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
export default {
    name: 'ReitcirclesMarketplacecard',
    props: ['bedNo', 'bathNo', 'price', 'location', 'size', 'favorite'],

    data() {
        return {

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
