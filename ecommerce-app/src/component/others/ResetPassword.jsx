import React, { Component } from 'react'

export class ResetPassword extends Component {
  render() {
    return (
      <div className=" row text-center">
        <div className="d-flex justify-content-center col-md-3 col-sm-12">
        </div>
        <div className="d-flex justify-content-center col-md-6 col-sm-12">
          <form className="onboardForm" id="fromreset">
            <h4 className="section-title-login"> RESET PASSWORD </h4>
            <input type="text" placeholder="Enter Your Pin Code" />
            <input className="form-control m-2" type="email" placeholder="Enter Your Email" />
            <input className="form-control m-2" type="password" placeholder="Your New Password" />
            <input className="form-control m-2" type="password" placeholder="Confirm Your Password" />
            <button type="submit" className="btn btn-success m-2 "> Reset Password </button>
          </form>
        </div>
        <div className="d-flex justify-content-center col-md-3 col-sm-12">
        </div>
      </div>
    )
  }
}

export default ResetPassword