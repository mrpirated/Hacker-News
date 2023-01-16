import React from "react";

import {
	AppBar,
	Container,
	Typography,
	Toolbar,
	Box,
	Menu,
	MenuItem,
	IconButton,
	Button,
	Tooltip,
	Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate } from "react-router";
import NavItems from "./NavItems";
function Navigation() {
	const navigate = useNavigate();
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};
	return (
		<>
			<AppBar expand='lg' position='static' sx={{ backgroundColor: "#06a5a5" }}>
				<Container maxWidth='xl'>
					<Toolbar disableGutters>
						<AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />

						<Typography
							variant='h6'
							noWrap
							component='a'
							href='/'
							sx={{
								mr: 2,
								display: { xs: "none", md: "flex" },
								fontFamily: "monospace",
								fontWeight: 700,
								letterSpacing: ".3rem",
								color: "inherit",
								textDecoration: "none",
							}}
						>
							HACKER NEWS
						</Typography>

						<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
							<IconButton
								size='large'
								aria-label='account of current user'
								aria-controls='menu-appbar'
								aria-haspopup='true'
								onClick={handleOpenNavMenu}
								color='inherit'
							>
								<MenuIcon />
							</IconButton>
							<Menu
								id='menu-appbar'
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: "bottom",
									horizontal: "left",
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "left",
								}}
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								sx={{
									display: { xs: "block", md: "none" },
								}}
							>
								{NavItems.map((item) => (
									<MenuItem
										key={item.name}
										onClick={() => {
											navigate(item.path);
											handleCloseNavMenu();
										}}
									>
										<Typography textAlign='center'>{item.name}</Typography>
									</MenuItem>
								))}
							</Menu>
						</Box>
						<AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
						<Typography
							variant='h5'
							noWrap
							component='a'
							href=''
							sx={{
								mr: 2,
								display: { xs: "flex", md: "none" },
								flexGrow: 1,
								fontFamily: "monospace",
								fontWeight: 700,
								letterSpacing: ".3rem",
								color: "inherit",
								textDecoration: "none",
							}}
						>
							HACKER NEWS
						</Typography>
						<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
							{NavItems.map((item) => (
								<Button
									key={item.name}
									onClick={() => {
										navigate(item.path);
										handleCloseNavMenu();
									}}
									sx={{ my: 2, color: "white", display: "block" }}
								>
									{item.name}
								</Button>
							))}
						</Box>
					</Toolbar>
				</Container>
				{/* <Container>
					<Navbar.Brand
						style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: "2rem" }}
						title='Hacker News'
						onClick={() => {
							navigate("/");
						}}
					>
						Hacker News
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='me-auto'>
							{NavItems.map((item) => (
								<Nav.Link
									style={{ color: "#FFFFFF", padding: "10px" }}
									as={Link}
									to={item.path}
									key={item.path}
								>
									{item.name}
								</Nav.Link>
							))}
						</Nav>
					</Navbar.Collapse>
				</Container> */}
			</AppBar>
		</>
	);
}

export default Navigation;
