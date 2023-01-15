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
		NewsAPI({ page_no: 0, home: false })
			.then((res) => {
				setData(res.data.hits);
			})
			.finally(() => {
				setLoading(false);
			});
		NewsAPI({ page_no: 0, home: false }, true).then((res) => {
			setData(res.data.hits);
		});
	}, []);
	return (
		<div>
			<Table data={data} />
		</div>
	);
}

export default News;
