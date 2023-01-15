import axios from "axios";
import getTimeStamp from "../utils/getTimeStamp";
import resolvePages from "./resolvePages";

const API = async (data) => {
	const { query, page_no, searchOption, byOption, forOption } = data;
	var tag = "&tags=story";
	if (searchOption == "Comments") {
		tag = "&tags=comment";
	}
	var q = `http://hn.algolia.com/api/v1/search?query=${query}&${tag}&page=${page_no}`;
	if (byOption == "Date") {
		q = `http://hn.algolia.com/api/v1/search_by_date?query=${query}&${tag}&page=${page_no}`;
	}

	if (forOption !== "All Time") {
		q += `&numericFilters=created_at_i>=${getTimeStamp(forOption)}`;
	}

	return axios
		.get(q)
		.then((res) => {
			return res;
		})
		.catch((err) => {
			console.error(err);
		});
};
const SearchAPI = async (data, all_pages = false) => {
	if (all_pages) return resolvePages(API, data);
	return API(data);
};
export default SearchAPI;
