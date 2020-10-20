import React from 'react';

const Avatarlist = (props) => {
	return(
		<div className="style ma4 bg-light-blue dib grow pa4">
			<img src={`https://joeschmoe.io/api/v1/${props.name}`} alt="avatar" />
			<h1 className="tc"> {props.name} </h1>
			<p className="tc"> {props.work} </p>
		</div>
		)
}
export default Avatarlist;
