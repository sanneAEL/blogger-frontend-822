import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<div className='nav'>
			<h1>Blogger</h1>
			<nav>
				<Link to='/' className='links'>
					Home
				</Link>

				<Link to='/add-blog' className='links'>
					Add blog
				</Link>
			</nav>
		</div>
	);
};

export default Nav;
