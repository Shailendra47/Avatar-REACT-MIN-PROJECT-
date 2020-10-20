import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';

const Demo = ({name}) => {
	return <div className="backmain">
				<h1> Hello {name} </h1>
				<p> Welcome to my Code </p>
			</div>
	} 	
export default Demo;