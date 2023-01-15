import React, { useEffect, useState, useContext } from "react";
import StoryCommentAPI from "../api/StoryCommentAPI";
import UniversalContext from "../contexts/UniversalContext";
import { useLocation } from "react-router-dom";
import getTime from "../utils/getTime";
import SingleCommentCard from "./SingleCommentCard";
import { Card, CardContent, Link, Box, Typography } from "@mui/material";
function ViewComment(props) {
	const { setLoading, setPageTitle } = useContext(UniversalContext);
	const location = useLocation();
	const [data, setData] = useState([]);
	const { title, objectID } = location.state;
	console.log(objectID);
	useEffect(() => {
		setPageTitle(`${title} - Hacker News`);
	}, []);
	useEffect(() => {
		setLoading(true);
		StoryCommentAPI({ objectID: objectID })
			.then((res) => {
				setData(res);
				console.log(res);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);
	return (
		<Box component='div' m={2}>
			<Typography
				variant='h5'
				component='span'
				onClick={() => {
					window.open(data.url, "_blank");
				}}
			>
				{data.title}
			</Typography>
			<Typography component='span'>
				{" "}
				<Link href={data.url} target='_blank' underline='hover' color='grey'>
					({data.url})
				</Link>
			</Typography>
			<Typography component='span' style={{ float: "right" }}>
				{getTime(data.created_at)}
			</Typography>
			<Typography sx={{ mb: 1.5 }} color='text.secondary'>
				{data.points} points
			</Typography>
			<Typography component='span'>By: {data.author}</Typography>
			{data && <SingleCommentCard data={data.children} replyTo={data.author} />}
		</Box>
	);
}

export default ViewComment;
