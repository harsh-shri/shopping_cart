import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../CartContext';

const Navigation = () => {
	const cartStyle = {
		background: "#F59E0D",
		display: "flex",
		padding: "6px 12px",
		borderRadius: "50px"
	}
	const { cart } = useContext(CartContext);

	return (
		<>
			<nav className="container mx-auto flex items-center justify-between py-2 lg:w-3/4 w-full">
				<Link className ="font-bold" to="/">
					<img className="mr-2" style={{ height: 45, display: 'inline-block' }} src="/images/logo.png" alt="logo" />
					Pizza
				</Link>
				<ul className="flex items-center">
					<li className="ml-6">
						<Link className ="font-bold" to="/">Home</Link>
					</li>
					<li className="ml-6">
						<Link to="/cart">
							<div style={cartStyle}>
								<span>{cart.totalItems ? cart.totalItems : 0}</span>
								<img className="ml-2" style={{ height: 20, filter: "invert(1)" }} src="/images/cart.png" alt="cart-icon" />
							</div>
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};
export default Navigation;
