import Vue from "vue";
import Vuex from "vuex";
import { importModules } from "vuelpers";
const modules = importModules(
	require.context("./modules", false, /\.store\.(js|ts)$/)
);
Vue.use(Vuex);

export default new Vuex.Store({
	state: {},
	mutations: {},
	actions: {},
	modules,
});
