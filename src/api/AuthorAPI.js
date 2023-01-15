import axios from "axios";

const AuthorAPI = async (data) => {
	const { author } = data;

	return axios
		.get(`http://hn.algolia.com/api/v1/users/${author}`)
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			console.error(err);
		});
};
export default AuthorAPI;
