import React from "react";
import { Card, CardContent, Box, Typography, Link } from "@mui/material";
import getTime from "../utils/getTime";
import { useNavigate } from "react-router-dom";
function SearchCard(props) {
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
						variant='h5'
						component='span'
						onClick={() => {
							window.open(item.url, "_blank");
						}}
					>
						{item.title}
					</Typography>

					<Typography component='span'>
						{" "}
						<Link
							href={item.url}
							target='_blank'
							underline='hover'
							color='grey'
						>
							({item.url})
						</Link>
					</Typography>
					<Typography component='span' style={{ float: "right" }}>
						{getTime(item.created_at)}
					</Typography>
					<Typography sx={{ mb: 1.5 }} color='text.secondary'>
						{item.points} points
					</Typography>
					<Typography component='span'>Author: {item.author}</Typography>
					<Typography
						component='span'
						style={{ float: "right" }}
						onClick={() => {
							navigate(`/comment/${item.objectID}`, {
								state: { title: item.title, objectID: item.objectID },
							});
						}}
						className='comment'
					>
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
