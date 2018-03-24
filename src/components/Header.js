import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		// <div  className="column">
		<header>
			{/* <div className="columns"> */}
			<nav className="navbar" aria-label="main navigation">
				<div className="navbar-brand level-left">
					<Link to='/'>Got Game?</Link>
					<div className="navbar-burger">
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
				<div className="navbar-menu level-right">
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
		{/* </div> */}
		</header>
		// </div>
	) 
}

export default Header
