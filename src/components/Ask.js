import React, { useContext, useEffect, useState } from "react";
import Table from "./Table";
import AskAPI from "../api/AskAPI";
import UniversalContext from "../contexts/UniversalContext";
function Ask() {
	const [data, setData] = useState([]);
	const { setLoading, setPageTitle } = useContext(UniversalContext);
	useEffect(() => {
		setPageTitle("Ask - Hacker News");
	}, []);
	useEffect(() => {
		setLoading(true);
		AskAPI({ page_no: 0 })
			.then((res) => {
				setData(res.data.hits);
			})
			.finally(() => {
				setLoading(false);
			});
		AskAPI({ page_no: 0 }, true).then((res) => {
			setData(res.data.hits);
		});
	}, []);
	return (
		<div>
			<Table data={data} type='news' />
		</div>
	);
}

export default Ask;
