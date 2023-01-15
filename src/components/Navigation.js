import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import NavItems from "./NavItems";
function Navigation() {
	const navigate = useNavigate();
	return (
		<>
			<Navbar className='navbar' expand='lg'>
				<Container>
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
				</Container>
			</Navbar>
		</>
	);
}

export default Navigation;
