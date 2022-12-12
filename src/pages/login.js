import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/header.component';

export default function Login() {
  return (
   <div>
       <Header />
       <div className="container w-50">
       <h3 className=" m-4 text-center text-bold">Login</h3>
       <form>
            <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            
            <button className="btn btn-success m-3">Login</button>
                <p>Don't Have an account ? <Link to="/register">Sign Up</Link></p>
                <p>Forgot Password ? <Link to="/resset-password">Resser Password</Link></p>
        </form>
       </div>
    
    </div>
  ) 
    
    
}
