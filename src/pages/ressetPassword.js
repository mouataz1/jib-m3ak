import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/header.component'

export default function RessetPassword() {
  return (
    <div>
       <Header/>
       <div className="container w-50">
       <h3 className=" m-4 text-center text-bold">Resset Password</h3>
       <p className='text-center'> if an account existe with this email we'll send a resset Link. </p>
       <form>
            <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            
            <button className="btn btn-success m-3">Resset Password</button>
                <p>already Have an account ? <Link to="/">Login</Link></p>
                <p>Forgot Password ? <Link to="/register">Rgister</Link></p>
        </form>
       </div>
    
    </div>
  )
}
