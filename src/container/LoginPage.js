import React,{Component} from 'react';
import Login from '../component/Login';
import BG from '../container/BG.jpg';
class LoginPage extends Component{

  constructor(props){
      super(props);
      this.state={
          userName:'',
          password:'123'
      }
  }

  handleOnLogin(){
   this.props.history.push('/dashboard');
  }

  render(){
   
    return(
        <div>
          <img src={BG}/>
          <Login userName={this.state.userName} password={this.state.password} handleLogin={() => this.handleOnLogin()}/>
        </div>
    );

  }

}
export default LoginPage;