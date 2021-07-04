//This is the entry file of our ract app

import ReactDom from 'react-dom'; // this library give sus the render method
import App from './App'; // to import the App component-- no need to write .js coz import system import module automatically add .js
import './Index.css'; // we wanna add this css globally to all component so we are adding it here so that it can be accessed by all components forom here

ReactDom.render(
	// here we are saying simple render given content into given component
	<App />, // we here say that render this component
	document.getElementById('root')
);
