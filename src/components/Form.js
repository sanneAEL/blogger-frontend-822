import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Form = () => {
	// const navigate = useNavigate();
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');

	const addBlog = (e) => {
		e.preventDefault();
		axios
			.post('https://blogger-822-final.herokuapp.com/blogs', {
				title: title,
				content: content,
			})
			.then((res) => {
				// alert('Blog added successfully');
				window.location.reload();
				console.log(res);
			})
			.catch((err) => {
				// alert('Error adding blog');
			});
	};

	// const handleChange = (event) => {
	// 	setBlog({ ...blog, [event.target.id]: event.target.value });
	// };

	// const handleSubmit = (event) => {
	// 	event.preventDefault();
	// 	// Write your POST fetch() or axios() request here
	// 	fetch('https://blogger-822-final.herokuapp.com/blogs', {
	// 		method: 'POST',
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 		},
	// 		body: JSON.stringify(blog),
	// 	}).then((res) => {
	// 		console.log(res);
	// 		// navigate('/');
	// 	});
	// };

	return (
		// <form onSubmit={handleSubmit} className='create-form'>
		// 	<label htmlFor='blog'>Blog: </label>
		// 	<input
		// 		onChange={handleChange}
		// 		id='blog'
		// 		value={blog.blog}
		// 		placeholder='Blog'
		// 	/>
		// 	<label htmlFor='content'>Content: </label>
		// 	<input
		// 		onChange={handleChange}
		// 		id='content'
		// 		value={blog.content}
		// 		placeholder='Post anything'
		// 	/>
		// 	<button type='submit'>Post</button>
		// </form>
		<form className='form mb-2' onSubmit={addBlog}>
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
			<button className='btn btn-primary'> Add Blog</button>
		</form>
	);
};

export default Form;
