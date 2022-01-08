import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import DefaultLayout from "@/layout/default.vue";
import Documents from "../views/Documents.vue";
import Marketplace from "../views/Marketplace.vue";


Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		component: DefaultLayout,
		meta: { requiresAuth: true },
		children: [
			{
				path: "",
				name: "Home",
				component: Home,
			},
			{
				path: "/documents",
				name: "document",
				component: Documents,
			},
			{
				path: "/marketplace",
				name: "Marketplace",
				component: Marketplace,
			},
		],
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
