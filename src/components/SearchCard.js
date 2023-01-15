import React from "react";
import { Card, CardContent, Box, Typography } from "@mui/material";
import getTime from "../utils/getTime";
function SearchCard(props) {
	const { data, item } = props;
	return (
		<Box m={1} key={item.objectID}>
			<Card
				variant='outlined'
				sx={{ borderRadius: "16px" }}
				className='search-card'
			>
				<CardContent>
					<Typography variant='h5' component='span'>
						{item.title}
					</Typography>
					<Typography component='span' style={{ float: "right" }}>
						{getTime(item.created_at)}
					</Typography>
					<Typography sx={{ mb: 1.5 }} color='text.secondary'>
						{item.points} points
					</Typography>
					<Typography component='span'>Author: {item.author}</Typography>
					<Typography component='span' style={{ float: "right" }}>
						{item.num_comments <= 1
							? item.num_comments === 0
								? "discuss"
								: "1 comment"
							: `${item.num_comments} comments`}
					</Typography>
				</CardContent>
			</Card>
		</Box>
	);
	return (
		<Box m={2}>
			{data.length &&
				data
					.filter((item) => item.title != null)
					.map((item) => (
						<Box m={1} key={item.objectID}>
							<Card
								variant='outlined'
								sx={{ borderRadius: "16px" }}
								className='search-card'
							>
								<CardContent>
									<Typography variant='h5' component='span'>
										{item.title}
									</Typography>
									<Typography component='span' style={{ float: "right" }}>
										{getTime(item.created_at)}
									</Typography>
									<Typography sx={{ mb: 1.5 }} color='text.secondary'>
										{item.points} points
									</Typography>
									<Typography component='span'>
										Author: {item.author}
									</Typography>
									<Typography component='span' style={{ float: "right" }}>
										{item.num_comments <= 1
											? item.num_comments === 0
												? "discuss"
												: "1 comment"
											: `${item.num_comments} comments`}
									</Typography>
								</CardContent>
							</Card>
						</Box>
					))}
		</Box>
	);
}

export default SearchCard;
