import Document from "../../api/document.js";
// import { initialList } from "../store.helpers";
import { createGetters, createMutations, handleAction } from "vuelpers";

const initialState = () => {
	return {
		documents: [],
	};
};

const state = initialState();

const getters = {
	...createGetters("documents"),
};

const mutations = {
	...createMutations("SET", "PUSH", "UNSHIFT", "DELETE", "UPDATE", "MERGE"),
};

const actions = {
	getDocuments({ commit }) {
		return handleAction(Document.get(), (res) => {
			console.log(res);
			commit("SET", { documents: res.data });
			console.log(res);
			console.log("get buyer", "console from get buyer");
		});
	},
};

export default {
	state,
	getters,
	mutations,
	actions,
	namespaced: true,
};
