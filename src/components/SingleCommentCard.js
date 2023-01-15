import React from "react";
import { Card, CardContent, Box, Typography } from "@mui/material";
import getTime from "../utils/getTime";
function SingleCommentCard(props) {
	const { data, replyTo } = props;
	return (
		<div>
			{data && data.length
				? data.map((item) => (
						<Box ml={1} mb={1} pl={1} key={item.id}>
							<Card
								variant='outlined'
								sx={{
									borderWidth: "0px 0px 2px 2px",
									borderRadius: "16px",
									backgroundColor: "#bdf2f2",
									borderColor: "#9cc5ed",
								}}
							>
								<CardContent>
									<Typography component='span' variant='h5'>
										{item.author}
									</Typography>
									<Typography component='span' variant='h7'>
										{" "}
										Reply to: {replyTo}
									</Typography>
									<Typography component='span' style={{ float: "right" }}>
										{getTime(item.created_at)}
									</Typography>
									<Typography
										dangerouslySetInnerHTML={{ __html: item.text }}
										sx={{ margin: "1%" }}
									/>
									{item.children.length > 0 && (
										<SingleCommentCard
											data={item.children}
											replyTo={item.author}
										/>
									)}
								</CardContent>
							</Card>
						</Box>
				  ))
				: ""}
		</div>
	);
}

export default SingleCommentCard;
