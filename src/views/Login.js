import React from 'react'
import MovieImgae from './../assets/img/movie-login.png'
import './Login.css'

function Login() {
    return (
        <div className="login-container">
            <h1 className="text-center">Login</h1>
            <div className="row">
                <div className="col-md-6">
                    <img src={MovieImgae} className="img-fluid" />
                </div>
            </div>
        </div>
    )
}

export default Login
