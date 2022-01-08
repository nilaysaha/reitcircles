export const isEmpty = (v) => {
	if ([undefined, null, ""].includes(v)) return true;
	if (Array.isArray(v) && !v.length) return true;
	if (isObject(v) && !Object.keys(v).length) return true;
	return false;
};
