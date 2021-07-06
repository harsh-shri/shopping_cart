import Product from './Product';
import { useState, useEffect, useContext } from 'react';
import { CartContext } from '../CartContext';

const Products = () => {
	// const {name} = useContext(CartContext)
	let auto = {
		margin: 'auto',
		maxWidth: '1200px',
	};
	const [products, setProducts] = useState([]);
	useEffect(() => {
		fetch('/api/products')
			.then((response) => response.json())
			.then((products) => {
				setProducts(products);
				// console.log(products);
			});
	}, []);
	return (
		<div style={auto} className=" container mx-auto">
			<h1 className="text-lg font-bold my-8">Products</h1>
			<div className="grid grid-cols-5 my-8 gap-24">
				{products.map(product => <Product key={product._id} product={product} />)}
			</div>
		</div>
	);
};

export default Products;
