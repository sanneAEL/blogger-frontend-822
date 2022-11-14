import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Blog = (param) => {
	console.log(param.blog);
	const { id } = useParams();
	const navigate = useNavigate();

	const [blog, setBlog] = useState(null);
	const [modal, setModal] = useState(false);

	useEffect(() => {
		fetch(`https://blogger-822-final.herokuapp.com/blogs/${id}`)
			.then((response) => response.json())
			.then((data) => setBlog(data));
	}, [id]);

	const handleChange = (event) => {
		setBlog({ ...blog, [event.target.id]: event.target.value });
	};

	const editShowPage = () => {
		setModal(true);
	};

	const closeModal = () => {
		setModal(false);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		// Write your PUT fetch() or axios() request here
		axios.put(`https://blogger-822-final.herokuapp.com/blogs/${id}`, blog);

		navigate('/');
	};

	const handleDelete = () => {
		// Write your DELETE fetch() or axios() request here
		axios.delete(`https://blogger-822-final.herokuapp.com/blogs/${id}`, blog);

		navigate('/');
	};

	if (!blog) {
		return <h1>Loading...</h1>;
	}

	return (
		<section>
			{modal ? (
				<div className='modal'>
					<h2>Editing {blog.blog}</h2>
					<form onSubmit={handleSubmit}>
						<label htmlFor='blog'>Blog</label>
						<input onChange={handleChange} id='blog' value={blog.blog} />
						<label htmlFor='content'>Content</label>
						<input onChange={handleChange} id='content' value={blog.content} />

						<button type='submit'>Submit</button>
						<button type='button' onClick={closeModal}>
							Close
						</button>
					</form>
				</div>
			) : (
				<>
					<h2>{blog.blog}</h2>
					<h3>Content: {blog.content}</h3>

					<button onClick={editShowPage}>Edit</button>
					<button onClick={handleDelete}>Delete</button>
				</>
			)}
		</section>
	);
};

export default Blog;
