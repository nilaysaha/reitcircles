import api from "./base.api";

export default {
	get: () => api.get("/documents"),
	// review: (body) => api.patch("/buyer/admin-review", body),
	// getById: (id) => api.get("/buyer/" + id),
	// update: (body) => api.post("/buyer", body),
};
