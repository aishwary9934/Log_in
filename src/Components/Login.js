import React, { Component } from 'react'
import {Link} from "react-router-dom"


export default class Login extends Component {
constructor(props) {
  super(props)

  this.state = {
     email: '',
     password:'',
  };

  this.handlesubmit = this.handlesubmit.bind(this);

}

handlesubmit(e){
    e.preventDefault();
    const {  email, password} = this.state;
    console.log( email, password);
    fetch("http://localhost:5000/login-user",{
        method:'POST',
        crossDomain:true,
        headers:{
          "Content-Type":"application/json",
          Accept:"application/json",
          "Access-Control-Allow-Origin":"*"
        },
        body:JSON.stringify({
          
            email,
             password,

        }),
  
      })
      .then((res)=> res.json())
      .then((data)=>{
        console.log(data, "Log in successfully");
        if (data.status==="ok") {
          alert("Login successfully");
          window.localStorage.setItem("token",data.data);
          window.localStorage.setItem("loggedIn", true);
          window.location.href="./UserDetails";
        }
            })
    

}

    render() {

   



  return (<>
  <form onSubmit={this.handlesubmit}>
    <div className='row justify-content-center pt-5 ' >
        <div className='col-sm-6'>
            <div className='card p-4'>
            <div className="form-group">
    <label>Email address:</label>
    <input type="email" className="form-control" placeholder="Enter email" 
    onChange={(e) => this.setState({email: e.target.value})}
        
    id="email" required />
  </div>
  <div className="form-group mt-4 ">
    <label>Password:</label>
    <input type="password" className="form-control" placeholder="Enter password" 
     onChange={(e) => this.setState({password: e.target.value})}
    
    id="pwd" required />
  </div>
  <div className="form-group form-check mt-3">
    <label className="form-check-label">
      <input className="form-check-input" type="checkbox" /> Remember me
    </label>
  </div>
  <button type="submit"  className="btn btn-primary">Login</button>
           
    
   


    <br />
    <br />
     <p>Create New Account Click Here....<Link to="/Signup"> Signup </Link></p>
     </div>
        </div>
     </div>
     </form>
    </>
  )
}
}

