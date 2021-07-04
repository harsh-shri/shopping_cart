// this is Link root component all the other component that are child to this component that will be present in this project will pass through this component
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navigation from './componenet/Navigation';
const App = () => {
	return (
		<>
			<Router>
				<Navigation />
				<Switch>
					<Route> <Home /> </Route>
					<Route> <About/> </Route>
				</Switch>
			</Router>
		</>
	);
};

export default App; // to export the above created function
