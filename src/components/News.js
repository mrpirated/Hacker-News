import React, { useContext, useEffect, useState } from "react";
import Table from "./Table";
import NewsAPI from "../api/NewsAPI";
import UniversalContext from "../contexts/UniversalContext";
function News() {
	const [data, setData] = useState([]);
	const { setLoading, setPageTitle } = useContext(UniversalContext);
	useEffect(() => {
		setPageTitle("News - Hacker News");
	}, []);
	useEffect(() => {
		setLoading(true);
		NewsAPI({ page_no: 0 })
			.then((res) => {
				console.log(res.hits);
				setData(res.hits);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);
	return (
		<div>
			<Table data={data} type='news' />
		</div>
	);
}

export default News;
