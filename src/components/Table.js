import React from "react";
import SearchCard from "./SearchCard";
import NewsCard from "./NewsCard";
import CommentsCard from "./CommentsCard";
import { Box, Typography } from "@mui/material";
const selectCard = (item) => {
	if (item.parent_id != null) {
		return <CommentsCard item={item} />;
	} else {
		return <SearchCard item={item} />;
	}
	// switch (type) {
	// 	case "search":
	// 		return <SearchCard data={data} />;
	// 	case "news":
	// 		return <NewsCard data={data} />;
	// 	case "comments":
	// 		return <CommentsCard data={data} />;
	// 	default:
	// 		return;
	// }
};
function Table(props) {
	const { data, type } = props;
	console.log(props);
	return (
		<div>
			<Box>
				{data.length
					? data.map((item) => <Box m={2}>{selectCard(item)}</Box>)
					: ""}
			</Box>
		</div>
	);
}

export default Table;
