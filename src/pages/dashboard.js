import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/header.component'
import Sidebar from '../components/sidebar.component'

export default function Dashboard() {
  return (
    <div>
        <Header/>
        <div className='w-80'>
            <h3 className='text-center m-5'>All Spaces</h3>
        </div>
        <div className="card-deck row m-2">
            <div className="card col-lg-3 col-md-3 col-sm-12 m-1">
                <img className="card-img-top m-2" style={{height: "150px", width:"100%" }} src="https://picsum.photos/200/300" alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
                <div className="card-footer d-flex justify-content-around">
                    <Link to="/space" className="btn  btn-success ">Manage</Link>
                    <button className="btn btn-warning">Pin</button>
                </div>
            </div>
            <div className="card col-lg-3 col-md-3 col-sm-12 m-1">
                <img className="card-img-top m-2" style={{height: "150px", width:"100%" }} src="https://picsum.photos/200/300" alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
                <div className="card-footer text-center">
                    <button className="btn btn-lg btn-success ">Manage</button>
                </div>
            </div>
            <div className="card col-lg-3 col-md-3 col-sm-12 m-1">
                <img className="card-img-top m-2" style={{height: "150px", width:"100%" }} src="https://picsum.photos/200/300" alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
                <div className="card-footer text-center">
                    <button className="btn btn-lg btn-success ">Manage</button>
                </div>
            </div>
            <div className="card col-lg-3 col-md-3 col-sm-12 m-1">
                <img className="card-img-top m-2" style={{height: "150px", width:"100%" }} src="https://picsum.photos/200/300" alt="Card image cap" />
                <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
                <div className="card-footer text-center">
                    <button className="btn btn-lg btn-success ">Manage</button>
                </div>
            </div>
            
        </div>
       
    </div>
  )
}
