import { Link } from 'react-router-dom';

function Header() {
	return (
		<div className='container'>
			<header className='header'>
				<Link to='/' className='header__title'>
					IT-outstaffing
				</Link>
				<nav className='header__navigation'>
					<Link className='header__link' to='/'>
						Home
					</Link>
					<Link className='header__link' to='/analytics'>
						Analytics
					</Link>
				</nav>
			</header>
			<div className='header__border'></div>
		</div>
	);
}

export default Header;
