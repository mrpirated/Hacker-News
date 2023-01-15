import React, { useContext, useEffect, useState } from "react";
import Table from "./Table";
import ShowAPI from "../api/ShowAPI";
import UniversalContext from "../contexts/UniversalContext";
function Show() {
	const [data, setData] = useState([]);
	const { setLoading, setPageTitle } = useContext(UniversalContext);
	useEffect(() => {
		setPageTitle("Show - Hacker News");
	}, []);
	useEffect(() => {
		setLoading(true);
		ShowAPI({ page_no: 0 })
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

export default Show;
