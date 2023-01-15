import React, { useContext, useEffect, useState } from "react";
import Table from "./Table";
import NewsAPI from "../api/NewsAPI";
import UniversalContext from "../contexts/UniversalContext";
function Home() {
	const [data, setData] = useState([]);
	const { setLoading, setPageTitle } = useContext(UniversalContext);
	useEffect(() => {
		setPageTitle("News - Hacker News");
	}, []);
	useEffect(() => {
		setLoading(true);
		NewsAPI({ page_no: 0, home: true })
			.then((res) => {
				setData(res.data.hits);
			})
			.finally(() => {
				setLoading(false);
			});
		NewsAPI({ page_no: 0, home: true }, true).then((res) => {
			setData(res.data.hits);
		});
	}, []);
	return (
		<div>
			<Table data={data} />
		</div>
	);
}

export default Home;
