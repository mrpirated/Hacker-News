const resolvePages = async (API, data) => {
	data = { ...data, page_no: 0 };
	return API(data)
		.then((res) => {
			const pages = res.data.nbPages;

			var promises = [];
			for (let i = 0; i < pages; i++) {
				data = { ...data, page_no: i };
				promises.push(API(data));
			}
			return Promise.all(promises);
		})
		.then((res) => {
			var all_pages = { data: { hits: [] } };
			res.forEach((response) => {
				if (response && response.status === 200)
					all_pages.data.hits.push(...response.data.hits);
			});

			return all_pages;
		})
		.catch((err) => {
			console.error(err);
		});
};
export default resolvePages;
