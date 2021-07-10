import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
const SingleProduct = () => {
	let auto = {
		margin: '5rem auto',
	};
	const [product, setProduct] = useState({});
	const params = useParams(); //to get the corresponding link of the page
	const history = useHistory();

	useEffect(() => {
		fetch(`/api/products/${params._id}`)
			.then((response) => response.json())
			.then((product) => {
				setProduct(product);
			});
	}, [params._id]);
	return (
		<div style={auto} className="container mx-auto lg:w-3/4 w-full">
			<button className="mb-12 font-bold bg-yellow-500 py-1 px-8 rounded-full" onClick={() => { history.goBack() }}>
				Back
			</button>
			<div className="flex items-center">
				<img src={product.image} alt="pizza" />
				<div className="ml-16">
					<h1 className="text-xl font-bold">{product.name}</h1>
					<div className="text-md">{product.size}</div>
					<div className=" font-bold mt-2">₹{product.price}</div>
					<button className="bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4">Add to cart</button>
				</div>
			</div>
		</div>
	);
};

export default SingleProduct;
