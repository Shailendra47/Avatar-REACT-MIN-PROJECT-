import React,{Component} from 'react';
import './Form.css';
import './contactstyle.css';

class Form extends Component{
  constructor(props){
    super(props);
    this.state = {Fullname: "Shailendra_singh", Email: "KAI47@gmail.com",
                  Contact: "9874563210", Message: "HI there!!!"}
  }
  handlename = (event) => {
    this.setState({[event.target.name]:event.target.value})
  }
  /*
  handleFullname = (event) => {
    this.setState({Fullname:event.target.value})
  }
  handleEmail = (event) => {
    this.setState({Email:event.target.value})
  }
  handleConatct = (event) => {
    this.setState({Contact:event.target.value})
  }
  handleMessage = (event) => {
    this.setState({Meassage:event.target.value})
  }
  */
  handlesubmit = (event) => {
    /*alert(`my name is ${this.state.Fullname}.my email is ${this.state.Email}.
    my contact is ${this.state.Contact}.my company message is ${this.state.Message}`);
    */
    alert(JSON.stringify(this.state));
    //console.log(JSON.stringify(this.state));
    event.preventDefault();
  }
  render(){
    return(
      <div>
        <form onSubmit={this.handlesubmit}>
          <label>Fullname: </label>
          <input type="text" name="Fullname" value={this.state.Fullname}
          onChange={this.handlename}/><br/>
          <label>Email: </label><br/>
          <input type="email" name="Email" value={this.state.Email}
          onChange={this.handlename}/><br/>
          <label>Contact: </label><br/>
          <input type="number" name="Contact" value={this.state.Contact}
          onChange={this.handlename}/><br/>
          <label>Message: </label><br/>
          <textarea name="Meassage" value={this.state.Message}
          onChange={this.handlename}></textarea>
          <input type="submit" value="submit"/><br/>
        </form>
      </div>
    )
  }
}
export default Form;
