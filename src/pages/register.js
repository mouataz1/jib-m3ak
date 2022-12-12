import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/header.component'

export default function Register() {
  return (
    <div>
       <Header/>
       <div className="container w-50">
       <h3 className=" m-4 text-center text-bold">Register</h3>
       <form>
       <div className="form-group">
                <label for="exampleInputEmail1">UserName</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">User name will be displayed to other users</small>
            </div>
            <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            
            <button className="btn btn-success m-3">Create Account</button>
                <p>already Have an account ? <Link to="/">Login</Link></p>
        </form>
       </div>
    
    </div>
  )
}
