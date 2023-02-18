import React, { Component } from 'react'

export class ForgetPasswordPage extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-xs-12">
        </div>
        <div className="col-md-4 col-xs-12">
          <form className="onboardForm">
            <h4 className="section-title-login"> FORGET PASSWORD ? </h4>
            <input className="m-2" type="email" placeholder="Enter Your Email" />
            <button type="submit" className="btn btn-success m-2 "> Reset Password </button>
          </form>
        </div>
        <div className="col-md-4 col-xs-12">
        </div>
      </div>
    )
  }
}

export default ForgetPasswordPage