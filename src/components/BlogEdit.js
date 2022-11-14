import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { BlogContext } from '../App';
import Blog from './Blog';

const BlogEdit = () => {
	const { id } = useParams();
	const { getBlogs } = useContext(BlogContext);
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const navigate = useNavigate();
	// useEffect is a function which runs everytime this component is rendered
	useEffect(() => {
		axios
			.get(`https://blogger-822-final.herokuapp.com/blogs/${id}`)
			.then((res) => {
				setTitle(res.data.title);
				setContent(res.data.content);
			});
	}, []);

	const handleEdit = (e) => {
		e.preventDefault();
		// the data coming from the axios is already in the json format
		// You'll use .json() method when you're using fetch API
		axios
			.put(`https://blogger-822-final.herokuapp.com/blogs/${id}`, {
				title: title,
				content: content,
			})
			.then((res) => {
				getBlogs();
				navigate('/');
			});
	};

	return (
		<form className='form mb-2' onSubmit={handleEdit}>
			<h1>Blogger</h1>
			<input
				type='text'
				placeholder='title'
				className='form-control mb-2'
				value={title}
				onChange={(event) => {
					setTitle(event.target.value);
				}}
			/>
			<input
				type='text'
				placeholder='content'
				className='form-control mb-2'
				value={content}
				onChange={(event) => {
					setContent(event.target.value);
				}}
			/>
			<button className='btn btn-primary'>Update Blog</button>
		</form>
	);
};

export default BlogEdit;
