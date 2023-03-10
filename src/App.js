import React, { useState, useEffect } from "react";
import LoadingProvider from "./components/LoadingProvider";
import { Route, Routes } from "react-router-dom";
import Search from "./components/Search";
import Navigation from "./components/Navigation";
import News from "./components/News";
import Ask from "./components/Ask";
import Show from "./components/Show";
import UniversalContext from "./contexts/UniversalContext";
import "./App.css";
import Comments from "./components/Comments";
import Jobs from "./components/Jobs";
import ViewComment from "./components/ViewComment";
import Author from "./components/Author";
import Home from "./components/Home";

function App() {
	// state to keep track of loading
	const [loading, setLoading] = useState(false);
	// state to keep track of the title of the website
	const [pageTitle, setPageTitle] = useState("Hacker News");

	// useEffect hook to update the title of the website
	useEffect(() => {
		document.title = pageTitle;
	}, [pageTitle]);

	return (
		<div className='App'>
			{/* Navigation component */}

			{/* UniversalContext provider to pass the states and methods to the child components */}
			<UniversalContext.Provider value={{ loading, setPageTitle, setLoading }}>
				{/* LoadingProvider component to show loading state */}
				<LoadingProvider active={loading}>
					{/* react-router-dom Routes component */}
					<Navigation />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/news' element={<News />} />
						{/* Route component to handle the '/search' path */}
						<Route exact path='/search' element={<Search />} />
						{/* Route component to handle the '/stories' path */}

						{/* Route component to handle the '/comments' path */}
						<Route exact path='/comments' element={<Comments />} />
						<Route exact path='/ask' element={<Ask />} />
						<Route exact path='/show' element={<Show />} />
						<Route exact path='/jobs' element={<Jobs />} />
						<Route path='/comment/*' element={<ViewComment />} />
						<Route path='/author/*' element={<Author />} />
					</Routes>
				</LoadingProvider>
			</UniversalContext.Provider>
		</div>
	);
}

export default App;
