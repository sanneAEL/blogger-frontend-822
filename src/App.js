import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import BlogEdit from './components/BlogEdit';
import Home from './components/Home';
import axios from 'axios';

// Context API  maintain your state in the whole application without passing it again and again
export const BlogContext = createContext();
function App() {
	const [blogs, setBlogs] = useState([]);

	const getBlogs = async () => {
		const response = await axios
			.get(`https://blogger-822-final.herokuapp.com/blogs`)
			.then((res) => {
				setBlogs(res.data);
			});

		return response;
	};

	useEffect(() => {
		getBlogs();
	}, []); //[] is a dependency array, it will run only once

	return (
		<BlogContext.Provider value={{ blogs, setBlogs, getBlogs }}>
			<Router>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/blogs/:id' element={<BlogEdit />} />
				</Routes>
			</Router>
		</BlogContext.Provider>
	);
}

export default App;
