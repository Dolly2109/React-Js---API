import React, { Component } from 'react'
import Header from '../common/Header';
import ForgetPassword from '../others/ForgetPassword';
import Footer from '../common/Footer';

export class ForgetPasswordPage extends Component {
  render() {
    return (
      <div>
          <Header />
          <ForgetPassword />
          <Footer />
      </div>
    )
  }
}

export default ForgetPasswordPage