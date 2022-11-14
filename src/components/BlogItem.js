import React, { useEffect, useState, useContext } from 'react';
import { useReducer } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { BlogContext } from '../App';
import axios from 'axios';

const BlogItem = ({ blog }) => {
	const { getBlogs } = useContext(BlogContext);
	const handleDelete = () => {
		axios
			.delete(`https://blogger-822-final.herokuapp.com/blogs/${blog._id}`)
			.then((res) => {
				getBlogs();
			});
	};

	return (
		<Card style={{ width: '18rem', marginBottom: '1rem' }}>
			<Card.Body>
				<Card.Title>{blog?.title}</Card.Title>
				<Card.Text>{blog?.content}</Card.Text>
				<Link className='btn btn-primary me-2' to={`/blogs/${blog._id}`}>
					Edit
				</Link>
				<Button variant='danger' onClick={handleDelete}>
					Delete
				</Button>
			</Card.Body>
		</Card>
	);
};
export default BlogItem;
