import React, { useEffect, useState, useContext } from "react";
import Table from "./Table";
import CommentAPI from "../api/CommentAPI";
import UniversalContext from "../contexts/UniversalContext";
function Comments() {
	const [data, setData] = useState([]);
	const { setLoading, setPageTitle } = useContext(UniversalContext);
	useEffect(() => {
		setPageTitle("Comments - Hacker News");
	}, []);
	useEffect(() => {
		setLoading(true);
		CommentAPI({ page_no: 0 })
			.then((res) => {
				setData(res.hits);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);
	return (
		<div>
			<Table data={data} type='comments' />
		</div>
	);
}

export default Comments;
