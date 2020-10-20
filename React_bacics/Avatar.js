 import React,{Component} from 'react';
import './Avatar.css';
import Avatarlist from './Avatarlist';
import 'tachyons';

class Avatar extends Component{
	constructor(){
		super();
		this.state = {
			name: "Welcome to my first React.js code"
		}
	}
	namechange(){
		this.setState({
			name: "Welcome to my first React.js class component"
		})
	}
	render(){
		const avatarlistarray = [
			{
				id:1,
				name:"Shailendra",
				work:"web developer"
			},
			{
				id:2,
				name:"Kamlesh",
				work:"graphic designer"
			},
			{
				id:3,
				name:"Farhaan",
				work:"programmer"
			},
			{
				id:4,
				name:"Rohit",
				work:"leader"
			}
		]
		const avatararraycard = avatarlistarray.map( (avatarcard, i) => {
			return <Avatarlist key={i} id={avatarlistarray[i].name}
					name={avatarlistarray[i].name}	work={avatarlistarray[i].work} />
		})
		return (
			<div className="mainpage">
				<h1>{this.state.name}</h1>
				{avatararraycard}
				<button onClick={() => this.namechange()}>Submit</button>
			</div>
		)
	}
}
export default Avatar;
