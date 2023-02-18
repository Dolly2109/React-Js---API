import React, { Component } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Validation from '../../validation/Validation';
import AppUrl from '../api/AppUrl';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
export class Login extends Component {
  constructor(){
    super()
    this.state={
      email:'',
      password:'',
      message:'',
      LoggedIn:false
    }
  }
  formSubmit=(e)=>{
    e.preventDefault();
    let email=this.state.email
    let password=this.state.password
  
    if(email == '') toast.error('Please write email')
    else if(password =='') toast.error('Please write password')
    else if(!(Validation.passwordRegx).test(password)) toast.error('Password invalid')
    else{
      // thao tac dang nhap
      let loginBtn=document.getElementById('loginBtn')
      loginBtn.innerHTML='Login...'

      const data={
        email:this.state.email,
        password:password,
      }
      axios.post(AppUrl.Login,data).then(Response=>{
        localStorage.setItem('token',Response.data.token);
        this.setState({LoggedIn:true})
      }).catch(error=>{
        console.log(error)
        toast.error(error.Response.data.message,{
          position:"top-right"
        });
      });

    }
  }

  render() {
    if(this.state.LoggedIn){
      return<Navigate to={'/profile'}/>
    }
    if(localStorage.getItem('token')){
      return<Navigate to={'/profile'}/>
    }
    return (
      <div className="formlogin row">
        <div className="col-md-6 col-lg-6 col-xl-4  ">
          <h2 className="text-center"> LOGIN</h2>
          <form onSubmit={this.formSubmit}>
            <div className="form-outline mb-4"><label className="form-label" htmlFor="form3Example3">Email address</label><input type="email" onChange={(e) => {this.setState({email:e.target.value}) }} id="form3Example3" className="form-control form-control-lg" placeholder="Enter a valid email address" /></div>
            <div className="form-outline mb-3"><label className="form-label" htmlFor="form3Example4">Password</label><input type="password" onChange={(e) => {this.setState({password:e.target.value}) }} id="form3Example4" className="form-control form-control-lg" placeholder="Enter password" /></div>
            <div className="d-flex justify-content-between align-items-center">
              <div className="form-check mb-0"><input className="form-check-input me-2" type="checkbox" id="form2Example3" defaultValue="true" /><label className="form-check-label" htmlFor="form2Example3">Remember me</label></div>
              <a className="text-body" href="#st">Forgot password?</a>
            </div>
            <div className="text-center text-lg-start mt-4 pt-2">
              <button id='loginBtn' type="submit" className="btn btn-primary btn-lg" style={{paddingLeft: '2.5rem', paddingRight: '2.5rem'}}>Login</button>
              <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account?<a href="#st">Register</a></p>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    )
  }
}

export default Login