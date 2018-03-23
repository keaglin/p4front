import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<header>
			<nav className="navbar" aria-label="main navigation">
				<div className="navbar-brand">
					<Link to='/'>Got Game?</Link>
					<div className="navbar-burger">
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
				<div className="navbar-menu">
					<div className="navbar-start">
						{/* navigation */}
						<Link className="nav-item" to='/posts'>Posts</Link>
						<Link className="nav-item" to='/games'>Games</Link>
						<Link className="nav-item" to='/forum'>Forum</Link>
					</div>
					<div className="navbar-end">
						{/* login/signup buttons */}
						<Link className="nav-item" to='/signup'><div className="btn">Sign Up</div></Link>
						<Link className="nav-item" to='/login'><div className="btn">Login</div></Link>
					</div>
				</div>
			</nav>
			{/* <nav className="navbar">
				<div className="nav-wrapper">
					<a href="#" className="brand-logo">Got Game?</a>
					<ul id="nav-mobile" className="right hide-on-med-and-down">
						<Link to='/posts'>Posts</Link>
						<Link to='#'>Sign Up</Link>
						<Link to='#'>Login</Link>
					</ul>
				</div>
			</nav> */}
		</header>
	) 
}

export default Header
