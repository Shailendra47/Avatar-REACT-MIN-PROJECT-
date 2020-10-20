import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './CompoDemo.css';

class CompoDemo extends Component{
	render(){
		return <div className="backmain">
				<h1> Hello {this.props.name} </h1>
				<p> Welcome to my world </p>
			</div>
	}
} 	
export default CampoDemo;
	

