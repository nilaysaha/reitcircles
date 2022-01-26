<template>
	<v-app id="inspire" class="tw-bg-white">
		<v-navigation-drawer class="tw-hidden" v-model="drawer" app>
			<!--  -->
			<v-list>
				<v-list-group
					v-for="item in items"
					:key="item.title"
					v-model="item.active"
					:prepend-icon="item.action"
					no-action
				>
					<template v-slot:activator>
						<v-list-item-content>
							<v-list-item-title v-text="item.title"></v-list-item-title>
						</v-list-item-content>
					</template>

					<v-list-item v-for="child in item.items" :key="child.title">
						<v-list-item-content>
							<v-list-item-title v-text="child.title"></v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-list-group>
			</v-list>
		</v-navigation-drawer>

		<v-app-bar color="#4CA2CD" dark elevation="0" height="80px" app>
			<div>
				<v-img
					width="294"
					src="https://reitcircles.s3.eu-central-1.amazonaws.com/rc_logos_final/png_images/w2.2.png"
				></v-img>
			</div>
			<v-spacer class="tw-hidden md:tw-block"></v-spacer>
			<v-app-bar-nav-icon
				class="tw-text-secondary tw-block md:tw-hidden tw-ml-auto"
				@click="drawer = !drawer"
			></v-app-bar-nav-icon>

			<div class="tw-hidden md:tw-flex tw-space-x-12 tw-items-center tw-justify-between">
				<span>Home</span>
				<span>Dashboard</span>
				<v-menu bottom left>
					<template v-slot:activator="{ on, attrs }">
						<div v-bind="attrs" v-on="on">
							assets
							<v-icon>mdi-menu-down</v-icon>
						</div>
					</template>

					<v-list>
						<v-list-item>
							<v-list-item-title>Profile</v-list-item-title>
						</v-list-item>
					</v-list>
				</v-menu>
				<v-menu bottom left>
					<template v-slot:activator="{ on, attrs }">
						<div v-bind="attrs" v-on="on">
							Settings
							<v-icon>mdi-menu-down</v-icon>
						</div>
					</template>

					<v-list>
						<v-list-item>
							<v-list-item-title>Wallet</v-list-item-title>
						</v-list-item>
					</v-list>
				</v-menu>
				<v-menu bottom left>
					<template v-slot:activator="{ on, attrs }">
						<div v-bind="attrs" v-on="on">
							Admin
							<v-icon>mdi-menu-down</v-icon>
						</div>
					</template>

					<v-list>
						<v-list-item v-for="(item, i) in items" :key="i">
							<v-list-item-title>{{ item.title }}</v-list-item-title>
						</v-list-item>
					</v-list>
				</v-menu>
			</div>
			<v-spacer class="tw-hidden md:tw-block"></v-spacer>
			<div class="tw-mr-12 tw-hidden md:tw-block">Login/Register</div>
		</v-app-bar>

		<v-main class="">
			<router-view class />
		</v-main>
		<Footer />
	</v-app>
</template>

<script>
import Footer from '@/components/Footer.vue'
export default {
	components: {
		Footer
	},
	data: () => ({
		drawer: false,
		items: [
			{ title: 'Click Me' },
			{ title: 'Click Me' },
			{ title: 'Click Me' },
			{ title: 'Click Me' },
		],
		items: [
			{
				action: 'mdi-ticket',
				items: [{ title: 'List Item' }],
				title: 'Attractions',
			},
			{
				action: 'mdi-silverware-fork-knife',
				active: true,
				items: [
					{ title: 'Breakfast & brunch' },
					{ title: 'New American' },
					{ title: 'Sushi' },
				],
				title: 'Dining',
			},
			{
				action: 'mdi-school',
				items: [{ title: 'List Item' }],
				title: 'Education',
			},
			{
				action: 'mdi-human-male-female-child',
				items: [{ title: 'List Item' }],
				title: 'Family',
			},
			{
				action: 'mdi-bottle-tonic-plus',
				items: [{ title: 'List Item' }],
				title: 'Health',
			},
			{
				action: 'mdi-briefcase',
				items: [{ title: 'List Item' }],
				title: 'Office',
			},
			{
				action: 'mdi-tag',
				items: [{ title: 'List Item' }],
				title: 'Promotions',
			},
		],


	}),
}
</script>
