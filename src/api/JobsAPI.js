import axios from "axios";

const JobsAPI = async (data) => {
	const { page_no } = data;
	return axios
		.get(`http://hn.algolia.com/api/v1/search_by_date?page=${page_no}&tags=job`)
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			console.error(err);
		});
};
export default JobsAPI;
