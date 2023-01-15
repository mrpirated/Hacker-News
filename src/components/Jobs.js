import React, { useContext, useEffect, useState } from "react";
import Table from "./Table";
import JobsAPI from "../api/JobsAPI";
import UniversalContext from "../contexts/UniversalContext";
function Jobs() {
	const [data, setData] = useState([]);
	const { setLoading, setPageTitle } = useContext(UniversalContext);
	useEffect(() => {
		setPageTitle("Jobs - Hacker News");
	}, []);
	useEffect(() => {
		setLoading(true);
		JobsAPI({ page_no: 0 })
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

export default Jobs;
