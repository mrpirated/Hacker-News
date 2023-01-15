import axios from "axios";

const NewsAPI = async (data) => {
	const { page_no } = data;
	return axios
		.get(`http://hn.algolia.com/api/v1/search?page=${page_no}`)
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			console.error(err);
		});
};
export default NewsAPI;
