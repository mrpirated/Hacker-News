import React, { useEffect, useState, useContext } from "react";
import AuthorAPI from "../api/AuthorAPI";
import UniversalContext from "../contexts/UniversalContext";
import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import moment from "moment";
function Author(props) {
	const { setLoading, setPageTitle } = useContext(UniversalContext);

	const location = useLocation();
	const { author } = location.state;
	const [data, setData] = useState();
	useEffect(() => {
		setPageTitle(`${author} - Hacker News`);
	}, []);
	useEffect(() => {
		setLoading(true);
		AuthorAPI({ author: author })
			.then((res) => {
				setData(res);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);
	return (
		<div>
			{data ? (
				<Box component='div' m={3}>
					<Box>
						<Typography variant='h3' component='span'>
							{data.username}
						</Typography>
					</Box>
					<Typography variant='h5' sx={{ mb: 1.5 }} color='text.secondary'>
						Created On: {moment(data.created_at).format("LL")}
					</Typography>
					<Typography variant='h5'>Karma: {data.karma}</Typography>
					<Typography variant='h5'>About: {data.about}</Typography>
					<Typography variant='h5'> Comments: {data.comment_count}</Typography>
				</Box>
			) : (
				<div></div>
			)}
		</div>
	);
}

export default Author;
