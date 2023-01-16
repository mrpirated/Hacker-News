import React from "react";
import { Card, CardContent, Box, Typography, Link } from "@mui/material";
import getTime from "../utils/getTime";
import { useNavigate } from "react-router-dom";

function CommentsCard(props) {
	const { data, item } = props;
	const navigate = useNavigate();
	return (
		<Box m={1} key={item.objectID}>
			<Card
				variant='outlined'
				sx={{
					borderRadius: "16px",
					borderColor: "#9cc5ed",
					borderWidth: "3px",
					backgroundColor: "#bdf2f2",
				}}
				className='card'
			>
				<CardContent>
					<Typography
						component='span'
						variant='h6'
						onClick={() => {
							navigate(`/author/${item.author}`, {
								state: { author: item.author },
							});
						}}
						className='points'
					>
						Author: {item.author}
					</Typography>
					<Typography component='span' style={{ float: "right" }}>
						{getTime(item.created_at)}
					</Typography>
					<Typography
						dangerouslySetInnerHTML={{ __html: item.comment_text }}
						sx={{
							margin: "1%",
							borderRadius: "16px",
							borderColor: "#9cc5ed",
							borderWidth: "3px",
						}}
					/>
					<Typography component='span' variant='h7'>
						<Link
							href={item.story_url}
							target='_blank'
							underline='hover'
							color='grey'
						>
							on: {item.story_title}
						</Link>
					</Typography>
				</CardContent>
			</Card>
		</Box>
	);
	return (
		<Box m={2}>
			{data.length &&
				data.map((item) => (
					<Box m={1} key={item.objectID}>
						<Card
							variant='outlined'
							sx={{ borderRadius: "16px" }}
							className='search-card'
						>
							<CardContent>
								<Typography component='span' variant='h6'>
									Author: {item.author}
								</Typography>
								<Typography component='span' style={{ float: "right" }}>
									{getTime(item.created_at)}
								</Typography>
								<Typography
									dangerouslySetInnerHTML={{ __html: item.comment_text }}
									sx={{ margin: "1%" }}
								/>
								<Typography component='span' variant='h7'>
									on: {item.story_title}
								</Typography>
								<Typography component='span' style={{ float: "right" }}>
									parent
								</Typography>
								<Typography component='span' style={{ float: "right" }}>
									context
								</Typography>
							</CardContent>
						</Card>
					</Box>
				))}
		</Box>
	);
	return (
		<div>
			{data.length &&
				data.map((item) => (
					<Card>
						<div
							style={{
								display: "flex",
							}}
						>
							<div>{item.author}</div>
							<div>{getTime(item.created_at)}</div>
							<div>parent | context | next </div>
							<div>on {item.story_title}</div>
						</div>
						<div dangerouslySetInnerHTML={{ __html: item.comment_text }} />
					</Card>
				))}
		</div>
	);
}

export default CommentsCard;
