<template>
    <div class=" tw-mx-8">
        <div class="tw-text-center my-16 tw-text-4xl tw-font-bold " style="color: #4CA2CD;">Offers Description</div>
        <div>
            <v-row>
                <v-col cols="12" sm="12" md="8" lg="8" xl="8">
                    <v-card
                        style="box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;"
                        class="mx-auto"
                    >
                        <v-row>
                            <v-col cols="12" sm="6" md="8" lg="9" xl="9">
                                <div class="tw-h-full tw-relative">
                                    <img class="tw-h-full tw-object-cover tw-rounded-2xl" width="100%" src="../assets/img/house.jpeg" alt="House Image">
                                    <div class="tw-rounded-lg tw-w-full tw-absolute tw-bg-gray-50 tw-bottom-0 tw-p-5 tw-opacity-80">
                                        <div class=" tw-flex tw-justify-between" :class="$vuetify.breakpoint.name === 'xs' ? 'tw-text-xs' : ''">
                                            <div>
                                                <div class=" tw-text-blue-500">$176,556</div>
                                                <div class=" tw-text-blue-500 tw-font-bold">Equity listed</div>
                                            </div>
                                            <div>
                                                <div class=" tw-text-blue-800">$123,789</div>
                                                <div class=" tw-text-blue-800 tw-font-bold">Equity available</div>
                                            </div>
                                            <div>
                                                <div class=" tw-text-blue-800">$12,987</div>
                                                <div class=" tw-text-red-800 tw-font-bold">Equity sold</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </v-col>
                            <v-col cols="12" sm="6" md="4" lg="3" xl="3">
                                <div class="tw-m-1" :class="$vuetify.breakpoint.name === 'xs' ? 'tw-flex' : ''">
                                    <div class="">
                                        <img class="tw-rounded-2xl" width="100%" src="../assets/img/house.jpeg" alt="House Image">
                                    </div>
                                    <div :class="$vuetify.breakpoint.name === 'xs' ? 'tw-ml-2' : 'tw-mt-5'">
                                        <img class="tw-rounded-2xl" width="100%" src="../assets/img/house.jpeg" alt="House Image">
                                    </div>
                                    <div :class="$vuetify.breakpoint.name === 'xs' ? 'tw-ml-2' : 'tw-mt-3'">
                                        <img class="tw-rounded-2xl" width="100%" src="../assets/img/house.jpeg" alt="House Image">
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                        <div class="tw-m-2" :class="$vuetify.breakpoint.name === 'xs' ? '' : 'tw-w-3/5'">
                            <v-progress-linear
                                v-model="progress"
                                color="cyan"
                                height="4"
                            ></v-progress-linear>
                        </div>
                    </v-card>
                    <v-row class="tw-p-2 tw-my-1" :class="$vuetify.breakpoint.name === 'xs' ? 'tw-text-xs' : ''">
                        <v-col class="tw-p-0" cols="7" sm="7" md="4">
                            <span>
                                <v-btn
                                    icon
                                    color="blue darken-4"
                                >
                                    <v-icon>mdi-chart-pie</v-icon>
                                </v-btn>
                            </span>
                            <span class=" tw-font-bold cyan--text">26% equity remaining</span>
                        </v-col>
                        <v-col class="tw-p-0" cols="5" sm="5" md="4">
                            <span>
                                <v-btn
                                    icon
                                    color="blue darken-4"
                                >
                                    <v-icon>mdi-chart-pie</v-icon>
                                </v-btn>
                            </span>
                            <span class="tw-font-bold red--text">4% equity sold</span>
                        </v-col>
                        <v-col class="tw-p-0" cols="8" sm="6" md="4">
                            <span>
                                <v-btn
                                    icon
                                    color="blue darken-4"
                                >
                                    <v-icon>mdi-map-marker</v-icon>
                                </v-btn>
                            </span>
                            <span class="tw-font-bold blue--text">1234 street, north, London</span>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" sm="12" md="4" lg="4" xl="4">
                    <div class=" tw-text-right">
                        <div class=" tw-font-bold cyan--text" :class="$vuetify.breakpoint.name === 'xs' ? ' tw-text-lg' : 'tw-text-2xl'">$1,323,456</div>
                        <div :class="$vuetify.breakpoint.name === 'xs' ? ' tw-text-sm' : ''">REIT Token: 2,646,912</div>
                    </div>
                    <div>
                        <div class=" tw-font-bold cyan--text" :class="$vuetify.breakpoint.name === 'xs' ? ' tw-text-sm' : 'tw-text-lg'">DESCRIPTION:</div>
                        <div class="tw-text-sm">
                            A very beautiful double story Bungalow at best location facing North west.
                            School, University and Hospital is near to it.
                        </div>
                    </div>
                    <div class="tw-my-3" :class="$vuetify.breakpoint.name === 'xs' ? 'tw-flex tw-justify-between' : ''">
                        <div>
                            <v-btn
                                icon
                                color="blue darken-4"
                                large
                            >
                                <v-icon>mdi-bed-empty</v-icon>
                            </v-btn>
                            <div class="tw-font-bold tw-text-gray-500 ">2 Beds</div>
                        </div>
                        <div :class="$vuetify.breakpoint.name === 'xs' ? '' : 'tw-my-4'">
                            <v-btn
                                icon
                                color="blue darken-4"
                                large
                            >
                                <v-icon>mdi-bathtub</v-icon>
                            </v-btn>
                            <div class="tw-font-bold tw-text-gray-500 ">3 Bath</div>
                        </div>
                        <div>
                            <v-btn
                                icon
                                color="blue darken-4"
                                large
                            >
                                <v-icon>mdi-square</v-icon>
                            </v-btn>
                            <div class="tw-font-bold tw-text-gray-500 ">1,345 sqft</div>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </div>
        <div>
            <div class="tw-text-lg">OFFERS:</div>
            <v-row class="tw-my-4">
                <v-col cols="12" sm="12" md="4">
                    <div style="box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;" class="tw-p-5">
                        <div class="tw-flex tw-justify-between">
                            <div class="">
                                <v-chip class="tw-px-4" color="#EEEEEE">
                                    <span class="tw-text-sm tw-text-gray-500">$20,000</span>
                                </v-chip>
                                <span class="tw-px-3">=</span>
                                <v-chip class="tw-px-4" color="#EEEEEE">
                                    <span class="tw-text-sm tw-text-gray-500">1.45%</span>
                                </v-chip>
                            </div>
                            <div>
                                <v-chip class="tw-px-4" color="#EEEEEE">
                                    <span class="tw-text-sm tw-text-gray-500">$699/sqft</span>
                                </v-chip>
                            </div>
                        </div>
                        <div class="tw-mt-2">
                            <v-btn
                                icon
                                color="cyan"
                            >
                                <v-icon>mdi-alarm</v-icon>
                            </v-btn>
                            <span class="grey--text">5 hrs left</span>
                        </div>
                        <div class="tw-mt-2">
                            <v-chip class="tw-px-4" color="#EEEEEE">
                                <span class="tw-text-sm tw-font-bold teal--text">Pending</span>
                            </v-chip>
                        </div>
                    </div>
                </v-col>
                <v-col cols="12" sm="12" md="4">
                    <div style="box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;" class="tw-p-5">
                        <div class="tw-flex tw-justify-between">
                            <div class="">
                                <v-chip class="tw-px-4" color="#EEEEEE">
                                    <span class="tw-text-sm tw-text-gray-500">$20,000</span>
                                </v-chip>
                                <span class="tw-px-3">=</span>
                                <v-chip class="tw-px-4" color="#EEEEEE">
                                    <span class="tw-text-sm tw-text-gray-500">1.45%</span>
                                </v-chip>
                            </div>
                            <div>
                                <v-chip class="tw-px-4" color="#EEEEEE">
                                    <span class="tw-text-sm tw-text-gray-500">$699/sqft</span>
                                </v-chip>
                            </div>
                        </div>
                        <div class="tw-mt-2">
                            <v-btn
                                icon
                                color="cyan"
                            >
                                <v-icon>mdi-alarm</v-icon>
                            </v-btn>
                            <span class="grey--text">5 hrs left</span>
                        </div>
                        <div class="tw-mt-2">
                            <v-chip class="tw-px-4" color="#EEEEEE">
                                <span class="tw-text-sm tw-font-bold teal--text">Pending</span>
                            </v-chip>
                        </div>
                    </div>
                </v-col>
                <v-col cols="12" sm="12" md="4">
                    <div style="box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;" class="tw-p-5">
                        <div class="tw-flex tw-justify-between">
                            <div class="">
                                <v-chip class="tw-px-4" color="#EEEEEE">
                                    <span class="tw-text-sm tw-text-gray-500">$20,000</span>
                                </v-chip>
                                <span class="tw-px-3">=</span>
                                <v-chip class="tw-px-4" color="#EEEEEE">
                                    <span class="tw-text-sm tw-text-gray-500">1.45%</span>
                                </v-chip>
                            </div>
                            <div>
                                <v-chip class="tw-px-4" color="#EEEEEE">
                                    <span class="tw-text-sm tw-text-gray-500">$699/sqft</span>
                                </v-chip>
                            </div>
                        </div>
                        <div class="tw-mt-2">
                            <v-btn
                                icon
                                color="cyan"
                            >
                                <v-icon>mdi-alarm</v-icon>
                            </v-btn>
                            <span class="grey--text">5 hrs left</span>
                        </div>
                        <div class="tw-mt-2">
                            <v-chip class="tw-px-4" color="#EEEEEE">
                                <span class="tw-text-sm tw-font-bold teal--text">Pending</span>
                            </v-chip>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </div>
        <div class="tw-text-center tw-my-10">
            <v-btn x-large dark class="offers-button tw-mx-auto" rounded>
                <span class="tw-text-xl tw-font-bold tw-px-4">Place Bid</span>
            </v-btn>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ReitcirclesOffersdescription',

    data() {
        return {
            progress: 70
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
