import React, { useEffect, useState, useContext } from 'react';
import Blog from './BlogItem';
import axios from 'axios';
import { BlogContext } from '../App';

const BlogList = () => {
	const { blogs } = useContext(BlogContext);
	// const [blogs, setBlogs] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const handleLoadingTimeOut = setTimeout(() => {
			if (!blogs.length) {
				setLoading(false);
			}
		}, 5000);

		// axios
		// 	.get('https://blogger-822-final.herokuapp.com/blogs')
		// 	.then((res) => setBlogs(res.data));

		return () => clearTimeout(handleLoadingTimeOut);
	}, []);

	if (loading && !blogs.length) {
		return <h2>Loading...</h2>;
	}

	if (!loading && !blogs.length) {
		return <h2>Add your blog! </h2>;
	}

	return (
		<>
			{blogs &&
				[...blogs].reverse().map((blog) => <Blog key={blog._id} blog={blog} />)}
		</>
	);
};

export default BlogList;
