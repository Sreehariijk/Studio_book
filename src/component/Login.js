import React from 'react';
import { TextField } from 'react-md';
import { Card, CardTitle, CardText} from 'react-md';
import { Button } from 'react-md';

const style = { maxWidth: 320,marginTop:100 };
const Login = ({userName,password,handleLogin}) => {

     return(

        <Card style={style} className="md-block-centered">
            <CardTitle title="Login"  />
            <CardText>
            <div className="md-grid md-cell-10">
            <TextField id="floating-center-title" label="User Name" lineDirection="center" placeholder="User Name"  />
             </div>
             <div className="md-grid md-cell-10">
             <TextField  id="floating-password"label="Enter your password" type="password" />
             </div>
             <div className="md-grid md-cell-10">
             <Button onClick={() =>handleLogin()} flat primary swapTheming>Login</Button>
             </div>
            </CardText>
       </Card>
      
     );

}
export default Login;