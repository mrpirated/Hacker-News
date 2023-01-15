import React from "react";
import SearchCard from "./SearchCard";
import CommentsCard from "./CommentsCard";
import { Box, Typography } from "@mui/material";
const selectCard = (item) => {
	if (item.parent_id != null) {
		return <CommentsCard item={item} />;
	} else {
		return <SearchCard item={item} />;
	}
};
function Table(props) {
	const { data } = props;
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
