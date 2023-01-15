import React from "react";
import { Card, CardContent, Box, Typography } from "@mui/material";
import getTime from "../utils/getTime";

function CommentsCard(props) {
	const { data, item } = props;
	return (
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
