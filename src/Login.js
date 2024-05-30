import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import Home from './App.js'
export default function Login() {
    const [authMode, setAuthMode] = useState('signin');
    const usenavigate=useNavigate();
    const changeAuthMode = () => {
        setAuthMode(authMode === 'signin' ? 'signup' : 'signin');
    };

    return (
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign {authMode === 'signin' ? 'In' : 'Up'}</h3>
                    <div className="text-center">
                        {authMode === 'signin' ? (
                            <p>
                                Not registered yet?{' '}
                                <span className="link-primary" onClick={changeAuthMode}>
                                    Sign Up
                                </span>
                            </p>
                        ) : (
                            <p>
                                Already registered?{' '}
                                <span className="link-primary" onSubmit={changeAuthMode}>
                                    Sign In
                                </span>
                            </p>
                        )}
                    </div>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Enter email"
                            required
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter password"
                            required 
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary" onClick={()=>usenavigate("/home")}>
                            Submit
                        </button>
                    </div>
                    <p className="text-center mt-2">
                        Forgot <Link to="#">password?</Link>
                    </p>
                </div>
            </form>
        </div>
    );
}
