import React, { useEffect, useState, useContext } from "react";
import SearchAPI from "../api/SearchAPI";
import Table from "./Table";
import { TextField, Box, MenuItem, Grid } from "@mui/material";
import UniversalContext from "../contexts/UniversalContext";
function Search() {
	const [data, setData] = useState([]);
	const [query, setQuery] = useState("");
	const [searchOption, setSearchOption] = useState("Stories");
	const [byOption, setByOption] = useState("Popularity");
	const [forOption, setForOption] = useState("All Time");
	const SearchOptions = ["All", "Stories", "Comments"];
	const byOptions = ["Popularity", "Date"];
	const { setLoading, setPageTitle } = useContext(UniversalContext);
	const forOptions = [
		"All Time",
		"Last 24h",
		"Past Week",
		"Past Year",
		"Past Month",
	];
	useEffect(() => {
		setPageTitle("Search - Hacker News");
	}, []);
	useEffect(() => {
		setLoading(true);
		SearchAPI({
			page_no: 0,
			query: query,
			searchOption: searchOption,
			byOption: byOption,
			forOption: forOption,
		})
			.then((res) => {
				setData(res.data.hits);
			})
			.finally(() => {
				setLoading(false);
			});
		SearchAPI(
			{
				page_no: 0,
				query: query,
				searchOption: searchOption,
				byOption: byOption,
				forOption: forOption,
			},
			true
		).then((res) => {
			setData(res.data.hits);
		});
	}, [query, searchOption, byOption, forOption]);
	return (
		<Box component='div'>
			<TextField
				id='outlined-basic'
				label='Search Query'
				variant='outlined'
				value={query}
				onChange={(e) => {
					setQuery(e.target.value);
				}}
				sx={{ display: "flex", margin: "16px" }}
			/>
			<Grid container spacing={2} sx={{ display: "flex", margin: "auto" }}>
				<Grid item xs={4}>
					<TextField
						select
						label='Search for'
						defaultValue='Stories'
						fullWidth
						sx={{ textAlign: "center" }}
						onChange={(e) => {
							setSearchOption(e.target.value);
						}}
					>
						{SearchOptions.map((option) => (
							<MenuItem key={option} value={option}>
								{option}
							</MenuItem>
						))}
					</TextField>
				</Grid>
				<Grid item xs={4}>
					<TextField
						select
						label='Search By'
						defaultValue='Popularity'
						fullWidth
						sx={{ textAlign: "center" }}
						onChange={(e) => {
							setByOption(e.target.value);
						}}
					>
						{byOptions.map((option) => (
							<MenuItem key={option} value={option}>
								{option}
							</MenuItem>
						))}
					</TextField>
				</Grid>
				<Grid item xs={4}>
					<TextField
						select
						label='Search From'
						defaultValue='All Time'
						fullWidth
						sx={{ textAlign: "center" }}
						onChange={(e) => {
							setForOption(e.target.value);
						}}
					>
						{forOptions.map((option) => (
							<MenuItem key={option} value={option}>
								{option}
							</MenuItem>
						))}
					</TextField>
				</Grid>
			</Grid>
			<Table data={data} />
		</Box>
	);
}

export default Search;
