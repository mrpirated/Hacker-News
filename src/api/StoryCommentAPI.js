import axios from "axios";

const StoryCommentAPI = async (data) => {
	const { objectID } = data;
	return axios
		.get(`http://hn.algolia.com/api/v1/items/${objectID}`)
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			console.error(err);
		});
};
export default StoryCommentAPI;
