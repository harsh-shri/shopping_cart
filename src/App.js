// this is Link root component all the other component that are child to this component that will be present in this project will pass through this component
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navigation from './componenet/Navigation';
import Cart from './pages/Cart';
import SingleProduct from './pages/SingleProduct';
import { CartContext } from './CartContext';
import { useState, useEffect } from 'react';
import {getCart, storeCart} from './helpers'


const App = () => {
	const [cart, setCart] = useState({});
	//fetch from local storage
	
	useEffect(() => {
		getCart().then(cart =>{
			setCart(JSON.parse(cart))
		})
	}, [])

	useEffect(()=>{
		storeCart(JSON.stringify(cart))
	}, [cart])
	return (
		<>
			<Router>
				<CartContext.Provider value={{ cart:cart, setCart }}>
					<Navigation />
					<Switch>
						<Route exact path="/" component={Home}></Route>
						<Route exact path="/products/:_id" component={SingleProduct}></Route>
						<Route exact path="/cart" component={Cart}></Route>
					</Switch>
				</CartContext.Provider>
			</Router>
		</>
	);
};

export default App; // to export the above created function
// "/:" is used to give dynamic parameter