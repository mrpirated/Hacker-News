import axios from "axios";
import resolvePages from "./resolvePages";

const API = async (data) => {
	const { page_no, home } = data;
	var q = `http://hn.algolia.com/api/v1/search_by_date?page=${page_no}`;
	if (home) q = `http://hn.algolia.com/api/v1/search?page=${page_no}`;
	return axios
		.get(q)
		.then((res) => {
			return res;
		})
		.catch((err) => {
			console.error(err);
		});
};
const NewsAPI = async (data, all_pages = false) => {
	if (all_pages) return resolvePages(API, data);
	return API(data);
};
export default NewsAPI;
