import axios from "axios";
import getTimeStamp from "../utils/getTimeStamp";

const SearchAPI = async (data) => {
	const { query, page_no, searchOption, byOption, forOption } = data;
	var q = `http://hn.algolia.com/api/v1/search?query=${query}&page=${page_no}`;
	if (byOption == "Date") {
		q = `http://hn.algolia.com/api/v1/search_by_date?query=${query}&page=${page_no}`;
	}
	if (searchOption == "Stories") {
		q += "&tags=story";
	} else if (searchOption == "Comments") {
		q += "&tags=comment";
	}
	if (forOption !== "All Time") {
		q += `&numericFilters=created_at_i>=${getTimeStamp(forOption)}`;
	}

	return axios
		.get(q)
		.then((res) => {
			console.log(res);
			return res.data;
		})
		.catch((err) => {
			console.error(err);
		});
};
export default SearchAPI;
