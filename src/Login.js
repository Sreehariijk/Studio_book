import React, { Component } from 'react';
import { TextField } from 'react-md'; 
import { Card, CardTitle, CardText} from 'react-md';
import { Button } from 'react-md';
import {connect} from "react-redux";
import loginAction from "./actions/loginAction";
const style = { width: 400};
class Login extends Component {
handleLogin(){ 
          var username=document.getElementById("floating-center-title").value; 
          var password=document.getElementById("floating-password").value;
          if(username==="" || password===""){
                alert("Empty fields");
          }        
          else if(this.props.title==="Employee Login" && username==="Sreehari" && password==="password") {
                this.props.dispatch(loginAction(this.userName.value,this.passWord.value))
                this.props.history.push("/homepage");
          }
          else if(this.props.title==="Manager Login" && username==="Hareesh" && password==="password") {
                this.props.dispatch(loginAction(this.userName.value,this.passWord.value))
                this.props.history.push("/homepage");
          }  
          else {
            alert("invalid credentials")
                username=document.getElementById("floating-center-title").value=""; 
                password=document.getElementById("floating-password").value="";  
          }
} 
  render() {
    return (
            <div className="login">
            
                <Card style={style} className="md-block-centered">
                  <CardTitle title={this.props.title} subtitle={this.props.subtitle} />
                  <CardText>
                    
                    <div className="md-grid"> 
                      <TextField id="floating-center-title" label="Username" lineDirection="center" ref={(TextField)=>this.userName=(TextField)} placeholder="Username" className="md-cell md-cell--bottom" />
                      </div>

                      <div className="md-grid">
                      <TextField id="floating-password"  label="Password" type="password" ref={(TextField)=>this.passWord=(TextField)}className="md-cell md-cell--bottom"/>    
                      </div>
                      <br/>  
                    <Button onClick={this.handleLogin.bind(this)} raised primary swapTheming>Login</Button>
                  </CardText>
               </Card>
              
           </div>
   );
 }
}
// function mapStateToProps(state){
//   return {

//   }
// }
function mapDispatchToProps(dispatch){
  return {
    dispatch:dispatch
  }
}
export default connect(mapDispatchToProps) (Login);
