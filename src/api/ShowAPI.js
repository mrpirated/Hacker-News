import axios from "axios";
import resolvePages from "./resolvePages";

const API = async (data) => {
	const { page_no } = data;
	return axios
		.get(
			`http://hn.algolia.com/api/v1/search_by_date?tags=show_hn&page=${page_no}`
		)
		.then((res) => {
			return res;
		})
		.catch((err) => {
			console.error(err);
		});
};
const ShowAPI = async (data, all_pages = false) => {
	if (all_pages) return resolvePages(API, data);
	return API(data);
};
export default ShowAPI;
