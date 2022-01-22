<template>
	<!-- <hello-world /> -->
	<div>
		<v-carousel class="carousel tw-relative" hide-delimiter-background :show-arrows="false">
			<v-carousel-item
				v-for="(item,i) in items"
				:key="i"
				:src="item.src"
				reverse-transition="fade-transition"
				transition="fade-transition"
			></v-carousel-item>
			<div class="centered">
				<span class="tw-block tw-text-2xl 3xl:tw-text-7xl">It is easier</span>
				<span class="tw-block tw-text-sm md:tw-text-base 3xl:tw-text-4xl">THAN EVER</span>
				<span class="tw-block tw-text-3xl 3xl:tw-text-4xl">RAISE CAPITAL</span>
				<span class="tw-block tw-text-sm md:tw-text-base 3xl:tw-text-4xl">USING YOUR REAL ESTATE</span>
				<v-btn class="tw-mt-20" color="#4CA2CD" dark>
					<span class="tw-px-40">Register, Document & Sell online</span>
				</v-btn>
			</div>
		</v-carousel>
		<h4
			class="3xl:tw-text-4xl tw-font-bold tw-text-3xl tw-my-9 tw-text-center tw-block  md:tw-hidden"
		>Register Your Property</h4>

		<v-container
			class="tw-flex tw-flex-wrap-reverse tw-items-center md:tw-space-x-24 tw-my-8 md:tw-my-14 3xl:tw-mt-20 md:tw-mb-28 3xl:tw-mb-44 tw-pl-4 tw-pr-3"
		>
			<div class="tw-flex-1 tw-text-center">
				<h4 class="3xl:tw-text-4xl tw-font-bold tw-hidden tw-md-block">Register Your Property</h4>
				<p class="tw-text-2xl tw-py-6 md:tw-py-0">
					Easy to use site, helps you to create your property on the platform. After undergoing some mandatory checks of ownership of
					the property, you are well on your way to unlock the value of your real estate.
				</p>
				<v-btn x-large color="#4CA2CD" dark>Register</v-btn>
			</div>
			<div class>
				<img class="md:tw-max-w-2xl tw-rounded-lg tw-object-contain" src="@/assets/img/home2.png" />
			</div>
		</v-container>
		<v-container
			class="tw-flex tw-flex-wrap-reverse tw-items-center md:tw-space-x-24 tw-mt-8 md:tw-mt-14 3xl:tw-mt-28 tw-pl-4 tw-pr-3"
		>
			<div class>
				<img class="tw-rounded-lg md:tw-max-w-2xl tw-object-contain" src="@/assets/img/home2.png" />
			</div>
			<div class="tw-flex-1 tw-text-center">
				<h4 class="tw-text-4xl tw-hidden md:tw-block">Submit Documents for Online verification</h4>
				<p class="tw-text-2xl">
					In order to use the online portal you need to undergo a mandatory KYC process that will verify your identity online. It is an easy, automated process and can be completed in few easy steps.
				</p>
				<v-btn to="/documents" color="#4CA2CD" dark>Start KYC</v-btn>
			</div>
		</v-container>

		<!-- <div class="tw-bg-primary tw-pb-60">
			<v-container>
				<div
					class="md:tw-max-w-5xl mx-auto tw-border-2 tw-px-11 tw-pt-11 tw-pb-24 tw--mt-40 tw-bg-white tw-border-black tw-relative p"
				>
					<div class="tw-font-bold tw-text-45px tw-text-center tw-flex-1">Property can be bid upon</div>
					<div class="tw-flex">
						<div class="tw-flex-1 tw-pt-28">
							<p>
								Once you are verified for KYC/AML and ownership is proven, you are now ready to accept bids from
								interested buyers. Bids can be accepted / rejected within a time frame. And money is instantly transferred to your account.
							</p>
							<div class="tw-text-center tw-pt-64">
								<v-btn x-large dark class="offers-button tw-mx-auto" rounded>
									<span class="tw-text-3xl tw-font-bold tw-px-6">My offers</span>
								</v-btn>
							</div>
						</div>
						<div class="tw-flex-1">
							<v-img class="tw-absolute tw-top-72" contain src="@/assets/img/home-listing.png"></v-img>
						</div>
					</div>
				</div>
			</v-container>
		</div>-->
	</div>
</template>

<script>
import HelloWorld from '../components/HelloWorld'

export default {
	name: 'Home',

	components: {
		HelloWorld,
	},
	data() {
		return {
			items: [
				{
					src: require('@/assets/img/home.png'),
				},
				{
					src: require('@/assets/img/home.png'),
				},
				{
					src: require('@/assets/img/home.png'),
				},
				{
					src: require('@/assets/img/home.png'),
				},
			],
		};
	},
}
</script>


<style>
.centered {
	position: absolute;
	text-align: center;
	color: white;
	top: 50%;
	font-weight: 700;
	left: 50%;
	transform: translate(-50%, -50%);
}

@media screen and (max-width: 720px) {
	.centered {
		/* padding-top: 1rem; */
		position: absolute;
		text-align: center;
		color: white;
		top: 28%;
		font-weight: 700;
		left: 50%;
	}
	.carousel .v-window-item .v-responsive__sizer {
		background: linear-gradient(
			180.07deg,
			#4ca2cd 0.06%,
			rgba(76, 162, 205, 0) 28.21%
		);
	}
}
.offers-button {
	background: linear-gradient(180deg, #4ca2cd 0%, #4ca2cd 42.4%, #004c72 100%);
	color: white;
}
</style>
