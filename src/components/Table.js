import React, { useState, useEffect, useContext } from "react";
import SearchCard from "./SearchCard";
import CommentsCard from "./CommentsCard";
import { Box, TablePagination } from "@mui/material";
import Paginate from "../utils/paginate";
import UniversalContext from "../contexts/UniversalContext";
const selectCard = (item) => {
	if (item.parent_id != null) {
		return <CommentsCard item={item} />;
	} else {
		return <SearchCard item={item} />;
	}
};
function Table(props) {
	const { data } = props;
	const [paginatedData, setPaginatedData] = useState([]);
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);
	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};
	const { loading } = useContext(UniversalContext);
	useEffect(() => {
		setPaginatedData(Paginate(data, rowsPerPage));
	}, [data, rowsPerPage]);
	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	return (
		<div>
			<Box>
				<Box>
					{paginatedData[page]
						? paginatedData[page].map((item) => (
								<Box m={2}>{selectCard(item)}</Box>
						  ))
						: ""}
				</Box>
				<Box
					component='footer'
					className='pagination'
					display={loading ? "none" : "flex"}
				>
					<TablePagination
						component='div'
						count={data.length}
						page={page}
						onPageChange={handleChangePage}
						rowsPerPage={rowsPerPage}
						onRowsPerPageChange={handleChangeRowsPerPage}
						sx={{ color: "white" }}
					/>
				</Box>
			</Box>
		</div>
	);
}

export default Table;
